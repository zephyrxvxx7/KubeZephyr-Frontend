<template>
  <BasicDrawer v-bind="$attrs" :isDetail="true" title="詳細資訊">
    <InfoDesc :podName="podName" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicDrawer } from '/@/components/Drawer';

  import InfoDesc from './infoDesc.vue';

  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    components: { InfoDesc, BasicDrawer },
    props: {
      podName: propTypes.string,
    },
  });
</script>
