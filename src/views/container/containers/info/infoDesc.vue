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
      title="Status"
      :collapseOptions="{ canExpand: true, helpMessage: '容器的狀態' }"
      :column="1"
      :data="podStatus"
      :schema="statusSchema"
    />
    <Description
      title="IP"
      :collapseOptions="{ canExpand: true, helpMessage: '容器實際部署到的主機IP及其叢集內部IP' }"
      :column="2"
      :data="podStatus['status']"
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
    <Description
      title="Volumes"
      :collapseOptions="{ canExpand: true, helpMessage: '容器掛載的卷宗' }"
      :column="2"
      :data="volumes"
      :schema="volumeSchema"
    />
    <Description
      title="Environments"
      :collapseOptions="{ canExpand: true, helpMessage: '容器的環境變數' }"
      :column="2"
      :data="envs"
      :schema="envSchema"
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
  import { PodInCreate } from '/@/api/model/resources/podModel';
  import { ContainerPort } from '/@/api/model/resources/resourcesModel';

  import { metaSchema, statusSchema, imageSchema, portSchema, ipSchema } from './data';

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
      const podStatus = reactive({});
      const portInfo = reactive({} as ContainerPort);

      const volumeSchema = reactive([] as DescItem[]);
      const volumes = reactive({});

      const envSchema = reactive([] as DescItem[]);
      const envs = reactive({});

      const logs = ref('');

      onMounted(() => {
        getPodByNameAPI(props.podName, 'message')
          .then((pod) => {
            podInfo.metadata = pod.pod.metadata;
            podInfo.spec = pod.pod.spec;

            portInfo.containerPort = podInfo.spec.containers![0].ports![0].containerPort;
            portInfo.protocol = podInfo.spec.containers![0].ports![0].protocol;

            let n = 0;
            podInfo.spec.volumes?.forEach((value) => {
              volumes[`pvc${n}`] = value.persistentVolumeClaim!.claimName;
              volumeSchema.push(
                {
                  field: `pvc${n}`,
                  label: '卷宗名稱',
                },
                {
                  field: `mount${n}`,
                  label: '掛載路徑',
                }
              );
              n++;
            });

            podInfo.spec.containers![0].volumeMounts?.forEach((value) => {
              volumes[`mount${value.name}`] = value.mountPath;
            });

            n = 0;
            podInfo.spec.containers![0].env?.forEach((value) => {
              envs[`name${n}`] = value.name;
              envs[`value${n}`] = value.value;

              envSchema.push(
                {
                  field: `name${n}`,
                  label: 'Key',
                },
                {
                  field: `value${n}`,
                  label: 'Value',
                }
              );
              n++;
            });

            descIsReady.value = true;
          })
          .catch((_error) => {});

        getPodStatusByNameAPI(props.podName, 'message')
          .then((status) => {
            podStatus['status'] = status.status;
            podStatus['phase'] = status.status.phase;
            podStatus['message'] =
              status.status.containerStatuses![0].state!.waiting?.message ?? '';
            statusIsReady.value = true;
          })
          .catch((_error) => {
            console.log(_error);
          });

        getPodLogByNameAPI(props.podName)
          .then((log) => {
            logs.value = log;
            if (log) logIsReady.value = true;
          })
          .catch((_error) => {});
      });

      return {
        descIsReady,
        statusIsReady,
        logIsReady,

        metaSchema,
        statusSchema,
        imageSchema,
        portSchema,
        ipSchema,
        volumeSchema,
        envSchema,

        podInfo,
        podStatus,
        portInfo,
        volumes,
        envs,
        logs,
      };
    },
  });
</script>
