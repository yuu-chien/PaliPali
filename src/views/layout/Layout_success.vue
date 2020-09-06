<template>
  <div>
    <section class="banner banner--success color-primary">
      <h2 class="mb-1 fz-m font-primary">Thank You</h2>
      <p class="mb-1 fz-xs">Enjoy the waterside life with PailPail</p>
      <router-link to="/palipali/index" class="links">
        <button class="btn btn-dark">GO BACK</button>
      </router-link>
    </section>
  </div>
</template>

<script type="module">
/* global $ */
export default {
  created() {
    $(window).scrollTop(0);
  },
};
</script>
