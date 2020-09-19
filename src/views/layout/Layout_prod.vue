<template>
  <div>
    <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
    <section class="banner banner--prod">
      <h2 class="fz-m color-tertiary font-primary">SHOP NOW</h2>
    </section>
    <section class="pt-lg pb-lg">
      <div class="container">
        <div class="row">
          <div class="col-5 prod-gallery">
            <img :src="product.imageUrl">
          </div>
          <div class="col-7">
            <h3 class="mb-1 fz-m font-primary ta-left color-primary">{{ product.title }}</h3>
            <div class="d-flex mb-1">
              <del class="mr-xs fz-xs color-secondary">{{ Number(product.origin_price) | thousands }}</del>
              <p class="fz-sm fw-bold">{{ Number(product.price) | thousands }}</p>
            </div>
            <p class="mb-m ta-left">{{ product.description }}</p>
            <div class="d-flex mb-1">
              <input class="input input-line" type="number" v-model="prodNum">
              <button class="btn btn-dark ml-1" @click="addCart(product, prodNum)">Add Cart</button>
            </div>
            <div class="success-txt">
              <p class="mr-1">Successfully added !</p>
              <router-link to="/palipali/cart" class="links links-pri">Go Cart</router-link>
            </div>
          </div>
        </div>
        <section class="pt-lg">
            <h4 class='mb-1 fz-xs font-primary'>You maight like...</h4>
           <Recommend></Recommend>
        </section>
      </div>
    </section>
  </div>
</template>

<script type="module">
/* global $ */
import Recommend from '@/components/Recommend.vue';

export default {
  components: {
    Recommend,
  },
  data() {
    return {
      product: {},
      temporaryCart: {
        product: '',
        quantity: '',
      },
      prodNum: 1,
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    addCart(prod, prodNum) {
      this.isLoading = true;
      this.temporaryCart = prod;
      this.temporaryCart.product = prod.id;
      this.temporaryCart.quantity = prodNum;
      this.$http.post(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`, this.temporaryCart)
        .then(() => {
          $('.success-txt').addClass('is-show');
          this.isLoading = false;
        });
    },
  },
  created() {
    $(window).scrollTop(0);
    this.isLoading = true;
    // 取得產品 id
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.product = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
