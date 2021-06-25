<template>
  <PageWrapper
    v-if="isReady"
    :title="t('account.alertChannel.title')"
    :content="t('account.alertChannel.content')"
  >
    <div class="py-8 bg-white flex flex-col justify-center items-center">
      <BasicForm @register="registerForm">
        <template #add="{ field }">
          <a-button @click="del(Number(field))" shape="circle">
            <template #icon><MinusOutlined /></template>
          </a-button>
          <a-button v-if="Number(field) === n" @click="add" shape="circle">
            <template #icon><PlusOutlined /></template>
          </a-button>
        </template>
      </BasicForm>
      <div class="flex justify-center">
        <a-button class="!ml-4" type="primary" :loading="loading" @click="submitFunc">
          {{ t('common.okText') }}
        </a-button>
      </div>
    </div>
  </PageWrapper>
  <div v-else>
    <span> Loading... </span>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref, onMounted } from 'vue';
  import { PageWrapper } from '/@/components/Page';
  import { BasicForm, useForm } from '/@/components/Form';
  import { Button } from 'ant-design-vue';
  import { PlusOutlined, MinusOutlined } from '@ant-design/icons-vue';

  import { AlertChannelInUpdate } from '/@/api/model/alertChannelModel';
  import { getAlertChannelAPI, updateAlertChannelAPI } from '/@/api/alertChannel';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { editSchemas } from './data';

  export default defineComponent({
    components: {
      PageWrapper,
      BasicForm,
      PlusOutlined,
      MinusOutlined,
      [Button.name]: Button,
    },
    setup() {
      const { t } = useI18n();
      const { notification } = useMessage();
      const n = ref(-1);
      const isReady = ref(false);
      const loading = ref(false);

      const [
        registerForm,
        { appendSchemaByField, removeSchemaByFiled, setFieldsValue, getFieldsValue, validate },
      ] = useForm({
        size: 'large',
        labelWidth: 450,
        schemas: editSchemas,
        showActionButtonGroup: false,
      });

      onMounted(() => {
        getAlertChannelAPI()
          .then((data) => {
            const values = {
              name: data.name,
              isDefault: String(data.isDefault),
              sendReminder: String(data.sendReminder),
              disableResolveMessage: String(data.disableResolveMessage),
              uploadImage: String(data.uploadImage),
            };

            data.addresses.forEach((address: string) => {
              add();
              values[`address${n.value}`] = address;
            });

            setFieldsValue(values);
          })
          .catch((error) => {
            console.log(error);
          });

        isReady.value = true;
      });

      function add() {
        n.value++;

        appendSchemaByField(
          {
            field: `address${n.value}`,
            component: 'Input',
            label: `${t('admin.alertChannel.manage.addresses')} ${n.value}`,
            required: true,
            colProps: {
              span: 17,
            },
          },
          ''
        );
        appendSchemaByField(
          {
            field: `${n.value}`,
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

      async function del(field: number) {
        const values = getFieldsValue();
        for (let iter = field; iter < n.value; iter++) {
          values[`address${iter}`] = values[`address${iter + 1}`];
        }

        await removeSchemaByFiled([`address${n.value}`, `${n.value}`]);
        delete values[`address${n.value}`];
        await setFieldsValue(values);
        n.value--;
      }

      async function submitFunc() {
        loading.value = true;
        try {
          const { ...alertChannel } = await validate();

          const addresses: string[] = [];
          for (let index = 0; index <= n.value; index++) {
            if (alertChannel[`address${index}`]) {
              addresses.push(alertChannel[`address${index}`]);
            }
          }

          const params: AlertChannelInUpdate = {
            name: alertChannel.name,
            addresses: addresses,
            isDefault: alertChannel.isDefault === 'true',
            sendReminder: alertChannel.sendReminder === 'true',
            disableResolveMessage: alertChannel.disableResolveMessage === 'true',
            uploadImage: alertChannel.uploadImage === 'true',
          };

          updateAlertChannelAPI(params)
            .then((_response) => {
              notification.success({
                message: t('admin.alertChannel.manage.updateSuccessTitle'),
                duration: 5,
              });
            })
            .catch((_error) => {
              notification.error({
                message: t('admin.alertChannel.manage.updateFailTitle'),
                duration: 5,
              });
            });
        } catch (error) {}
        loading.value = false;
      }

      return {
        t,
        isReady,
        loading,

        editSchemas,
        registerForm,
        submitFunc,

        n,
        add,
        del,
      };
    },
  });
</script>
