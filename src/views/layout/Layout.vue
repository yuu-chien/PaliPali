<template>
  <div class="container-fluid p-0">
    <nav class="navbar">
      <div class="nav-logo">
        <router-link to="/palipali/index" class="links links-wh">
          <h1>PALIPALI</h1>
        </router-link>
      </div>
      <div class="nav-more" @click="navMore">
        <span class="material-icons">expand_more</span>
      </div>
      <ul class="nav-list">
        <li class="mr-1 fw-bold">
          <router-link to="/palipali/products" class="links links-wh">Products</router-link>
        </li>
        <li class="mr-1 fw-bold">
          <router-link to="/palipali/gallery" class="links links-wh">Gallery</router-link>
        </li>
        <li class="mr-1 fw-bold">
          <router-link to="/palipali/about" class="links links-wh">About</router-link>
        </li>
        <li class="mr-1">
          <router-link to="/palipali/cart" class="links links-wh">
            <span class="material-icons">shopping_cart</span>
          </router-link>
        </li>
        <li class="mr-1">
          <router-link to="/palipali/login" class="links links-wh">
            <span class="material-icons">pool</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <main style="min-height: 100vh;">
      <router-view />
    </main>
    <footer class="footer bgc-basic-w">
      <div class="container d-flex jc-center ai-center">
        <h2 class="footer-logo mr-3 font-logo">PALIPALI</h2>
        <p class="footer-copy fz-ets mr-2">Copyright &copy; 2020</p>
        <p class="footer-sign fz-ets">This Project is for practice, not for commercial use or distribution.</p>
      </div>
    </footer>
  </div>
</template>

<script>
/* global $ */

export default {
  methods: {
    navMore() {
      $('.nav-list').toggleClass('more');
    },
  },
  created() {
    // eslint-disable-next-line func-names
    $(window).scroll(function () {
      const scrollHeight = $(this).scrollTop();
      if (scrollHeight === 0) {
        $('.navbar').removeClass('is-scroll');
      } else {
        $('.navbar').addClass('is-scroll');
      }
    });
  },
};
</script>
