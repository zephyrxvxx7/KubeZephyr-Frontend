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
  import { defineComponent, onMounted } from 'vue';
  import { Alert, Divider, Input } from 'ant-design-vue';
  import { BasicForm, useForm } from '/@/components/Form';

  import { useGlobSetting } from '/@/hooks/setting';
  import { useUserStore } from '/@/store/modules/user';
  import { useI18n } from '/@/hooks/web/useI18n';

  import { step1Schemas } from './data';

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

      const [register, { validate, setProps, setFieldsValue }] = useForm({
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

      onMounted(() => {
        const { getUserInfo } = useUserStore();
        const { domain } = useGlobSetting();

        step1Schemas.find((schema) => schema.field === 'subDomain')!.renderComponentContent =
          () => {
            return {
              suffix: () => `.${getUserInfo.realName.toLowerCase()}.${domain}`,
            };
          };
        setFieldsValue({
          podName: props.podName,
        });
        setProps({
          schemas: step1Schemas,
        });
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
