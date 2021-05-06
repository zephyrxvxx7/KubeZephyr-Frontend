<template>
  <div>
    <IFrame :frameSrc="frameSrc" @keydown.esc.stop.prevent />
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import IFrame from '/@/views/sys/iframe/index.vue';
  import { useUserStore } from '/@/store/modules/user';

  import { useRootSetting } from '/@/hooks/setting/useRootSetting';

  export default defineComponent({
    name: 'VolumeOverview',
    components: {
      IFrame,
    },
    setup() {
      const { getUserInfo } = useUserStore();
      const { getDarkMode } = useRootSetting();

      const frameSrc = computed(() => {
        return `https://grafana.zephyr-kubernetes.tech/d/peR80gTGk/kubernetes-persistent-volumes?orgId=1&refresh=1m&var-datasource=Prometheus&var-k8s_namespace=${getUserInfo.userId}&var-warning_threshold=80&kiosk&theme=${getDarkMode.value}`;
      });

      return {
        frameSrc,
      };
    },
  });
</script>
