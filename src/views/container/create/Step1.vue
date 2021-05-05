<template>
  <div class="step1">
    <div class="step1-form">
      <BasicForm @register="register" />

      <div v-if="resourceStore.getPvcList.length > 0">
        <a-divider />
        <a-alert :message="t('container.create.volumeAlertMessage')" show-icon />

        <BasicForm @register="registerPvc">
          <template #add="{ field }">
            <a-button v-if="Number(field) === 0" @click="add">+</a-button>
            <a-button v-if="Number(field) > 0" @click="del(field)">-</a-button>
          </template>
        </BasicForm>
      </div>

      <div align="center">
        <a-button type="primary" @click="customSubmitFunc"> {{ t('common.nextText') }} </a-button>
      </div>
    </div>

    <a-divider />

    <div>
      <h3>說明</h3>
      <h4>新增一個容器</h4>
      <p
        >需要指定使用者底下尚未有重複的名稱，要使用哪個映像檔（需要公開在docker
        hub），以及指定要開啟哪個通訊埠供服務使用。</p
      >
      <p>（可選的）可以指定是否要限制此容器的使用資源上限，如不指定則將與其他容器共享資源配額。</p>
      <p v-if="resourceStore.getPvcList.length > 0"
        >（可選的）使用Volume掛載指定的Volume目錄到容器的指定目錄。</p
      >
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, toRaw } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { step1Schemas, step1PvcSchemas } from './data';
  import { Alert, Input, Divider } from 'ant-design-vue';

  import { useResourceStore } from '/@/store/modules/resource';

  import { useI18n } from '/@/hooks/web/useI18n';

  const resourceStore = useResourceStore();

  export default defineComponent({
    components: {
      BasicForm,
      [Alert.name]: Alert,
      [Input.name]: Input,
      [Divider.name]: Divider,
    },
    emits: ['next'],
    setup(_, { emit }) {
      const { t } = useI18n();

      const [register, { validate }] = useForm({
        labelWidth: 120,
        schemas: step1Schemas,
        showActionButtonGroup: false,
      });

      const [
        registerPvc,
        { appendSchemaByField, removeSchemaByFiled, validate: validatePvcForm },
      ] = useForm({
        labelWidth: 100,
        schemas: step1PvcSchemas,
        showActionButtonGroup: false,
      });

      const n = ref(1);

      function add() {
        const native_n = toRaw(unref(n));

        if (native_n < resourceStore.getPvcList.length) {
          appendSchemaByField(
            {
              field: `pvc${native_n}`,
              component: 'ApiSelect',
              label: 'Volume',
              colProps: {
                span: 8,
              },
              componentProps: {
                api: useResourceStore().getPvcOptionsFromAPI,
              },
            },
            ''
          );
          appendSchemaByField(
            {
              field: `mount${native_n}`,
              component: 'Input',
              label: 'Mount Path',
              colProps: {
                span: 12,
              },
              dynamicRules: ({ values }) => {
                return values[`pvc${native_n}`]
                  ? [{ required: true, message: t('common.requiredText') }]
                  : [];
              },
              dynamicDisabled: ({ values }) => {
                return !values[`pvc${native_n}`];
              },
            },
            ''
          );
          appendSchemaByField(
            {
              field: `${native_n}`,
              component: 'Input',
              label: ' ',
              colProps: {
                span: 1,
              },
              slot: 'add',
            },
            ''
          );
          n.value++;
        }
      }
      function del(field) {
        removeSchemaByFiled([`pvc${field}`, `mount${field}`, `${field}`]);
        n.value--;
      }

      async function customSubmitFunc() {
        try {
          const values = await validate();

          if (values['limit_cpu']) values.limit_cpu = `${values.limit_cpu}`;

          if (values['limit_memory']) values.limit_memory = `${values.limit_memory}Mi`;

          let pvcResult: Array<{ pvc: string; mountPath: string }> | undefined = undefined;
          if (resourceStore.getPvcList.length > 0) {
            const pvcValues = await validatePvcForm();

            pvcResult = [];
            for (let index = 0; index < n.value; index++) {
              if (pvcValues[`pvc${index}`]) {
                pvcResult.push({
                  pvc: pvcValues[`pvc${index}`],
                  mountPath: pvcValues[`mount${index}`],
                });
              }
            }
            pvcResult = pvcResult.length > 0 ? pvcResult : undefined;
          }

          emit('next', values, pvcResult);
        } catch (error) {}
      }

      return { t, registerPvc, register, customSubmitFunc, add, del, resourceStore, n };
    },
  });
</script>
<style lang="less" scoped>
  .step1 {
    &-form {
      width: 700px;
      margin: 0 auto;
    }

    .h3 {
      margin: 0 0 12px;
      font-size: 18px;
      line-height: 32px;
      color: @text-color;
    }

    .h4 {
      margin: 0 0 4px;
      font-size: 14px;
      line-height: 22px;
      color: @text-color;
    }

    .p {
      color: @text-color;
    }
  }

  .pay-select {
    width: 20%;
  }

  .pay-input {
    width: 70%;
  }
</style>
