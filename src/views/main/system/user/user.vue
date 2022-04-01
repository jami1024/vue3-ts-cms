<template>
  <div class="user">
    <zl-form v-bind="searchFormConfig" />
    <div class="content">user</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ZlForm from '@/base-ui/form'
import { searchFormConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    ZlForm
  },
  setup() {
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
