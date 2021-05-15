<template>
  <div class="step1">
    <div class="step1-form">
      <BasicForm @register="register" />
    </div>

    <a-divider />

    <div>
      <h3> {{ t('container.bindDomain.descTitle') }} </h3>
      <span style="white-space: pre-line">
        {{ t('container.bindDomain.descMetaText') }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { Alert, Divider, Input } from 'ant-design-vue';

  import { BasicForm, useForm } from '/@/components/Form';
  import { step1Schemas } from './data';

  import { useI18n } from '/@/hooks/web/useI18n';

  import { propTypes } from '/@/utils/propTypes';

  export default defineComponent({
    components: {
      BasicForm,
      [Alert.name]: Alert,
      [Divider.name]: Divider,
      [Input.name]: Input,
    },
    props: {
      podName: propTypes.string,
    },
    emits: ['next'],
    setup(props, { emit }) {
      const { t } = useI18n();

      let { podName } = toRefs(props);
      step1Schemas[0].defaultValue = podName;

      const [register, { validate, setProps }] = useForm({
        labelWidth: 180,
        schemas: step1Schemas,
        actionColOptions: {
          span: 13,
        },
        showResetButton: false,
        submitButtonOptions: {
          text: t('container.bindDomain.bindBtn'),
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
