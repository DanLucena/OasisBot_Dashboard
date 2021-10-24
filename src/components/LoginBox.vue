<template lang="pug">
.container
  img(src="../assets/icons/logo.svg", alt="logo")
  .login-container
    h1.title Welcome to Oasis
    p.subtitle Enter your credentials to access your account.
    .input-box
      img(src="../assets/icons/mail.svg", alt="mail-icon")
      input(type="text", name="email", placeholder="Enter your email")
    .input-box
      img(src="../assets/icons/password.svg", alt="mail-icon")
      input(
        type="password",
        name="password",
        placeholder="Enter your password"
      )
    v-btn.ma-2(
      :loading="loading",
      :disabled="loading",
      color="#3D2C8D",
      @click="loader = 'loading'"
    ) Accept Terms
  p.forget-password Forgot your password?&nbsp;
    span.reset-password Reset Password
</template>

<script>
export default {
  name: "LoginBox",
  data() {
    return {
      loader: null,
      loading: false,
    };
  },
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];
      setTimeout(() => (this[l] = false), 2000);
      this.loader = null;
    },
  },
};
</script>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  img {
    margin-bottom: 2.5rem;
  }

  .login-container {
    width: 40rem;
    height: 29rem;
    background-color: #fff;
    border-radius: 15px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 3rem 3.5rem 2rem 3.5rem;

    .title {
      font-weight: 600;
      font-size: 1.8rem;
      color: #1c0c5b;
    }

    .subtitle {
      font-size: 1.2rem;
      margin: 0.6rem 0 3.8rem 0;
      font-weight: 200;
      color: #9dacc2;
    }

    .input-box {
      display: flex;
      width: 100%;
      border: 1px solid #ccc;
      height: 3.2rem;
      border-radius: 8px;
      margin-bottom: 2rem;
      align-items: center;
      padding-left: 0.5rem;

      img {
        margin: 0;
        width: 2rem;
      }

      input {
        width: 100%;
        height: 100%;
        font-weight: 500;
        padding-left: 1rem;
        outline: none;
      }

      input::placeholder {
        color: #878196;
      }
    }

    .ma-2 {
      width: 100%;
      height: 3.8rem !important;
      border-radius: 8px;
      color: #fff;
    }
  }

  .forget-password {
    margin-top: 2.8rem;
    color: #9dacc2;

    .reset-password {
      font-weight: 600;
      cursor: pointer;
      color: #3d2c8d;
    }
  }
}
</style>
