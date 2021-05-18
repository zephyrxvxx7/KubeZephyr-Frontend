<template>
  <BasicModal v-bind="$attrs" @register="register" title="Modal Title" @ok="submitFunc">
    <BasicForm @register="registerForm" />
  </BasicModal>
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicModal, useModalInner } from '/@/components/Modal';
  import { BasicForm, useForm } from '/@/components/Form/index';

  import { updatePvcAPI } from '/@/api/pvc';
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
          name: data.name,
          accessModes: data.accessModes,
          storage: parseInt(data.storage.substr(0, data.storage.length - 2), 10),
          si: data.storage.substr(data.storage.length - 2),
        });
        setModalProps({
          okText: t('volume.edit.updateBtn'),
        });
      });

      async function submitFunc() {
        try {
          const pvc = await validate();
          changeOkLoading(true);

          updatePvcAPI(pvc.name, {
            spec: {
              accessModes: [pvc.accessModes],
              resources: {
                requests: {
                  storage: `${pvc.storage}${pvc.si}`,
                },
              },
            },
          })
            .then((pvc) => {
              notification.success({
                message: t('volume.edit.updateSuccessTitle'),
                description: `${pvc}`,
                duration: 5,
              });
            })
            .catch((error) => {
              notification.error({
                message: t('volume.edit.updateFailTitle'),
                description: `${
                  error?.response?.data?.errors?.body[0] ?? error?.response?.data?.errors[0]
                }`,
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
