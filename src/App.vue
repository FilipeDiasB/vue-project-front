<template>
  <SidebarComponent/>
  <div class="overflow-auto mx-4 mt-5">
    <router-view/>
  </div>
</template>
<script setup>
import SidebarComponent from '@/components/SidebarComponent.vue'
</script>
<style>
html * {
  font-family: Arial;
}
</style>
