<template>
  <div>
    <Toast/>
    <DataTable
        class="p-datatable-sm"
        :value="users"
        :paginator="true"
        :rows="10"
        stripedRows
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        :rowsPerPageOptions="[10, 20, 50]"
        responsiveLayout="scroll"
        currentPageReportTemplate="Páginas {first} a {last} de {totalRecords}"
    >
      <Column field="id" header="ID"></Column>
      <Column field="name" header="Nome"></Column>
      <Column field="email" header="Email"></Column>
      <Column headerStyle="width:4rem">
        <template #body="user">
          <div class="flex">
          <div>
            <router-link :to="{ name: 'user.show', params: { id: user.data.id } }" class="p-button no-underline">
            <i class="pi pi-search"></i>
          </router-link>
          </div>
          <div class="ml-2">
            <Button @click="del(user.data.id)" icon="pi pi-times" class="p-button-danger" />
          </div>
          </div>
        </template>
      </Column>
    </DataTable>
        </div>
</template>
<script setup>
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Button from 'primevue/button'
import { onMounted, ref } from 'vue'
import useUsers from '@/composables/UsersComposable'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'
const toast = useToast()
const router = useRouter()
let users = ref([])
const { getUser, deleteUser } = useUsers


onMounted(() => {
  getUser().then((data) => (users.value = data))
})

const del = (id) => deleteUser(id).then(response =>
{
  if (response == "Sucesso") {
    toast.add({ severity:'success', summary: 'Usuário excluido!', life: 2000 })
    setTimeout(() => window.location.reload(), 1200);
  }
})

</script>
<style scoped></style>
