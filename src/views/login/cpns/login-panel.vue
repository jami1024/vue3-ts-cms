<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span class="custom-tabs-label">
            <span><i class="el-icon-user-solid"></i> 账号登录</span>
          </span>
        </template>
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <span><i class="el-icon-mobile-phone"></i> 手机登录</span>
        </template>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login-panel {
  width: 320px;
  .title {
    text-align: center;
  }
}
</style>
