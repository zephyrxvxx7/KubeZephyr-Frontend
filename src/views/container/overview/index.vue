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
    name: 'ContainerOverview',
    components: {
      IFrame,
    },
    setup() {
      const { getUserInfo } = useUserStore();
      const { getDarkMode } = useRootSetting();

      const frameSrc = computed(() => {
        return `https://grafana.zephyr-kubernetes.tech/d/resource_pods/compute-resources-namespace-pods?orgId=1&refresh=10s&var-datasource=Prometheus&var-cluster=&var-namespace=${getUserInfo.userId}&kiosk&theme=${getDarkMode.value}`;
      });

      return {
        frameSrc,
      };
    },
  });
</script>
