<template>
  <div class="container-fulid">
    <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
    <section class="banner banner-lg banner--login">
      <div class="login-block">
        <h2 class="nav-logo nav-logo-pri mb-xs ta-center">PALIPALI</h2>
        <form class="d-flex flex-d-col pl-1 pr-1">
          <input type="text" class="input input-line mb-xs" placeholder="Admin Email" v-model="loginData.email">
          <input type="password" class="input input-line mb-xs" placeholder="Admin Password" v-model="loginData.password">
          <button class="btn btn-dark" @click.prevent="login">LOGIN</button>
        </form>
        <router-link to="/palipali/index" class="links links-pri pl-1 pr-1 mt-1 fz-xxs">... or go offical website</router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginData: {
        email: '',
        password: '',
      },
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    login() {
      this.isLoading = true;
      this.$http.post(`${process.env.VUE_APP_APIPATH}/auth/login`, this.loginData)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired * 1000)}; path=/`;
          this.$router.push('/palipali/admin/products');
          this.isLoading = false;
        })
        .catch((err) => {
          // eslint-disable-next-line no-console
          console.log(err);
        });
    },
  },
};
</script>
