<template>
  <div class="container-fulid">
    <section class="banner banner-lg banner--login">
      <div class="login-block">
        <h2 class="nav-logo nav-logo-pri mb-xs">PALIPALI</h2>
        <form class="d-flex flex-d-col">
          <input type="text" class="input input-line mb-xs" placeholder="Admin Email" v-model="loginData.email">
          <input type="password" class="input input-line mb-xs" placeholder="Admin Password" v-model="loginData.password">
          <button class="btn btn-dark" @click.prevent="login">LOGIN</button>
        </form>
        <router-link to="/palipali/index" class="links links-pri mt-tiny">... or go offical website</router-link>
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
    };
  },
  methods: {
    login() {
      this.$http.post('https://course-ec-api.hexschool.io/api/auth/login', this.loginData)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired * 1000)}; path=/`;
          this.$router.push('admin/products');
        })
        .catch(() => {
          // console.log(err);
        });
    },
  },
};
</script>
