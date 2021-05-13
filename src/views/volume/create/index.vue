<template>
  <PageWrapper :title="t('volume.create.title')" contentBackground content="" contentClass="p-4">
    <div class="step-form-form">
      <a-steps :current="current" type="navigation">
        <a-step :title="t('volume.create.step1')" />
        <a-step :title="t('volume.create.step2')" />
      </a-steps>
    </div>
    <div class="mt-5">
      <Step1 @next="handleStep1Next" v-show="current === 0" />
      <Step2
        v-show="current === 1"
        @redo="handleRedo"
        v-if="initSetp2"
        :createSuccess="createSuccess"
        :errorMsg="errorMsg"
      />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, toRaw } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Steps } from 'ant-design-vue';

  import { PvcInCreate } from '/@/api/model/resources/pvcModel';
  import { createPvcApi } from '/@/api/pvc';

  import { useResourceStore } from '/@/store/modules/resource';
  import { useUserStore } from '/@/store/modules/user';
  import { useI18n } from '/@/hooks/web/useI18n';

  import Step1 from './Step1.vue';
  import Step2 from './Step2.vue';

  export default defineComponent({
    name: 'ContainerCreate',
    components: {
      Step1,
      Step2,
      PageWrapper,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
    },
    setup() {
      const { t } = useI18n();
      const { getUserInfo } = useUserStore();

      const current = ref(0);
      const initSetp2 = ref(false);

      const createSuccess = ref(true);
      const errorMsg = ref('');

      function handleStep1Next(...step1Values: any) {
        const [pvc] = toRaw(step1Values);

        const pvcParms: PvcInCreate = {
          metadata: {
            name: pvc.name,
          },
          spec: {
            accessModes: [pvc.accessModes],
            resources: {
              requests: {
                storage: `${pvc.storage}${pvc.si}`,
              },
            },
            storageClassName: String(getUserInfo.userId),
          },
        };

        createPvcApi(pvcParms, 'message')
          .then((result) => {
            const { getPvcListFromAPI, setIsAddedNewResource } = useResourceStore();
            console.log(result);
            getPvcListFromAPI({});
            setIsAddedNewResource(true);
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
        current,
        handleStep1Next,
        handleRedo,
        handleStepPrev,
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
