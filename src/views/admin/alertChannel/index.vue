<template>
  <BasicTable @register="registerTable" @ok="handleReload">
    <template #customIsDefault>
      <span>
        {{ t('admin.alertChannel.manage.isDefault') }}
        <BasicHelp class="ml-2" :text="t('admin.alertChannel.manage.isDefaultHelp')" />
      </span>
    </template>
    <template #customDisableResolveMessage>
      <span>
        {{ t('admin.alertChannel.manage.disableResolveMessage') }}
        <BasicHelp class="ml-2" :text="t('admin.alertChannel.manage.disableResolveMessageHelp')" />
      </span>
    </template>
    <template #expandedRowRender="{ record }">
      <span> Emails: </span>
      <Tag v-for="address in record.addresses" :key="address">
        {{ address }}
      </Tag>
    </template>
    <template #action="{ record }">
      <TableAction
        :actions="[
          {
            label: t('admin.alertChannel.manage.editText'),
            icon: 'ic:outline-edit',
            onClick: handleEdit.bind(null, record),
          },
          {
            label: t('admin.alertChannel.manage.deleteText'),
            icon: 'ic:outline-delete-outline',
            popConfirm: {
              title: t('admin.alertChannel.manage.confirmDeleteMessage'),
              confirm: handleDelete.bind(null, record),
            },
          },
        ]"
      />
      <EditModal @register="registerModal" />
    </template>
    <template #toolbar>
      <a-button type="primary" @click="handleReload" :loading="loading">
        {{ t('admin.alertChannel.manage.reloadText') }}
      </a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, ref, toRaw } from 'vue';
  import { Tag } from 'ant-design-vue';

  import { useModal } from '/@/components/Modal';
  import { BasicHelp } from '/@/components/Basic';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { deleteAlertChannelAPI } from '/@/api/admin';
  import { useI18n } from '/@/hooks/web/useI18n';

  import EditModal from './edit.vue';
  import { alertChannelColumns, alertChannelListApi } from './data';

  export default defineComponent({
    components: {
      Tag,
      BasicHelp,
      BasicTable,
      TableAction,
      EditModal,
    },
    setup() {
      const { t } = useI18n();
      const loading = ref(false);

      const [registerTable, { reload }] = useTable({
        title: 'Alert Channels',
        titleHelpMessage: '警示頻道管理',
        api: alertChannelListApi,
        columns: alertChannelColumns,
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
        openModal(true, record);
      }
      function handleDelete(record: Recordable) {
        deleteAlertChannelAPI(toRaw(record.uid));
        setTimeout(() => {
          reload();
        }, 1500);
      }
      function handleReload() {
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
        handleReload,
      };
    },
  });
</script>
