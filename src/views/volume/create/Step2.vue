<template>
  <div class="step3">
    <div v-if="createSuccess">
      <a-result
        status="success"
        :title="t('common.successText')"
        :sub-title="t('volume.create.successSubTitle')"
      >
        <template #extra>
          <a-button type="primary" @click="redo">
            {{ t('volume.create.successRedoBtn') }}
          </a-button>
        </template>
      </a-result>
    </div>
    <div v-else>
      <a-result
        status="error"
        :title="t('common.failText')"
        :sub-title="t('volume.create.failSubTitle')"
      >
        <template #extra>
          <a-button key="console" type="primary" @click="redo">
            {{ t('volume.create.failRedoBtn') }}
          </a-button>
        </template>
      </a-result>
      <div class="desc-wrap">
        <a-descriptions :column="1" class="mt-5">
          <a-descriptions-item :label="t('volume.create.failMessageText')">
            {{ errorMsg }}
          </a-descriptions-item>
        </a-descriptions>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Result, Descriptions } from 'ant-design-vue';

  import { propTypes } from '/@/utils/propTypes';
  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    components: {
      [Result.name]: Result,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
    },
    props: {
      createSuccess: propTypes.bool,
      errorMsg: propTypes.string,
    },
    emits: ['redo'],
    setup(_, { emit }) {
      const { t } = useI18n();

      return {
        t,
        redo: () => {
          emit('redo');
        },
      };
    },
  });
</script>
<style lang="less" scoped>
  .step3 {
    width: 700px;
    margin: 0 auto;
  }

  .desc-wrap {
    padding: 24px 40px;
    margin-top: 24px;
    background-color: @background-color-light;
  }
</style>
