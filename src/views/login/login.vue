<template>
  <div class="login">
    <img src="../../assets/img/background.jpg" alt="" class="wave" />
    <login-panel></login-panel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginPanel from './cpns/login-panel.vue'

export default defineComponent({
  components: {
    LoginPanel
  },
  setup() {
    return {}
  }
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // background: url('../../assets/img/background.jpg');
  // background: url('../../assets/img/login-bg.svg');
}
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
