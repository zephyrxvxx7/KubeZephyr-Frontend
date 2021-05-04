<template>
  <PageWrapper title="Create a container" contentBackground content="" contentClass="p-4">
    <div class="step-form-form">
      <a-steps :current="current">
        <a-step title="容器設定" />
        <a-step title="環境設定" />
        <a-step title="結果" />
      </a-steps>
    </div>
    <div class="mt-5">
      <Step1 @next="handleStep1Next" v-show="current === 0" />
      <Step2
        @prev="handleStepPrev"
        @next="handleStep2Next"
        v-show="current === 1"
        v-if="initSetp2"
      />
      <Step3
        v-show="current === 2"
        @redo="handleRedo"
        v-if="initSetp3"
        :name="pod.name"
        :image="pod.image"
        :port="String(pod.port)"
        :createSuccess="createSuccess"
        :errorMsg="errorMsg"
      />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive, toRefs, toRaw } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Steps } from 'ant-design-vue';

  import { useResourceStore } from '/@/store/modules/resource';

  import { EnvVar } from '/@/api/model/resources/resourcesModel';
  import { handleCreatePod, pod } from './createPod';
  import Step1 from './Step1.vue';
  import Step2 from './Step2.vue';
  import Step3 from './Step3.vue';

  export default defineComponent({
    name: 'ContainerCreate',
    components: {
      Step1,
      Step2,
      Step3,
      PageWrapper,
      [Steps.name]: Steps,
      [Steps.Step.name]: Steps.Step,
    },
    setup() {
      const current = ref(0);

      const state = reactive({
        initSetp2: false,
        initSetp3: false,
      });

      const createSuccess = ref(true);
      const errorMsg = ref('');

      const pod = reactive({
        name: '',
        image: '',
        port: 0,
        limit_cpu: undefined as string | undefined,
        limit_memory: undefined as string | undefined,
        mount: undefined as Array<{ pvc: string; mountPath: string }> | undefined,
        env: undefined as Array<EnvVar> | undefined,
      } as pod);

      function handleStep1Next(...step1Values: any) {
        const [meta, mount] = step1Values;
        current.value++;
        state.initSetp2 = true;

        pod.name = meta.name;
        pod.image = meta.image;
        pod.port = meta.port;
        pod.limit_cpu = meta.limit_cpu ?? undefined;
        pod.limit_memory = meta.limit_memory ?? undefined;
        pod.mount = mount ?? undefined;
      }

      function handleStepPrev() {
        current.value--;
      }

      function handleStep2Next(step2Values: any) {
        pod.env = step2Values ?? undefined;

        handleCreatePod(toRaw(pod))
          .then((result) => {
            const { getPodListFromAPI, setIsAddedNewResource } = useResourceStore();
            console.log(result);
            getPodListFromAPI({});
            setIsAddedNewResource(true);
            createSuccess.value = true;
          })
          .catch((error) => {
            errorMsg.value = error?.response?.data?.errors[0];
            createSuccess.value = false;
          });

        current.value++;
        state.initSetp3 = true;
      }

      function handleRedo() {
        current.value = 0;
        state.initSetp2 = false;
        state.initSetp3 = false;
      }

      return {
        pod,
        current,
        handleStep1Next,
        handleStep2Next,
        handleRedo,
        handleStepPrev,
        createSuccess,
        errorMsg,
        ...toRefs(state),
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
