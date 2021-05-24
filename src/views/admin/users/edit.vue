<template>
  <BasicModal v-bind="$attrs" @register="register" title="Modal Title" @ok="submitFunc">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';

  import { updateResourceQuotaAPI } from '/@/api/admin';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useMessage } from '/@/hooks/web/useMessage';

  import { editSchemas } from './data';

  export default defineComponent({
    name: 'EditModal',
    components: { BasicModal, BasicForm },
    setup(_, { emit }) {
      const { t } = useI18n();
      const { notification } = useMessage();

      const [registerForm, { setFieldsValue, validate }] = useForm({
        labelWidth: 120,
        schemas: editSchemas,
        showActionButtonGroup: false,
      });

      const [register, { changeOkLoading, closeModal, setModalProps }] = useModalInner((data) => {
        setFieldsValue({
          id: data.id,
          limit_cpu: parseFloat(data.limit_cpu),
          limit_memory: parseInt(data.limit_memory.substr(0, data.limit_memory.length - 2), 10),
          memorySI: data.limit_memory.substr(data.limit_memory.length - 2),

          request_storage: parseFloat(
            data.request_storage.substr(0, data.request_storage.length - 2)
          ),
          storageSI: data.request_storage.substr(data.request_storage.length - 2),

          persistentvolumeclaims: data.persistentvolumeclaims,
          pods: data.pods,
        });
        setModalProps({
          canFullscreen: false,
          title: t('admin.users.manage.editText'),
          okText: t('admin.users.manage.updateBtn'),
        });
      });

      async function submitFunc() {
        try {
          const { id, ...resourceQuota } = await validate();
          changeOkLoading(true);

          updateResourceQuotaAPI(id, {
            limit_cpu: `${resourceQuota.limit_cpu}`,
            limit_memory: `${resourceQuota.limit_memory}${resourceQuota.memorySI}`,
            request_storage: `${resourceQuota.request_storage}${resourceQuota.storageSI}`,
            persistentvolumeclaims: resourceQuota.persistentvolumeclaims,
            pods: resourceQuota.pods,
          })
            .then((_response) => {
              notification.success({
                message: t('admin.users.manage.updateSuccessTitle'),
                duration: 5,
              });
            })
            .catch((_error) => {
              notification.error({
                message: t('admin.users.manage.updateFailTitle'),
                duration: 5,
              });
            });

          setTimeout(() => {
            changeOkLoading(false);
            closeModal();
            emit('ok');
          }, 1500);
        } catch (error) {}
      }

      return { register, editSchemas, registerForm, submitFunc };
    },
  });
</script>
