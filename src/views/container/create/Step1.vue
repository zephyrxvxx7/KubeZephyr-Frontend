<template>
  <div class="step1">
    <div class="step1-form">
      <BasicForm @register="register">
        <template #image="{ model }">
          <a-select
            show-search
            v-model:value="model['image']"
            :placeholder="t('common.inputText')"
            :filter-option="false"
            :not-found-content="apiState.fetching ? undefined : null"
            @search="fetchDockerHub"
          >
            <template v-if="apiState.fetching" #notFoundContent>
              <a-spin size="small" />
            </template>
            <a-select-option v-for="d in apiState.data" :key="d.value">
              {{ d.text }}
            </a-select-option>
          </a-select>
        </template>
      </BasicForm>

      <div v-if="resourceStore.getPvcList.length > 0">
        <a-divider />
        <a-alert :message="t('container.create.volumeAlertMessage')" show-icon />

        <BasicForm @register="registerPvc">
          <template #add="{ field }">
            <a-button @click="del(Number(field))" shape="circle">
              <template #icon><MinusOutlined /></template>
            </a-button>
            <a-button v-if="Number(field) === n" @click="add" shape="circle">
              <template #icon><PlusOutlined /></template>
            </a-button>
          </template>
        </BasicForm>
      </div>

      <div align="center">
        <a-button type="primary" @click="customSubmitFunc"> {{ t('common.nextText') }} </a-button>
      </div>
    </div>

    <a-divider />

    <div>
      <h3> {{ t('container.create.descTitle') }} </h3>
      <span style="white-space: pre-line">
        {{ t('container.create.descMetaText') }}
      </span>
      <span v-if="resourceStore.getPvcList.length > 0">
        {{ t('container.create.descVolumeText') }}
      </span>
    </div>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, reactive, unref, toRaw, watch } from 'vue';
  import { Alert, Button, Input, Divider, Select, Spin } from 'ant-design-vue';
  import { PlusOutlined, MinusOutlined } from '@ant-design/icons-vue';
  import { debounce } from 'lodash-es';

  import { BasicForm, useForm } from '/@/components/Form';
  import { step1Schemas, step1PvcSchemas } from './data';

  import { useResourceStore } from '/@/store/modules/resource';
  import { useI18n } from '/@/hooks/web/useI18n';

  const resourceStore = useResourceStore();

  export default defineComponent({
    components: {
      BasicForm,
      PlusOutlined,
      MinusOutlined,
      [Alert.name]: Alert,
      [Button.name]: Button,
      [Input.name]: Input,
      [Divider.name]: Divider,
      [Select.name]: Select,
      ASelectOption: Select.Option,
      [Spin.name]: Spin,
    },
    emits: ['next'],
    setup(_, { emit }) {
      const { t } = useI18n();

      const [register, { validate }] = useForm({
        labelWidth: 120,
        schemas: step1Schemas,
        showActionButtonGroup: false,
      });

      const [
        registerPvc,
        {
          appendSchemaByField,
          removeSchemaByFiled,
          setFieldsValue,
          getFieldsValue,
          validate: validatePvcForm,
        },
      ] = useForm({
        labelWidth: 100,
        schemas: step1PvcSchemas,
        showActionButtonGroup: false,
      });

      // apiSearch
      interface apiState {
        data: Array<{ text: string; value: string }>;
        value: string;
        fetching: boolean;
      }

      let lastFetchId = 0;

      const apiState: apiState = reactive({
        data: [],
        value: '',
        fetching: false,
      });

      const fetchDockerHub = debounce((value) => {
        lastFetchId += 1;
        const fetchId = lastFetchId;
        apiState.data = [];
        apiState.fetching = true;
        fetch(
          `https://hub.docker.com/api/content/v1/products/search?page_size=10&page=1&q=${value}`
        )
          .then((response) => response.json())
          .then((body) => {
            if (fetchId !== lastFetchId) {
              // for fetch callback order
              return;
            }
            if (body.summaries) {
              const data = body.summaries.map((image) => ({
                text: image.name,
                value: image.name,
              }));
              apiState.data.push(...data);
            }
          });
        fetch(
          `https://hub.docker.com/api/content/v1/products/search?page=1&page_size=10&source=community&q=${value}`
        )
          .then((response) => response.json())
          .then((body) => {
            if (fetchId !== lastFetchId) {
              // for fetch callback order
              return;
            }
            if (body.summaries) {
              const data = body.summaries.map((image) => ({
                text: image.name,
                value: image.name,
              }));
              apiState.data.push(...data);
              apiState.fetching = false;
            }
          });
      }, 500);

      watch(
        () => apiState.value,
        () => {
          apiState.data = [];
          apiState.fetching = false;
        }
      );

      // DynamicVolume
      const n = ref(0);

      function add() {
        if (n.value < resourceStore.getPvcList.length - 1) {
          n.value++;

          const native_n = toRaw(unref(n));

          appendSchemaByField(
            {
              field: `pvc${native_n}`,
              component: 'ApiSelect',
              label: 'Volume',
              colProps: {
                span: 8,
              },
              componentProps: {
                api: useResourceStore().getPvcOptionsFromAPI,
              },
            },
            ''
          );
          appendSchemaByField(
            {
              field: `mount${native_n}`,
              component: 'Input',
              label: 'Mount Path',
              colProps: {
                span: 12,
              },
              dynamicRules: ({ values }) => {
                return values[`pvc${native_n}`]
                  ? [{ required: true, message: t('common.requiredText') }]
                  : [];
              },
              dynamicDisabled: ({ values }) => {
                return !values[`pvc${native_n}`];
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
        }
      }
      async function del(field: number) {
        const values = getFieldsValue();
        for (let iter = field; iter < n.value; iter++) {
          values[`pvc${iter}`] = values[`pvc${iter + 1}`];
          values[`mount${iter}`] = values[`mount${iter + 1}`];
        }

        await removeSchemaByFiled([`pvc${n.value}`, `mount${n.value}`, `${n.value}`]);
        delete values[`pvc${n.value}`];
        delete values[`mount${n.value}`];
        await setFieldsValue(values);
        n.value--;
      }

      async function customSubmitFunc() {
        try {
          const values = await validate();

          if (values['limit_cpu']) values.limit_cpu = `${values.limit_cpu}`;

          if (values['limit_memory']) values.limit_memory = `${values.limit_memory}${values.si}`;

          let pvcResult: Array<{ pvc: string; mountPath: string }> | undefined = undefined;
          if (resourceStore.getPvcList.length > 0) {
            const pvcValues = await validatePvcForm();

            pvcResult = [];
            for (let index = 0; index <= n.value; index++) {
              if (pvcValues[`pvc${index}`]) {
                pvcResult.push({
                  pvc: pvcValues[`pvc${index}`],
                  mountPath: pvcValues[`mount${index}`],
                });
              }
            }
            pvcResult = pvcResult.length > 0 ? pvcResult : undefined;
          }

          emit('next', values, pvcResult);
        } catch (error) {}
      }

      return {
        t,
        // apiSearch
        apiState,
        fetchDockerHub,

        registerPvc,
        register,
        customSubmitFunc,
        // DynamicVolume
        add,
        del,
        n,
        resourceStore,
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

  .pay-select {
    width: 20%;
  }

  .pay-input {
    width: 70%;
  }
</style>
