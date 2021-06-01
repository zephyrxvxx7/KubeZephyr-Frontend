<template>
  <div v-if="isReady">
    <Description
      title="Metadata"
      :collapseOptions="{ canExpand: true, helpMessage: '容器的基本資訊' }"
      :column="1"
      :data="podInfo.metadata"
      :schema="metaSchema"
    />
    <Description
      title="Status"
      :collapseOptions="{ canExpand: true, helpMessage: '容器的狀態' }"
      :column="1"
      :data="podStatus"
      :schema="statusSchema"
    />
    <Description
      title="Image"
      :collapseOptions="{ canExpand: true, helpMessage: '容器使用的映像檔及其拉取策略' }"
      :column="2"
      :data="podInfo.spec.containers[0]"
      :schema="imageSchema"
    />
    <Description
      title="IP"
      :collapseOptions="{ canExpand: true, helpMessage: '容器實際部署到的主機IP及其叢集內部IP' }"
      :column="2"
      :data="podStatus['status']"
      :schema="ipSchema"
    />
    <Description
      title="Port"
      :collapseOptions="{ canExpand: true, helpMessage: '容器開啟的通訊埠' }"
      :column="2"
      :data="portInfo"
      :schema="portSchema"
    />
    <BasicTable
      title="Volumes"
      titleHelpMessage="容器掛載的卷宗"
      :columns="volumeColumns"
      :dataSource="volumes"
      :striped="false"
      :bordered="false"
      :showIndexColumn="false"
    />
    <BasicTable
      title="Environments"
      titleHelpMessage="容器的環境變數"
      :columns="envColumns"
      :dataSource="envs"
      :striped="false"
      :bordered="false"
      :showIndexColumn="false"
    />
  </div>
  <div v-else>
    <span> Loading... </span>
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
  import { BasicTable } from '/@/components/Table';
  import { Description } from '/@/components/Description';
  import { CollapseContainer } from '/@/components/Container/index';

  import { propTypes } from '/@/utils/propTypes';

  import { getPodAPI, getPodLogAPI, getPodStatusAPI } from '/@/api/admin';
  import { PodInCreate } from '/@/api/model/resources/podModel';
  import { ContainerPort } from '/@/api/model/resources/resourcesModel';

  import {
    metaSchema,
    statusSchema,
    imageSchema,
    portSchema,
    ipSchema,
    volumeColumns,
    envColumns,
  } from './data';

  export default defineComponent({
    components: {
      BasicTable,
      Description,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
      CollapseContainer,
    },
    props: {
      id: propTypes.string,
      podName: propTypes.string,
    },
    setup(props) {
      const isReady = ref(false);
      const logIsReady = ref(false);

      const podInfo = reactive({ metadata: {}, spec: { containers: [] } } as PodInCreate);
      const podStatus = reactive({});
      const portInfo = reactive({} as ContainerPort);

      const volumes = reactive([] as any[]);
      const envs = reactive([] as any[]);

      const logs = ref('');

      onMounted(() => {
        getPodAPI(props.id, props.podName, 'message')
          .then((pod) => {
            podInfo.metadata = pod.pod.metadata;
            podInfo.spec = pod.pod.spec;

            portInfo.containerPort = podInfo.spec.containers![0].ports![0].containerPort;
            portInfo.protocol = podInfo.spec.containers![0].ports![0].protocol;

            podInfo.spec.volumes?.forEach((volume) => {
              volumes.push({
                pvc: volume.persistentVolumeClaim!.claimName,
                mountPath: podInfo.spec.containers![0].volumeMounts?.find(
                  (volumeMounts) => volumeMounts.name == volume.name
                )?.mountPath,
              });
            });

            podInfo.spec.containers![0].env?.forEach((env) => {
              envs.push({
                name: env.name,
                value: env.value,
              });
            });
          })
          .catch((_error) => {});

        getPodStatusAPI(props.id, props.podName, 'message')
          .then((status) => {
            podStatus['status'] = status.status;
            podStatus['phase'] = status.status.phase;
            podStatus['message'] =
              status.status.containerStatuses![0].state!.waiting?.message ?? 'None';
          })
          .catch((_error) => {});

        getPodLogAPI(props.id, props.podName)
          .then((log) => {
            logs.value = log;
            if (log) logIsReady.value = true;
          })
          .catch((_error) => {});

        isReady.value = true;
      });

      return {
        isReady,
        logIsReady,

        metaSchema,
        statusSchema,
        imageSchema,
        portSchema,
        ipSchema,

        volumeColumns,
        envColumns,

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
