<template>
  <div class="step2">
    <a-alert :message="t('container.create.envAlertMessage')" show-icon />
    <a-divider />
    <BasicForm @register="registerEnv">
      <template #add="{ field }">
        <Button v-if="Number(field) === 0" @click="add">+</Button>
        <Button v-if="field > 0" @click="del(field)">-</Button>
      </template>
    </BasicForm>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, unref, toRaw } from 'vue';
  import { BasicForm, useForm } from '/@/components/Form';
  import { Button } from '/@/components/Button';
  import { step2EnvSchemas } from './data';
  import { Alert, Divider, Descriptions } from 'ant-design-vue';

  import { EnvVar } from '/@/api/model/resources/resourcesModel';

  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    components: {
      BasicForm,
      Button,
      [Alert.name]: Alert,
      [Divider.name]: Divider,
      [Descriptions.name]: Descriptions,
      [Descriptions.Item.name]: Descriptions.Item,
    },
    emits: ['next', 'prev'],
    setup(_, { emit }) {
      const { t } = useI18n();
      const [
        registerEnv,
        { appendSchemaByField, removeSchemaByFiled, validate: validateEnvForm, setProps },
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

      const n = ref(1);

      function add() {
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
        n.value++;
      }
      function del(field) {
        removeSchemaByFiled([`key${field}`, `value${field}`, `${field}`]);
        n.value--;
      }

      async function customResetFunc() {
        emit('prev');
      }

      async function customSubmitFunc() {
        try {
          const values = await validateEnvForm();

          const result: Array<EnvVar> | undefined = [];
          for (let index = 0; index < n.value; index++) {
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

      return { t, registerEnv, add, del };
    },
  });
</script>
<style lang="less" scoped>
  .step2 {
    width: 700px;
    margin: 0 auto;
  }
</style>
