<template>
  <form id="form">
    <Toast/>
    <div v-if="errors">
      <div v-for="(field, k) in errors" :key="k" class="bg-red-500 text-white border-round-md mt-2 font-bold shadow-lg px-2 py-1">
        <p v-for="error in field" :key="error" class="text-sm">
          {{ error }}
        </p>
      </div>
    </div>
    <div class="field col-12 md:col-4 mt-6">
    <span class="p-float-label p-input-icon-left">
                        <i class="pi pi-user"/>
                        <InputText id="name" v-model="data.name"/>
                        <label for="name">Nome</label>
    </span>
    </div>
    <div class="field col-12 md:col-4">
   <span class="p-float-label p-input-icon-left">
                        <i class="pi pi-lock"/>
                        <InputText id="password" type="password" v-model="data.password"/>
                        <label for="password">Senha</label>
   </span>
    </div>
    <div class="field col-12 md:col-4">
   <span class="p-float-label p-input-icon-left">
                        <i class="pi pi-envelope"/>
                        <InputText id="email" type="email" v-model="data.email"/>
                        <label for="email">Email</label>
   </span>
      <div class="mt-5">
        <Button @click="submit" label="Salvar" icon="pi pi-check" iconPos="right"/>
      </div>
    </div>
  </form>
</template>
<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ref } from 'vue'
import useUsers from '@/composables/UsersComposable'
const { createUser } = useUsers
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import { useRouter } from 'vue-router'
const toast = useToast()
const router = useRouter()

const data = ref({
  name : '',
  password : '',
  email : '',
})

const errors = ref('')

const submit = () => createUser(data.value, errors).then((response) =>
{
  if (response.data == "Sucesso") {
    toast.add({ severity:'success', summary: 'Usuário cadastrado com sucesso!', life: 3000 })
    setTimeout( () => router.push({ name: 'home'}), 1200 )
  }
})
</script>
<style scoped>
</style>