<template>
  <Result status="success" :title="t('container.bindDomain.bindedTitle')" :sub-title="url">
    <template #extra>
      <a-button type="primary" @click="openUrl">{{
        t('container.bindDomain.successBtn')
      }}</a-button>
      <a-button type="danger" @click="unbind" :loading="isUnbinding">
        {{ t('container.bindDomain.unbindBtn') }}
      </a-button>
    </template>
  </Result>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { Result } from 'ant-design-vue';

  import { propTypes } from '/@/utils/propTypes';
  import { openWindow } from '/@/utils';

  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    components: {
      Result,
    },
    props: {
      url: propTypes.string,
    },
    emits: ['unbind'],
    setup(props, { emit }) {
      const { t } = useI18n();

      const isUnbinding = ref(false);

      function openUrl() {
        openWindow(props.url);
      }

      function unbind() {
        isUnbinding.value = true;
        emit('unbind');
        setTimeout(() => (isUnbinding.value = false), 1500);
      }

      return {
        t,
        openUrl,
        unbind,
        isUnbinding,
      };
    },
  });
</script>
