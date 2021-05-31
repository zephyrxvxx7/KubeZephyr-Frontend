<template>
  <BasicModal
    v-bind="$attrs"
    @register="register"
    title="Modal Title"
    @cancel="cancelFunc"
    @ok="submitFunc"
  >
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
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';
  import { Button } from 'ant-design-vue';
  import { PlusOutlined, MinusOutlined } from '@ant-design/icons-vue';

  import { AlertChannelInUpdate } from '/@/api/model/alertChannelModel';
  import { updateAlertChannelAPI } from '/@/api/admin';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { editSchemas } from './data';

  export default defineComponent({
    name: 'AlertChannelEditModal',
    components: {
      BasicModal,
      BasicForm,
      PlusOutlined,
      MinusOutlined,
      [Button.name]: Button,
    },
    setup(_, { emit }) {
      const { t } = useI18n();
      const { notification } = useMessage();
      const n = ref(-1);

      const [
        registerForm,
        {
          appendSchemaByField,
          removeSchemaByFiled,
          resetFields,
          setFieldsValue,
          getFieldsValue,
          validate,
        },
      ] = useForm({
        labelWidth: 170,
        schemas: editSchemas,
        showActionButtonGroup: false,
      });

      const [register, { changeOkLoading, closeModal, setModalProps }] = useModalInner((data) => {
        const values = {
          uid: data.uid,
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
        setModalProps({
          canFullscreen: false,
          title: t('admin.alertChannel.manage.editText'),
          okText: t('admin.alertChannel.manage.updateBtn'),
          width: 600,
        });
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
              span: 20,
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

      async function cancelFunc() {
        while (n.value >= 0) {
          await del(n.value).catch((_) => {});
        }
        await resetFields();
        closeModal();
      }

      async function submitFunc() {
        try {
          const { uid, ...alertChannel } = await validate();
          changeOkLoading(true);

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

          updateAlertChannelAPI(uid, params)
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

          changeOkLoading(false);
          await cancelFunc();
          emit('ok');
        } catch (error) {}
      }

      return {
        register,
        editSchemas,
        registerForm,
        cancelFunc,
        submitFunc,

        n,
        add,
        del,
      };
    },
  });
</script>
