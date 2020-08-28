<template>
  <div>
    <section class="pt-lg pb-lg">
      <div class="container">
        <h5 class="mb-1 fz-m color-primary font-primary">Fresh Ideas</h5>
        <p>Use hashtag <a href="#" class="fw-bold color-secondary">#palipali</a> on SNS and it will show up here.</p>
        <p class="mb-1">Sharing your unique wearstyle and the waterside life to the world !</p>
        <div class="boards-wrap">
            <silent-box :gallery="images">
              <template v-slot:silentbox-item="{ silentboxItem }">
                  <img :src="silentboxItem.src" alt="">
                  <a @click.prevent="getAProducts(silentboxItem.product_id)">
                    <span style="opacity: 0;">{{ silentboxItem.product_id }}</span>
                    <p class="board-gallery-tit">{{ silentboxItem.product_title }}</p>
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
          src: 'https://images.unsplash.com/photo-1523606772308-64a28db0ef2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=80',
          description: '🌊 Surffing just like flying on the sea. To Infinity and Beyond.',
          product_title: 'DON PENDLETON OWL',
          product_id: 'c8vVCwa7NzQcontLbpRdRm3bXrCW9hBv5GbyAXvP6xbjWxbfkTcVT9BSBW9yoILC',
        },
        {
          src: 'https://images.unsplash.com/photo-1594623274957-742e85824239?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          description: 'BE HIGHT !',
          product_title: 'CERAMIC STRIPE SHORTIE',
          product_id: 'lLahI1iaajg2MXpzlgKauxfjpAusJ02nGDCh2me0m7QetbmjUdyUIYrjqH0b3oUt',
        },
        {
          src: 'https://images.unsplash.com/photo-1564695904932-9b5cae20083e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=333&q=80',
          description: 'Kick his ass 🤸‍♂️🤸‍♂️🤸‍♂️',
          product_title: 'EKA SURF T-SHIRT',
          product_id: 'zItRzD6noJkQdCLJGgWMy6SnCUHcxgqUisn4m7axLDlEVBS5wuOPw1r6NEGXtrEz',
        },
        {
          src: 'https://images.unsplash.com/photo-1554235518-c4170f5deebd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80',
          description: 'Hot guys in beach. YES ! US! ',
          product_title: 'DRY HEAT SHORTIE',
          product_id: 'd3cxqETGZBowzvzxMMh03m1s0r0uctCEnVIiT8wOSUDpRwVbts91tzJiL7B2FOHD',
        },
        {
          src: 'https://images.unsplash.com/photo-1516687646495-0679d81f6ac1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=701&q=80',
          description: '🛹🤘',
          product_title: 'RISING PALM PANT',
          product_id: 'jrevGPAOFnhfZ3zxeVviWIXrYxKGbcQ1BGnPnNGbBxYl6qeLPQQcshGlTd9huaXy',
        },
        {
          src: 'https://images.unsplash.com/photo-1566350795001-4d6b11d573bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
          description: '🍆🍆🍆',
          product_title: 'CERAMIC STRIPE SHORTIE',
          product_id: 'lLahI1iaajg2MXpzlgKauxfjpAusJ02nGDCh2me0m7QetbmjUdyUIYrjqH0b3oUt',
        },
      ],
    };
  },
  methods: {
    getAProducts(product) {
      this.$router.push(`product/${product}`);
    },
  },
};
</script>
