<template>
  <div>
    <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
    <section class="banner banner--prods">
      <h2 class="fz-m color-tertiary font-primary">SHOP NOW</h2>
    </section>
    <section class="pt-lg pb-lg">
      <div class="container">
        <div class="row">
          <div class="col-5">
            <img :src="product.imageUrl" />
          </div>
          <div class="col-7">
            <h3 class="mb-1 fz-m font-primary ta-left color-primary">{{ product.title }}</h3>
            <div class="d-flex mb-1">
              <del class="mr-2 fz-sm color-secondary">{{ Number(product.origin_price) | thousands }}</del>
              <p class="fz-sm fw-bold">{{ Number(product.price) | thousands }}</p>
            </div>
            <p class="mb-1 ta-left">{{ product.description }}</p>
            <div class="d-flex mb-1">
              <input class="input input-line" type="number" v-model="prodNum" />
              <button class="btn btn-dark ml-1" @click="addCart(product, prodNum)">Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script type="module">
export default {
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
      this.temporaryCart = prod;
      this.temporaryCart.product = prod.id;
      this.temporaryCart.quantity = prodNum;
      this.$http.post(`https://course-ec-api.hexschool.io/api/${process.env.VUE_APP_UUID}/ec/shopping`, this.temporaryCart)
        .then(() => {
          // eslint-disable-next-line no-undef
          this.$router.push({ path: '/palipali/cart' });
        });
    },
  },
  created() {
    this.isLoading = true;
    // 取得產品 id
    const { id } = this.$route.params;
    this.$http.get(`https://course-ec-api.hexschool.io/api/${process.env.VUE_APP_UUID}/ec/product/${id}`)
      .then((res) => {
        this.product = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
