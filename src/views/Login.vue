<template>
  <div id="app">
    <LoginBox />
  </div>
</template>

<script>
import LoginBox from "../components/LoginBox.vue";

export default {
  components: {
    LoginBox,
  },
};
</script>

<style scoped>
#app {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
