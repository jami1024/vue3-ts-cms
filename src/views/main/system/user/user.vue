<template>
  <div class="user">
    <zl-form v-bind="searchFormConfig" v-model="formData" />
    <div class="content">user</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ZlForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    ZlForm
  },
  setup() {
    const formData = ref({
      id: '',
      name: '',
      password: '',
      sport: '',
      createTime: ''
    })
    return {
      searchFormConfig,
      formData
    }
  }
})
</script>

<style scoped></style>
