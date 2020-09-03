<template>
    <div class="container-fluid p-0">
        <header class="banner banner-sm banner--admin">
            <div class="">
                <h1 class="fz-m font-logo color-primary">PALIPALI</h1>
            </div>
        </header>
        <main class="pt-lg pb-lg">
            <div class="container">
                <nav class="backend-nav">
                    <ul class="d-flex">
                        <li class="backend-nav-item is-active mr-1 fw-bold" @click.prevent="cateChoose($event)">
                            <router-link to="/palipali/admin/products" class="links">Products</router-link>
                        </li>
                        <li class="backend-nav-item mr-1 fw-bold" @click.prevent="cateChoose($event)">
                            <router-link to="/palipali/admin/orders" class="links">Orders</router-link>
                        </li>
                        <li class="backend-nav-item mr-1 fw-bold" @click.prevent="cateChoose($event)">
                            <router-link to="" class="links">Products</router-link>
                        </li>
                        <li class="backend-nav-item mr-1 fw-bold" @click.prevent="cateChoose($event)">
                            <router-link to="" class="links">Products</router-link>
                        </li>
                    </ul>
                </nav>
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
      // eslint-disable-next-line newline-per-chained-call
      $(e.target).parents('.backend-nav-item').addClass('is-active').siblings().removeClass('is-active');
    },
  },
};
</script>
