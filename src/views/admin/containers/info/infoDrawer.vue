<template>
  <BasicDrawer v-bind="$attrs" @register="register" :isDetail="true" title="詳細資訊">
    <InfoDesc v-if="id.length > 0 && podName.length > 0" :id="id" :podName="podName" />
  </BasicDrawer>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicDrawer, useDrawerInner } from '/@/components/Drawer';

  import InfoDesc from './infoDesc.vue';

  export default defineComponent({
    components: { InfoDesc, BasicDrawer },
    setup() {
      const id = ref('');
      const podName = ref('');

      const [register] = useDrawerInner((data) => {
        id.value = data.id;
        podName.value = data.podName;
      });

      return {
        register,
        id,
        podName,
      };
    },
  });
</script>
