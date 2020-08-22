<template>
  <div class="container-fluid p-0">
    <nav class="navbar">
      <div class="nav-logo">
        <router-link to="/palipali/index" class="links links-wh">
          <h1>PALIPALI</h1>
        </router-link>
      </div>
      <ul class="d-flex ai-center color-basic-w">
        <li class="mr-1 fw-bold">
          <router-link to="/palipali/products" class="links links-wh">Products</router-link>
        </li>
        <li class="mr-1 fw-bold">
          <a href="#" class="links links-wh">Category</a>
        </li>
        <li class="mr-1 fw-bold">
          <router-link to="/palipali/about" class="links links-wh">About</router-link>
        </li>
        <li>
          <router-link to="/palipali/cart" class="links links-wh">
            <span class="material-icons">shopping_cart</span>
          </router-link>
        </li>
      </ul>
    </nav>
    <main>
      <router-view />
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

<script>
/* global $ */

export default {
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
