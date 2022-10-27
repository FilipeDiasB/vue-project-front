<template>
  <div class="">
    <Button icon="pi pi-align-justify" @click="visibleLeft = true" class="mr-2"/>
    <Sidebar v-model:visible="visibleLeft" :baseZIndex="10000" position="left">
      <h3>Vue Project</h3>
    </Sidebar>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import Sidebar from 'primevue/sidebar'
import Button from 'primevue/button'

const visibleLeft = ref(false)
</script>
<style scoped>
</style>