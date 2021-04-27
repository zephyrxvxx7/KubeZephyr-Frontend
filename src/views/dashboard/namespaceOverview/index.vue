<template>
  <div>
    <IFrame :frameSrc="frameSrc" @keydown.esc.prevent.stop />
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import IFrame from '/@/views/sys/iframe/index.vue';
  import { useUserStore } from '/@/store/modules/user';
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';

  export default defineComponent({
    components: {
      IFrame,
    },
    setup() {
      const { getUserInfo } = useUserStore();
      const { getDarkMode } = useRootSetting();

      const frameSrc = computed(() => {
        return `https://grafana.zephyr-kubernetes.tech/d/P2SL71Nmk/kubernetes-namespace-resources?orgId=1&var-source=default&var-namespace=${getUserInfo.userId}&kiosk&theme=${getDarkMode.value}`;
      });

      return {
        frameSrc,
      };
    },
  });
</script>
