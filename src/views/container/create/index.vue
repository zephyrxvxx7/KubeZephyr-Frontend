<template>
  <PageWrapper title="Create a container" contentBackground content="" contentClass="p-4">
    <div class="step-form-form">
      <a-steps :current="current">
        <a-step title="容器" />
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
      />
    </div>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive, toRefs, toRaw } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { Steps } from 'ant-design-vue';

  import { createPodApi } from '/@/api/pod';
  import { PodInCreate } from '/@/api/model/resources/podModel';
  import { EnvVar } from '/@/api/model/resources/resourcesModel';

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

      const createSuccess = ref(false);

      const pod = reactive({
        name: '',
        image: '',
        port: 0,
        limit_cpu: undefined as Number | undefined,
        limit_memory: undefined as Number | undefined,
        mount: undefined as Array<{ pvc: string; mountPath: string }> | undefined,
        env: undefined as Array<EnvVar> | undefined,
      });

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

        // TODO create pod api doesn't work
        const result = handleCreatePod();
        // console.log(result)

        createSuccess.value = !!result;

        current.value++;
        state.initSetp3 = true;
      }

      function handleRedo() {
        current.value = 0;
        state.initSetp2 = false;
        state.initSetp3 = false;
      }

      function handleCreatePod() {
        const rawPod = toRaw(pod);
        const podParms: PodInCreate = {
          metadata: {
            name: pod.name,
          },
          spec: {
            containers: [
              {
                name: rawPod.name,
                image: rawPod.image,
                ports: [{ containerPort: rawPod.port }],
                resources: {
                  limits: {
                    memory: `${rawPod.limit_memory}Mi`,
                    cpu: `${rawPod.limit_cpu}m`,
                  },
                },
                env: rawPod.env,
              },
            ],
          },
        };

        rawPod.mount?.forEach(function (mount, index) {
          podParms.spec.containers[0].volumeMounts?.push({
            name: `${index}`,
            mountPath: mount.mountPath,
          });
          podParms.spec.volumes?.push({
            name: `${index}`,
            persistentVolumeClaim: {
              claimName: mount.pvc,
            },
          });
        });

        return createPodApi(podParms);
      }

      return {
        pod,
        current,
        handleStep1Next,
        handleStep2Next,
        handleRedo,
        handleStepPrev,
        createSuccess,
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
