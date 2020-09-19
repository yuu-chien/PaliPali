<template>
    <div class="container-fluid p-0">
        <header class="banner banner-sm banner--admin">
            <router-link to="/palipali/index" class="links fz-m font-logo color-primary">
                <h1>PALIPALI</h1>
            </router-link>
        </header>
        <main class="pt-lg pb-lg">
            <div class="container">
                <section style="min-height: 60vh;">
                    <router-view />
                </section>
            </div>
        </main>
        <footer class="pt-1 pb-1 bgc-basic-w">
            <div class="container d-flex jc-center ai-center">
                <h2 class="mr-3 font-logo">PALIPALI</h2>
                <p class="fz-ets mr-2">Copyright &copy; 2020</p>
                <p class="fz-ets">This Project is for practice, not for commercial use or distribution.</p>
            </div>
        </footer>
    </div>
</template>

<script type="module">
/* global $ */
export default {
  methods: {
    cateChoose(e) {
      $(e.target).parents('.backend-nav-item').addClass('is-active')
        .siblings()
        .removeClass('is-active');
    },
  },
};
</script>
