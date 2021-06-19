<template>
  <PageWrapper :title="t('sys.changePassword.title')" :content="t('sys.changePassword.content')">
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="register" />
      <div class="flex justify-center">
        <a-button @click="resetFields"> {{ t('common.resetText') }} </a-button>
        <a-button class="!ml-4" type="primary" :loading="loading" @click="handleSubmit">
          {{ t('common.okText') }}
        </a-button>
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';

  import { updateCurrentUserAPI } from '/@/api/sys/user';

  import { useUserStore } from '/@/store/modules/user';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { formSchema } from './data';
  export default defineComponent({
    name: 'ChangePassword',
    components: { BasicForm, PageWrapper },
    setup() {
      const { t } = useI18n();
      const { notification } = useMessage();
      const [register, { validate, resetFields }] = useForm({
        size: 'large',
        labelWidth: 150,
        showActionButtonGroup: false,
        schemas: formSchema,
      });

      const loading = ref(false);

      async function handleSubmit() {
        loading.value = true;

        const userStore = useUserStore();
        const values = await validate();
        const { passwordNew } = values;

        const userInResponse = await updateCurrentUserAPI({ password: passwordNew });
        if (userInResponse) {
          notification.success({
            message: t('sys.changePassword.successTitle'),
            description: t('sys.changePassword.successDesc'),
            duration: 3,
          });

          setTimeout(() => {
            loading.value = false;
            userStore.logout(true);
          }, 3000);
        } else {
          notification.error({
            message: t('sys.changePassword.failTitle'),
            description: t('sys.changePassword.failDesc'),
            duration: 3,
          });
        }
      }

      return { t, register, resetFields, handleSubmit, loading };
    },
  });
</script>
