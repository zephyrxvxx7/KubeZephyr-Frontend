<template>
  <div v-if="descIsReady">
    <Description
      title="Metadata"
      :collapseOptions="{ canExpand: true, helpMessage: '容器的基本資訊' }"
      :column="1"
      :data="podInfo.metadata"
      :schema="metaSchema"
    />
    <Description
      title="Image"
      :collapseOptions="{ canExpand: true, helpMessage: '容器使用的映像檔及其拉取策略' }"
      :column="2"
      :data="podInfo.spec.containers[0]"
      :schema="imageSchema"
    />
  </div>
  <div v-else>
    <span> Loading... </span>
  </div>

  <div v-if="statusIsReady">
    <Description
      title="IP"
      :collapseOptions="{ canExpand: true, helpMessage: '容器的部署的主機IP及其叢集內部虛擬IP' }"
      :column="2"
      :data="podStatus.status"
      :schema="ipSchema"
    />
  </div>

  <div v-if="descIsReady">
    <Description
      title="Port"
      :collapseOptions="{ canExpand: true, helpMessage: '容器開啟的通訊埠' }"
      :column="2"
      :data="portInfo"
      :schema="portSchema"
    />
  </div>

  <CollapseContainer class="w-full h-32 mt-5 bg-white rounded-md" title="logs">
    <div v-if="logIsReady">
      <span style="white-space: pre-line"> {{ logs }} </span>
    </div>
    <div v-else>
      <span> There don't have any logs... </span>
    </div>
  </CollapseContainer>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, onMounted } from 'vue';
  import { Descriptions } from 'ant-design-vue';
  import { Description, DescItem } from '/@/components/Description';
  import { CollapseContainer } from '/@/components/Container/index';

  import { propTypes } from '/@/utils/propTypes';

  import { getPodByNameAPI, getPodLogByNameAPI, getPodStatusByNameAPI } from '/@/api/pod';
  import { PodInCreate, PodInResponseStatus } from '/@/api/model/resources/podModel';
  // import { ContainerPort, Volume, VolumeMount } from '/@/api/model/resources/resourcesModel'
  import { ContainerPort } from '/@/api/model/resources/resourcesModel';

  const metaSchema: DescItem[] = [
    {
      field: 'name',
      label: '名稱',
    },
    {
      field: 'creationTimestamp',
      label: '創建時間',
    },
    {
      field: 'selfLink',
      label: 'selfLink',
    },
  ];

  const imageSchema: DescItem[] = [
    {
      field: 'image',
      label: '映像檔',
    },
    {
      field: 'imagePullPolicy',
      label: '映像檔拉取策略',
    },
  ];

  const portSchema: DescItem[] = [
    {
      field: 'containerPort',
      label: '通訊埠',
    },
    {
      field: 'protocol',
      label: '通訊協定',
    },
  ];

  const ipSchema: DescItem[] = [
    {
      field: 'hostIP',
      label: '主機IP位置',
    },
    {
      field: 'podIP',
      label: '容器IP位置',
    },
  ];

  // const volumeSchema: DescItem[] = []

  export default defineComponent({
    components: {
      Description,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      CollapseContainer,
    },
    props: {
      podName: propTypes.string,
    },
    setup(props) {
      const descIsReady = ref(false);
      const logIsReady = ref(false);
      const statusIsReady = ref(false);

      const podInfo = reactive({ metadata: {}, spec: { containers: [] } } as PodInCreate);
      const portInfo = reactive({} as ContainerPort);
      // const volumes = reactive({} as Volume & VolumeMount)

      const logs = ref('');
      const podStatus = reactive({} as PodInResponseStatus);

      onMounted(() => {
        getPodByNameAPI(props.podName, 'message')
          .then((pod) => {
            podInfo.metadata = pod.pod.metadata;
            podInfo.spec = pod.pod.spec;

            if (podInfo.spec.containers[0].ports) {
              portInfo.containerPort = podInfo.spec.containers[0].ports[0].containerPort;
              portInfo.protocol = podInfo.spec.containers[0].ports[0].protocol;
            }

            if (podInfo.spec.volumes) {
            }
            descIsReady.value = true;
          })
          .catch((_error) => {});

        getPodStatusByNameAPI(props.podName, 'message')
          .then((status) => {
            podStatus.status = status.status;
            statusIsReady.value = true;
          })
          .catch((_error) => {});

        getPodLogByNameAPI(props.podName)
          .then((log) => {
            logs.value = log;
            if (log) logIsReady.value = true;
          })
          .catch((_error) => {});
      });

      // computed()

      return {
        descIsReady,
        statusIsReady,
        logIsReady,

        metaSchema,
        imageSchema,
        portSchema,
        ipSchema,

        podInfo,
        portInfo,
        podStatus,
        logs,
      };
    },
  });
</script>
