<template>
  <PageWrapper
    :title="t('container.bindDomain.title')"
    contentBackground
    content=""
    contentClass="p-4"
  >
    <div v-if="isCreated">
      <Binded :url="url" @unbind="handleUnbind" />
    </div>
    <div v-else>
      <div class="step-form-form">
        <a-steps :current="current" type="navigation">
          <a-step :title="t('container.bindDomain.step1')" />
          <a-step :title="t('container.bindDomain.step2')" />
        </a-steps>
      </div>
      <div class="mt-5">
        <Step1 @next="handleStep1Next" v-show="current === 0" :podName="podName" />
        <Step2
          v-show="current === 1"
          @redo="handleRedo"
          v-if="initSetp2"
          :url="url"
          :createSuccess="createSuccess"
          :errorMsg="errorMsg"
        />
      </div>
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, toRaw } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Steps } from 'ant-design-vue';

  import { IngressInCreate } from '/@/api/model/resources/ingressModel';
  import { createIngressApi, getIngressByNameAPI, deleteIngressAPI } from '/@/api/ingress';

  import { useUserStore } from '/@/store/modules/user';
  import { useResourceStore } from '/@/store/modules/resource';
  import { useGlobSetting } from '/@/hooks/setting';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { propTypes } from '/@/utils/propTypes';

  import Binded from './binded.vue';
  import Step1 from './Step1.vue';
  import Step2 from './Step2.vue';

  export default defineComponent({
    name: 'ContainerCreate',
    components: {
      Binded,
      Step1,
      Step2,
      PageWrapper,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
    },
    props: {
      podName: propTypes.string,
    },
    setup(props) {
      const { t } = useI18n();
      const { notification } = useMessage();
      const { getIngressFromAPI, getIngressList } = useResourceStore();

      const isCreated = ref(false);

      const current = ref(0);
      const initSetp2 = ref(false);
      const url = ref('');
      const createSuccess = ref(true);
      const errorMsg = ref('');

      getIngressList.some((ingress) => {
        if (ingress.name === props.podName) {
          getIngressByNameAPI(props.podName).then((result) => {
            url.value = `https://${result.ingress.spec!.tls![0].hosts![0]}`;
          });
          isCreated.value = true;
          return true;
        }
      });

      function handleUnbind() {
        deleteIngressAPI(props.podName).then(() => {
          setTimeout(() => {
            notification.success({
              message: t('container.bindDomain.unbindSuccessTitle'),
              duration: 3,
            });
            getIngressFromAPI({});
            isCreated.value = false;
          }, 1500);
        });
      }

      function handleStep1Next(...step1Values: any) {
        const [ingress] = toRaw(step1Values);

        const ingressParms: IngressInCreate = {
          bound_pod_name: ingress.podName,
          sub_domain: ingress.subDomain,
          allow_cors: ingress.allowCors === 'true',
        };

        createIngressApi(ingressParms, 'message')
          .then((_result) => {
            getIngressFromAPI({});
            url.value = `https://${
              ingressParms.sub_domain
            }.${useUserStore().getUserInfo.realName.toLowerCase()}.${useGlobSetting().domain}/`;
            createSuccess.value = true;
          })
          .catch((error) => {
            errorMsg.value = error?.response?.data?.errors[0];
            createSuccess.value = false;
          });

        current.value++;
        initSetp2.value = true;
      }

      function handleStepPrev() {
        current.value--;
      }

      function handleRedo() {
        current.value = 0;
        initSetp2.value = false;
      }

      return {
        t,
        isCreated,
        current,
        handleUnbind,
        handleStep1Next,
        handleRedo,
        handleStepPrev,
        url,
        createSuccess,
        errorMsg,
        initSetp2,
      };
    },
  });
</script>
<style lang="less" scoped>
  .step-form-content {
    padding: 24px;
    background-color: @component-background;
  }

  .step-form-form {
    width: 750px;
    margin: 0 auto;
  }
</style>
