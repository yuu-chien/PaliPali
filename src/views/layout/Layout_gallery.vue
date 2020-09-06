<template>
  <div>
    <header class="banner banner--gallery banner-sm"></header>
    <Board></Board>
  </div>
</template>

<script type="module">
import Board from '@/components/Board.vue';
/* global $ */
export default {
  components: {
    Board,
  },
  created() {
    $(window).scrollTop(0);
  },
};
</script>
