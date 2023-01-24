<template>
  <div id="top-bar" class="shadow-4">
    <div class="flex flex-row justify-content-between p-3 mx-8">
      <div>
        <Button id="menu" icon="pi pi-align-justify" @click="visibleLeft = true" class="mr-2"/>
      </div>
      <div>¬
        <Button id="user" icon="pi pi-user" class="p-button-rounded p-button-info"/>
        <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000" position="left">
          <h3>VUE PROJECT</h3>
          <PanelMenu :model="items"/>
        </Sidebar>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'
const visibleLeft = ref(false)
import PanelMenu from 'primevue/panelmenu'

const items = ref([
  {
    label: 'Usuários',
    icon: 'pi pi-user',
    items: [
      {
        label: 'Criar usuário',
        icon: 'pi pi-user-plus',
        to: '/usuario/cadastro'
      },
      {
        label: 'Lista usuários',
        icon: 'pi pi-users',
        to: '/'
      }
    ]
  },
  {
    label: 'Processos',
    icon: 'pi pi-server',
    items: [
      {
        label: 'Listar processos',
        icon: 'pi pi-align-justify',
        to: '/teste'
      },
      {
        label: 'Teste',
        icon: 'pi pi-align-justify',
        to: '/'
      }
    ]
  }
])
</script>
<style scoped>
#top-bar {
  background-color: #2F3339;
}
#user {
  background-color: white;
  color: black;
}
#menu {
  background-color: white;
  color: black;
}
</style>