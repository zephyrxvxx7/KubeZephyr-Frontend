<template>
  <div>
    <IFrame :frameSrc="frameSrc" @keydown.esc.prevent.stop />
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import IFrame from '/@/views/sys/iframe/index.vue';
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';

  export default defineComponent({
    components: {
      IFrame,
    },
    setup() {
      const { getDarkMode } = useRootSetting();

      const frameSrc = computed(() => {
        return `https://grafana.zephyr-kubernetes.tech/d/r6lloPJmz/ceph-cluster?orgId=1&refresh=1m&kiosk&theme=${getDarkMode.value}`;
      });

      return {
        frameSrc,
      };
    },
  });
</script>
