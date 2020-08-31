<template>
    <div class="row d-flex flex-wrap-w">
        <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
        <div class="col-4 card d-flex" v-for="item in productsData" :key="item.id">
            <div class="card-head prod-pic w-40p">
                <img :src="item.imageUrl">
            </div>
            <div class="card-content w-60p">
                <div class="d-flex jc-space-between mb-tiny">
                    <div class="card-tit">{{ item.title }}</div>
                    <span class="material-icons pointer">clear</span>
                </div>
                <div class="d-flex mb-tiny">
                    <del class="mr-2 fz-ets color-secondary">{{ item.origin_price | thousands }}</del>
                    <p class="fz-xs">{{ item.price | thousands }}</p>
                </div>
                <div class="d-flex pointer">
                    <span class="material-icons">info</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script type="module">
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      productsData: {},
      filteredData: {},
    };
  },
  methods: {
    getAllProducts() {
      this.isLoading = true;
      this.productsData = {};
      this.filteredData = {};
      this.$http
        .get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
        .then((res) => {
          this.productsData = res.data.data;
          this.isLoading = false;
        });
    },
    getAProducts(product) {
      this.$router.push(`product/${product.id}`);
    },
  },
};
</script>
