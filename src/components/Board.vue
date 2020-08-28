<template>
  <div>
    <header class="banner banner--gallery banner-sm"></header>
    <section class="pt-lg pb-lg">
      <div class="container">
        <p class="mb-1 fz-m color-primary font-primary">Fresh Ideas</p>
        <div class="boards-wrap">
            <silent-box :gallery="images">
              <template v-slot:silentbox-item="{ silentboxItem }">
                  <a class="board-gallery-tit" @click.prevent="getAProducts(silentboxItem.product_id)">
                    <span style="opacity: 0;">{{ silentboxItem.product_id }}</span>
                    <p>{{ silentboxItem.product_title }}</p>
                  </a>
              </template>
            </silent-box>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="module">
// /* global $ */
export default {
  data() {
    return {
      images: [
        {
          src: '',
          description: '🌊Lorem ipsum dolor sit amet.｜photo by Hex Excellent',
          product_title: 'stirt',
          product_id: '',
        },
        {
          src: 'https://images.unsplash.com/photo-1566350795001-4d6b11d573bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          description: 'Lorem ipsum dolor sit amet.｜photo by Hex Excellent',
          product_title: 'pants',
          product_id: '',
        },
      ],
    };
  },
  methods: {
    getAProducts(product) {
      this.$router.push(`product/${product.id}`);
    },
  },
};
</script>
