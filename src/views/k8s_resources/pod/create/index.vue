<template>
  <PageWrapper title="Create Pod">
    <CollapseContainer title="Pod">
      <BasicForm
        autoFocusFirstItem
        :labelWidth="100"
        :schemas="schemas"
        :actionColOptions="{ span: 24 }"
        @submit="handleSubmit"
      />
    </CollapseContainer>
  </PageWrapper>
</template>
<script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { BasicForm, FormSchema } from '/@/components/Form/index';
  import { CollapseContainer } from '/@/components/Container/index';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { PageWrapper } from '/@/components/Page';

  // import { optionsListApi } from '/@/api/demo/select';
  const schemas: FormSchema[] = [
    {
      field: 'name',
      component: 'Input',
      label: 'name',
      defaultValue: 'nginx',
      required: true,
      colProps: {
        span: 8,
      },
      // componentProps:{},
      // can func
      componentProps: ({ schema, formModel }) => {
        console.log('form:', schema);
        console.log('formModel:', formModel);
        return {
          placeholder: 'placeholder',
        };
      },
    },
    {
      field: 'kind',
      component: 'Input',
      label: 'kind',
      defaultValue: 'pod',
      required: true,
      colProps: {
        span: 8,
      },
      componentProps: {
        onChange: (e: any) => {
          console.log(e);
        },
      },
    },
    {
      field: 'date',
      component: 'DatePicker',
      label: 'Date',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'image',
      component: 'Select',
      label: 'image',
      required: true,
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: 'nginx:latest',
            value: '1',
            key: '1',
          },
          {
            label: 'ubuntu:latest',
            value: '2',
            key: '2',
          },
        ],
      },
    },

    {
      field: 'volume',
      component: 'Cascader',
      label: 'volume',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            value: 'MyVolume1',
            label: 'MyVolume1',
            children: [
              {
                value: '/home/user/locate',
                label: '/home/user/locate',
              },
            ],
          },
          {
            value: 'MyVolume2',
            label: 'MyVolume2',
            children: [
              {
                value: '/etc',
                label: '/etc',
              },
            ],
          },
        ],
      },
    },
    {
      field: 'Port',
      component: 'InputNumber',
      label: 'Port',
      defaultValue: 80,
      required: true,
      colProps: {
        span: 8,
      },
    },
  ];

  export default defineComponent({
    components: { BasicForm, CollapseContainer, PageWrapper },
    setup() {
      const check = ref(null);
      const { createMessage } = useMessage();
      return {
        schemas,
        handleSubmit: (values: any) => {
          createMessage.success('values:' + JSON.stringify(values));
        },
        check,
      };
    },
  });
</script>
