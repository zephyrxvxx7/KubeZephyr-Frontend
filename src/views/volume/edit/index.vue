<template>
  <BasicTable @register="registerTable" @ok="handleReloadCurrent">
    <template #action="{ record }">
      <TableAction
        :actions="[
          {
            label: t('volume.edit.editText'),
            icon: 'ic:outline-edit',
            onClick: handleEdit.bind(null, record),
          },
          {
            label: t('volume.edit.deleteText'),
            icon: 'ic:outline-delete-outline',
            popConfirm: {
              title: t('volume.edit.confirmDeleteMessage'),
              confirm: handleDelete.bind(null, record),
            },
          },
        ]"
      />
      <EditModal @register="registerModal" />
    </template>
    <template #toolbar>
      <a-button type="primary" @click="handleReloadCurrent">
        {{ t('volume.edit.reloadText') }}
      </a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, toRaw } from 'vue';
  import { useModal } from '/@/components/Modal';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { deletePvcAPI } from '/@/api/pvc';
  import { useI18n } from '/@/hooks/web/useI18n';
  import { useResourceStore } from '/@/store/modules/resource';

  import EditModal from './edit.vue';
  import { volumeColumns, volumeListApi } from './data';

  export default defineComponent({
    components: {
      BasicTable,
      TableAction,
      EditModal,
    },
    setup() {
      const { t } = useI18n();
      const { getPvcListFromAPI } = useResourceStore();

      const [registerTable, { reload }] = useTable({
        title: 'Volumes',
        titleHelpMessage: '容器掛載的卷宗',
        api: volumeListApi,
        columns: volumeColumns,
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
          name: record.name,
          accessModes: record.accessMode,
          storage: record.storage,
        });
      }
      function handleDelete(record: Recordable) {
        deletePvcAPI(toRaw(record.name));
        setTimeout(() => {
          handleReloadCurrent();
        }, 3000);
      }
      function handleReloadCurrent() {
        getPvcListFromAPI({});
        reload();
      }

      return {
        t,
        registerTable,
        registerModal,
        handleEdit,
        handleDelete,
        handleReloadCurrent,
      };
    },
  });
</script>
