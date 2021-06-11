<template>
  <BasicTable @register="registerTable">
    <template #action="{ record }">
      <TableAction
        v-if="record.podName"
        :actions="[
          {
            label: t('admin.containers.manage.infoText'),
            icon: 'ic:outline-info',
            onClick: handleInfo.bind(null, record),
          },
          {
            label: t('admin.containers.manage.deleteText'),
            icon: 'ic:outline-delete-outline',
            popConfirm: {
              title: t('admin.containers.manage.confirmDeleteMessage'),
              confirm: handleDelete.bind(null, record),
            },
          },
        ]"
      />
      <InfoDrawer @register="registerInfo" />
    </template>
    <template #toolbar>
      <a-button type="primary" @click="handleReload" :loading="loading">
        {{ t('admin.containers.manage.reloadText') }}
      </a-button>
    </template>
  </BasicTable>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';

  import { useDrawer } from '/@/components/Drawer';
  import { BasicTable, useTable, TableAction } from '/@/components/Table';

  import { deletePodAPI } from '/@/api/admin';
  import { useI18n } from '/@/hooks/web/useI18n';

  import InfoDrawer from './info/infoDrawer.vue';
  import { containerColumns, containerListApi } from './data';

  export default defineComponent({
    components: {
      BasicTable,
      TableAction,
      InfoDrawer,
    },
    setup() {
      const { t } = useI18n();
      const loading = ref(false);

      const [registerTable, { reload }] = useTable({
        title: 'Containers',
        titleHelpMessage: '容器管理',
        api: containerListApi,
        columns: containerColumns,
        striped: false,
        bordered: false,
        showIndexColumn: false,
        actionColumn: {
          width: 200,
          title: 'Action',
          dataIndex: 'action',
          slots: { customRender: 'action' },
        },
      });
      const [registerInfo, { openDrawer: openInfoDrawer }] = useDrawer();

      function handleInfo(record: Recordable) {
        openInfoDrawer(true, record);
      }
      async function handleDelete(record: Recordable) {
        deletePodAPI(record.id, record.podName).then(async () => {
          await reload();
        });
      }
      function handleReload() {
        loading.value = true;
        reload().then(() => (loading.value = false));
      }

      return {
        t,
        loading,
        registerTable,
        registerInfo,
        handleInfo,
        handleDelete,
        handleReload,
      };
    },
  });
</script>
