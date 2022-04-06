<template>
  <div class="user">
    <page-search :searchFormConfig="searchFormConfig" />
    <div class="content">user</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PageSearch from '@/components/page-search'
import { searchFormConfig } from './config/search.config'
import { useStore } from '@/store'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch
  },
  setup() {
    const store = useStore()
    store.dispatch('system/getPageListAction', {
      pageUrl: '/users/list',
      queryInfo: {
        offset: 0,
        size: 10
      }
    })
    return {
      searchFormConfig
    }
  }
})
</script>

<style scoped></style>
