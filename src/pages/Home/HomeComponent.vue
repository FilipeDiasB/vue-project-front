<template>
  <div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useToast } from 'primevue/usetoast'

export default defineComponent({
  setup () {
    const toast = useToast()

    const text = ref(null)
    const checked1 = false
    const checked2 = false
    const radioValue1 = ''
    const radioValue2 = ''
    const success = () => {
      toast.add({ severity: 'success', summary: 'Sucesso!', detail: text, life: 1500 })
    }

    return {
      text,
      success,
      checked1,
      checked2,
      radioValue1,
      radioValue2,
    }
  }
})
</script>

<style scoped>
.login {
  width: 100%;
  height: 100vh;
  background-color: crimson;
}
</style>