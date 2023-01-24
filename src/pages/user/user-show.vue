<template>
  <div>
    <Toast/>
    <div>
      <router-link :to="{ name: 'home' }" class="p-button no-underline"><i class="pi pi-arrow-left"/></router-link>
    </div>
    <div>
      <Button @click="toggleModal" class="mt-2">Editar usuário</Button>
    </div>
    <ModalComponent @close="toggleModal" :modalActive="modalActive">
      <div v-if="errors">
        <div v-for="(field, k) in errors" :key="k" class="bg-red-500 text-white border-round-md font-bold mt-2 shadow-lg px-2 py-1">
          <p v-for="error in field" :key="error" class="text-sm">
            {{ error }}
          </p>
        </div>
      </div>
      <div class="col-12 md:col-4 mt-3">
        <div class="mb-2">
          <label for="name">Nome</label>
        </div>
        <span class="p-input-icon-left">
                        <i class="pi pi-user"/>
                        <InputText id="name" v-model="data.name"/>
              </span>
      </div>
      <div class="col-12 md:col-4">
        <div class="mb-2">
          <label for="password">Senha</label>
        </div>
        <span class="p-input-icon-left">
                        <i class="pi pi-lock"/>
                        <InputText id="password" type="password" v-model="data.password"/>
              </span>
      </div>
      <div class="col-12 md:col-4">
        <div class="mb-2">
          <label for="email">Email</label>
        </div>
        <span class="p-input-icon-left">
                        <i class="pi pi-envelope"/>
                        <InputText id="email" type="email" v-model="data.email"/>
                </span>
        <div class="mt-5">
          <Button @click="submit" label="Editar" icon="pi pi-check" iconPos="right"/>
        </div>
      </div>
    </ModalComponent>
    <div class="p-7">
      <div class="surface-card p-4 shadow-5 border-round overflow-scroll">
        <div class="text-3xl font-medium mb-3">
          <span>Dados do usuário</span>
        </div>
        <div class="p-2">
          <div class="font-medium mb-3">
            <span>Nome: {{ user.name }}</span>
          </div>
          <div class="font-medium mb-3">
            <span>E-mail: {{ user.email }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import useUsers from '@/composables/UsersComposable'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import ModalComponent from '@/components/ModalComponent.vue'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
const { showUser, editUser } = useUsers
const route = useRoute()
const router = useRouter()
const toast = useToast()

const modalActive = ref(false)
const toggleModal = () => {
  modalActive.value = !modalActive.value
}

let user = ref({})

const id = route.params.id

onMounted(() => {
  showUser(id).then(response => (user.value = response))
})

const data = ref({
  name : '',
  password : '',
  email : '',
})

const errors = ref('')

const submit = () => editUser(id, data.value, errors).then((response) =>
{
  if (response == "Sucesso") {
    toast.add({ severity:'success', summary: 'Usuário editado com sucesso!', life: 3000 })
  }
})

</script>
<style scoped>
</style>