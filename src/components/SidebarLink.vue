<template>
<router-link :to="to" class="link" :class="{ active: isActive }">
  <i class="icon" :class="icon"/>
    <slot/>
</router-link>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const props = defineProps({
    to: { String, required: false },
    icon: { String, required: false },
});

const route = useRoute()
const isActive = computed(() => route.path === props.to)
</script>

<style scoped>
.link {
  display: flex;
  align-items: center;

  cursor: pointer;
  position: relative;
  font-weight: 400;
  user-select: none;

  margin: 0.1em 0;
  padding: 0.4em;
  border-radius: 0.25em;
  height: 1.5em;
  color: black;

  text-decoration: none;
}

.link:hover {
  background-color: grey;
  color: white;
}

.link .icon {
  flex-shrink: 0;
  width: 25px;
}
</style>