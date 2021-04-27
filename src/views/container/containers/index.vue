<template>
  <div>
    <IFrame :frameSrc="frameSrc" />
  </div>
</template>
<script lang="ts">
  import { computed, defineComponent } from 'vue';
  import IFrame from '/@/views/sys/iframe/index.vue';
  import { useUserStore } from '/@/store/modules/user';
  import { useRootSetting } from '/@/hooks/setting/useRootSetting';

  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    name: 'PerContainers',
    components: {
      IFrame,
    },
    props: {
      pod_name: propTypes.string,
    },
    setup(props) {
      const { getUserInfo } = useUserStore();
      const { getDarkMode } = useRootSetting();

      const frameSrc = computed(() => {
        return `https://grafana.zephyr-kubernetes.tech/d/GlXkUBGiz/kubernetes-pod-overview?orgId=1&refresh=10s&from=now-24h&to=now&var-namespace=${getUserInfo.userId}&var-pod=${props.pod_name}&var-container=All&kiosk&theme=${getDarkMode.value}`;
      });

      return {
        frameSrc,
      };
    },
  });
</script>
