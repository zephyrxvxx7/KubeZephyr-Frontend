<template>
  <BasicTable @register="registerTable" @ok="handleReloadCurrent">
    <template #action="{ record }">
      <TableAction
        :actions="[
          {
            label: t('admin.users.manage.editText'),
            icon: 'ic:outline-edit',
            onClick: handleEdit.bind(null, record),
          },
          {
            label: t('admin.users.manage.deleteText'),
            icon: 'ic:outline-delete-outline',
            popConfirm: {
              title: t('admin.users.manage.confirmDeleteMessage'),
              confirm: handleDelete.bind(null, record),
            },
          },
        ]"
      />
      <EditModal @register="registerModal" />
    </template>
    <template #toolbar>
      <a-button type="primary" @click="handleReloadCurrent" :loading="loading">
        {{ t('admin.users.manage.reloadText') }}
      </a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, ref, toRaw } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { deleteUserAPI } from '/@/api/admin';
  import { useI18n } from '/@/hooks/web/useI18n';

  import EditModal from './edit.vue';
  import { userColumns, userListApi } from './data';

  export default defineComponent({
    components: {
      BasicTable,
      TableAction,
      EditModal,
    },
    setup() {
      const { t } = useI18n();
      const loading = ref(false);

      const [registerTable, { reload }] = useTable({
        title: 'Users',
        titleHelpMessage: '使用者管理',
        api: userListApi,
        columns: userColumns,
        striped: false,
        bordered: false,
        showIndexColumn: false,
        actionColumn: {
          width: 150,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      const [registerModal, { openModal }] = useModal();

      function handleEdit(record: Recordable) {
        openModal(true, {
          id: record.id,
          limit_cpu: record.cpuLimit,
          limit_memory: record.memoryLimit,
          request_storage: record.storageRequest,
          persistentvolumeclaims: record.pvcs,
          pods: record.pods,
        });
      }
      function handleDelete(record: Recordable) {
        deleteUserAPI(toRaw(record.id));
        setTimeout(() => {
          reload();
        }, 1500);
      }
      function handleReloadCurrent() {
        loading.value = true;
        reload().then(() => (loading.value = false));
      }

      return {
        t,
        loading,
        registerTable,
        registerModal,
        handleEdit,
        handleDelete,
        handleReloadCurrent,
      };
    },
  });
</script>
