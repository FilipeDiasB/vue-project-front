<template>
  <Toast/>
  <div class="field col-12 md:col-4 mt-6">
    <span class="p-float-label p-input-icon-left">
                        <i class="pi pi-user"/>
                        <InputText id="name" name="nome" v-model="data.name"/>
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
      <div v-if="user" class="mt-5">
        <Button label="Salvar" icon="pi pi-check" @click="data.isClicking = true; submit()" :class="{ 'clicking-true': data.isClicking, }" iconPos="right"/>
      </div>
      <div v-else class="mt-5">
        <Button label="Salvar" icon="pi pi-check"
                @mouseover="data.isClicking = true; submit()" @mouseout="data.isClicking = false;"
                :class="{ clicking: data.isClicking }" iconPos="right"/>
      </div>
    </div>
</template>
<script setup>
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { ref } from 'vue'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
const toast = useToast()


const data = ref({
  // name: 'filipe',
  // password: '123456',
  // email: 'filipe.dbitt@gmail.com',
  name: '',
  password: '',
  email: '',
  isClicking: false,
})

const user = data.value.name == 'filipe' &&  data.value.password == '123456' && data.value.email == 'filipe.dbitt@gmail.com'

const submit = () => {
  if (user) {
    toast.add({ severity: 'success', summary: 'Sucesso!', life: 3000 })
  } else {
    toast.add({ severity: 'error', summary: 'Erro!', life: 3000 })
  }
}

</script>
<style scoped>

.clicking {
  color: red;
  margin-left: 100px;
}
.clicking-true {
  color: green;
}

</style>