<template>
  <div>
    <a-button color="success" class="mr-2" @click="openInfoDrawer(true)">
      {{ t('container.containers.descBtn') }}
    </a-button>
    <a-button color="error" class="mr-2" @click="handleDeletePod" :loading="loading">
      {{ t('container.containers.deleteBtn') }}
    </a-button>
    <InfoDrawer :podName="podName" @register="registerInfo" />
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

  import InfoDrawer from './info/infoDrawer.vue';
  import { deletePodAPI } from '/@/api/pod';

  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'PerContainers',
    components: {
      IFrame,
      InfoDrawer,
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
        return `https://grafana.zephyr-kubernetes.tech/d/${getUserInfo.userId}-${props.podName}/pod-overview-with-alerts?orgId=1&refresh=10s&from=now-24h&to=now&kiosk&theme=${getDarkMode.value}`;
      });

      const [registerInfo, { openDrawer: openInfoDrawer }] = useDrawer();

      async function handleDeletePod() {
        createConfirm({
          iconType: 'warning',
          title: t('container.containers.confirmTitle'),
          content: t('container.containers.confirmContent'),
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
        t,
        frameSrc,
        registerInfo,
        openInfoDrawer,
        handleDeletePod,
        loading,
      };
    },
  });
</script>
