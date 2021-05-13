<template>
  <div class="step1">
    <div class="step1-form">
      <BasicForm @register="register" />
    </div>

    <a-divider />

    <div>
      <h3> {{ t('volume.create.descTitle') }} </h3>
      <span style="white-space: pre-line">
        {{ t('volume.create.descMetaText') }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { Alert, Input } from 'ant-design-vue';

  import { BasicForm, useForm } from '/@/components/Form';
  import { step1Schemas } from './data';

  import { useI18n } from '/@/hooks/web/useI18n';

  export default defineComponent({
    components: {
      BasicForm,
      [Alert.name]: Alert,
      [Input.name]: Input,
    },
    emits: ['next'],
    setup(_, { emit }) {
      const { t } = useI18n();

      const [register, { validate, setProps }] = useForm({
        labelWidth: 150,
        schemas: step1Schemas,
        actionColOptions: {
          span: 13,
        },
        showResetButton: false,
        submitButtonOptions: {
          text: t('volume.create.createBtn'),
        },
        submitFunc: customSubmitFunc,
      });

      async function customSubmitFunc() {
        try {
          const values = await validate();

          setProps({
            submitButtonOptions: {
              loading: true,
            },
          });

          setTimeout(() => {
            emit('next', values);
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            });
          }, 1500);
        } catch (error) {}
      }

      return {
        t,
        register,
        customSubmitFunc,
      };
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
</style>
