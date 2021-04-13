<template>
  <template v-if="getShow">
    <LoginFormTitle class="enter-x" />
    <Form class="p-4 enter-x" :model="formData" :rules="getFormRules" ref="formRef">
      <FormItem name="account" class="enter-x">
        <Input size="large" v-model:value="formData.account" :placeholder="t('sys.login.email')" />
      </FormItem>
      <FormItem name="realName" class="enter-x">
        <Input
          size="large"
          v-model:value="formData.realName"
          :placeholder="t('sys.login.realName')"
        />
      </FormItem>
      <FormItem name="password" class="enter-x">
        <StrengthMeter
          size="large"
          v-model:value="formData.password"
          :placeholder="t('sys.login.password')"
        />
      </FormItem>
      <FormItem name="confirmPassword" class="enter-x">
        <InputPassword
          size="large"
          visibilityToggle
          v-model:value="formData.confirmPassword"
          :placeholder="t('sys.login.confirmPassword')"
        />
      </FormItem>

      <Button
        type="primary"
        class="enter-x"
        size="large"
        block
        @click="handleRegister"
        :loading="loading"
      >
        {{ t('sys.login.registerButton') }}
      </Button>
      <Button size="large" block class="enter-x mt-4" @click="handleBackLogin">
        {{ t('sys.login.backSignIn') }}
      </Button>
    </Form>
  </template>
</template>
<script lang="ts">
  import { defineComponent, reactive, ref, toRaw, unref, computed } from 'vue';

  import LoginFormTitle from './LoginFormTitle.vue';
  import { Form, Input, Button } from 'ant-design-vue';
  import { StrengthMeter } from '/@/components/StrengthMeter';

  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { useUserStore } from '/@/store/modules/user';

  import { useLoginState, useFormRules, useFormValid, LoginStateEnum } from './useLogin';

  export default defineComponent({
    name: 'RegisterPasswordForm',
    components: {
      Button,
      Form,
      FormItem: Form.Item,
      Input,
      InputPassword: Input.Password,
      StrengthMeter,
      LoginFormTitle,
    },
    setup() {
      const { t } = useI18n();
      const { notification } = useMessage();
      const { handleBackLogin, getLoginState } = useLoginState();
      const userStore = useUserStore();

      const formRef = ref();
      const loading = ref(false);

      const formData = reactive({
        account: '',
        password: '',
        confirmPassword: '',
        realName: '',
        policy: false,
      });

      const { getFormRules } = useFormRules(formData);
      const { validForm } = useFormValid(formRef);

      const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER);

      async function handleRegister() {
        const data = await validForm();
        if (!data) return;
        try {
          loading.value = true;
          const userInResponse = await userStore.register(
            toRaw({
              password: data.password,
              email: data.account,
              realName: data.realName,
            })
          );
          if (userInResponse) {
            notification.success({
              message: t('sys.login.loginSuccessTitle'),
              description: `${t('sys.login.loginSuccessDesc')}: ${
                userInResponse.user.realName ?? userInResponse.user.email
              }`,
              duration: 3,
            });
          } else {
            notification.error({
              message: t('sys.login.registerFailTitle'),
              description: t('sys.login.registerFailDesc'),
              duration: 3,
            });
          }
        } finally {
          loading.value = false;
        }
      }

      return {
        t,
        formRef,
        formData,
        getFormRules,
        handleRegister,
        loading,
        handleBackLogin,
        getShow,
      };
    },
  });
</script>
