<template>
  <div class="step3">
    <div v-if="createSuccess">
      <a-result status="success" title="操作成功" sub-title="容器部署中...">
        <template #extra>
          <a-button type="primary" @click="redo"> 再部署一個容器 </a-button>
          <!-- <a-button type="primary" @click="openInfoDrawer(true)"> 查看詳情 </a-button>
          <InfoDrawer :podName="name" @register="registerInfo" /> -->
        </template>
      </a-result>
      <div class="desc-wrap">
        <a-descriptions :column="1" class="mt-5">
          <a-descriptions-item label="名稱"> {{ name }} </a-descriptions-item>
          <a-descriptions-item label="映像檔"> {{ image }} </a-descriptions-item>
          <a-descriptions-item label="通訊埠"> {{ port }} </a-descriptions-item>
        </a-descriptions>
      </div>
    </div>
    <div v-else>
      <a-result status="error" title="部署失敗" sub-title="請確認以下訊息後，再重新部署。">
        <template #extra>
          <a-button key="console" type="primary" @click="redo"> 返回修改 </a-button>
        </template>
      </a-result>
      <div class="desc-wrap">
        <a-descriptions :column="1" class="mt-5">
          <a-descriptions-item label="錯誤訊息"> {{ errorMsg }} </a-descriptions-item>
        </a-descriptions>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Result, Descriptions } from 'ant-design-vue';

  import { useDrawer } from '/@/components/Drawer';

  import { propTypes } from '/@/utils/propTypes';
  export default defineComponent({
    components: {
      [Result.name]: Result,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
    },
    props: {
      name: propTypes.string,
      image: propTypes.string,
      port: propTypes.string,
      createSuccess: propTypes.bool,
      errorMsg: propTypes.string,
    },
    emits: ['redo'],
    setup(_, { emit }) {
      const [registerInfo, { openDrawer: openInfoDrawer }] = useDrawer();

      return {
        registerInfo,
        openInfoDrawer,
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
