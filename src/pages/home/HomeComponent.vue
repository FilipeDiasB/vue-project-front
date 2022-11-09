<template>
  <div>
    <DataTable :value="carros">
      <Column field="userId" header="User ID">
        <template #body="{data}">
          {{ data.userId }}
        </template>
      </Column>
      <Column field="id" header="ID">
        <template #body="{data}">
          {{ data.id }}
        </template>
      </Column>
      <Column field="title" header="Titulo">
        <template #body="{data}">
          {{ data.title }}
        </template>
      </Column>
      <Column field="body" header="Descrição">
        <template #body="{data}">
          {{ data.body }}
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';


function getPost () { fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())}
</script>

<style scoped>
</style>