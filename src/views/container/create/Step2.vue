<template>
  <div class="step2">
    <a-alert :message="t('container.create.envAlertMessage')" show-icon />
    <a-divider />
    <BasicForm @register="registerEnv">
      <template #add="{ field }">
        <a-button @click="del(Number(field))" shape="circle">
          <template #icon><MinusOutlined /></template>
        </a-button>
        <a-button v-if="Number(field) === n" @click="add" shape="circle">
          <template #icon><PlusOutlined /></template>
        </a-button>
      </template>
    </BasicForm>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, toRaw } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { step2EnvSchemas } from './data';
  import { Alert, Button, Divider, Descriptions } from 'ant-design-vue';
  import { PlusOutlined, MinusOutlined } from '@ant-design/icons-vue';

  import { EnvVar } from '/@/api/model/resources/resourcesModel';

  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    components: {
      BasicForm,
      PlusOutlined,
      MinusOutlined,
      [Alert.name]: Alert,
      [Button.name]: Button,
      [Divider.name]: Divider,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
    },
    emits: ['next', 'prev'],
    setup(_, { emit }) {
      const { t } = useI18n();
      const [
        registerEnv,
        {
          appendSchemaByField,
          removeSchemaByFiled,
          setFieldsValue,
          getFieldsValue,
          validate: validateEnvForm,
          setProps,
        },
      ] = useForm({
        labelWidth: 80,
        schemas: step2EnvSchemas,
        actionColOptions: {
          span: 14,
        },
        resetButtonOptions: {
          text: t('common.prevText'),
        },
        submitButtonOptions: {
          text: t('container.create.deployBtn'),
        },
        resetFunc: customResetFunc,
        submitFunc: customSubmitFunc,
      });

      const n = ref(0);

      function add() {
        n.value++;
        const native_n = toRaw(unref(n));

        appendSchemaByField(
          {
            field: `key${native_n}`,
            component: 'Input',
            label: 'Key',
            colProps: {
              span: 10,
            },
          },
          ''
        );
        appendSchemaByField(
          {
            field: `value${native_n}`,
            component: 'Input',
            label: 'Value',
            colProps: {
              span: 10,
            },
            dynamicRules: ({ values }) => {
              return values[`key${native_n}`]
                ? [{ required: true, message: t('common.requiredText') }]
                : [];
            },
            dynamicDisabled: ({ values }) => {
              return !values[`key${native_n}`];
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
      }
      async function del(field: number) {
        const values = getFieldsValue();
        for (let iter = field; iter < n.value; iter++) {
          values[`key${iter}`] = values[`key${iter + 1}`];
          values[`value${iter}`] = values[`value${iter + 1}`];
        }

        await removeSchemaByFiled([`key${n.value}`, `value${n.value}`, `${n.value}`]);
        delete values[`key${n.value}`];
        delete values[`value${n.value}`];
        await setFieldsValue(values);
        n.value--;
      }

      async function customResetFunc() {
        emit('prev');
      }

      async function customSubmitFunc() {
        try {
          const values = await validateEnvForm();

          const result: Array<EnvVar> | undefined = [];
          for (let index = 0; index <= n.value; index++) {
            if (values[`key${index}`]) {
              result.push({
                name: values[`key${index}`],
                value: values[`value${index}`],
              });
            }
          }

          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });
          setTimeout(() => {
            emit('next', result.length > 0 ? result : undefined);
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });
          }, 1500);
        } catch (error) {}
      }

      return { t, registerEnv, n, add, del };
    },
  });
</script>
<style lang="less" scoped>
  .step2 {
    width: 700px;
    margin: 0 auto;
  }
</style>
