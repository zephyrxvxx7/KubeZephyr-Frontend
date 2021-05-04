<template>
  <div>
    <a-button color="success" class="my-4" @click="openInfoDrawer(true)"> 詳細資訊 </a-button>
    <a-button color="success" class="my-4" @click="handleOpenWebTerminal"> 終端機 </a-button>
    <a-button color="error" class="my-4" @click="handleDeletePod" :loading="loading">
      刪除容器
    </a-button>
    <InfoDrawer :podName="podName" @register="registerInfo" />
    <WebTerminalDrawer :podName="podName" :opened="opened" />
    <IFrame :frameSrc="frameSrc" />
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent, ref } from 'vue';

  import IFrame from '/@/views/sys/iframe/index.vue';
  import { useDrawer } from '/@/components/Drawer';

  import { useUserStore } from '/@/store/modules/user';
  import { useResourceStore } from '/@/store/modules/resource';

  import { useRootSetting } from '/@/hooks/setting/useRootSetting';
  import { usePermission } from '/@/hooks/web/usePermission';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { useI18n } from '/@/hooks/web/useI18n';

  import InfoDrawer from './infoDrawer.vue';
  import WebTerminalDrawer from './webTerminal.vue';
  import { deletePodAPI } from '/@/api/pod';

  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'PerContainers',
    components: {
      IFrame,
      InfoDrawer,
      WebTerminalDrawer,
    },
    props: {
      podName: propTypes.string,
    },
    setup(props) {
      const { getUserInfo } = useUserStore();
      const { getPodListFromAPI } = useResourceStore();
      const { getDarkMode } = useRootSetting();
      const { createConfirm } = useMessage();
      const { changeMenu } = usePermission();
      const { t } = useI18n();

      const loading = ref(false);

      const frameSrc = computed(() => {
        return `https://grafana.zephyr-kubernetes.tech/d/GlXkUBGiz/kubernetes-pod-overview?orgId=1&refresh=10s&from=now-24h&to=now&var-namespace=${getUserInfo.userId}&var-pod=${props.podName}&var-container=All&kiosk&theme=${getDarkMode.value}`;
      });

      const [registerInfo, { openDrawer: openInfoDrawer }] = useDrawer();

      const opened = ref(false);

      function handleOpenWebTerminal() {
        opened.value = !opened.value;
      }

      async function handleDeletePod() {
        createConfirm({
          iconType: 'warning',
          title: t('routes.containers.confirmTitle'),
          content: t('routes.containers.confirmContent'),
          onOk: async () => {
            loading.value = true;
            await deletePodAPI(props.podName);
            setTimeout(() => {
              loading.value = false;
              getPodListFromAPI({});
              changeMenu();
            }, 5000);
          },
        });
      }

      return {
        frameSrc,
        registerInfo,
        openInfoDrawer,
        handleOpenWebTerminal,
        handleDeletePod,
        loading,
        opened,
      };
    },
  });
</script>
