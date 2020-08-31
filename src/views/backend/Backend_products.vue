<template>
    <div>
      <div class="row d-flex flex-wrap-w">
          <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
          <div class="col-4 card backend-card d-flex mb-1" v-for="item in productsData" :key="item.id">
              <div class="card-head prod-pic">
                  <img :src="item.imageUrl">
              </div>
              <div class="card-content">
                  <span class="material-icons mb-tiny fz-xs ta-right">clear</span>
                  <div class="d-flex jc-space-between mb-tiny">
                      <div class="card-tit">{{ item.title }}</div>
                  </div>
                  <div class="d-flex mb-tiny">
                      <del class="mr-2 fz-ets color-secondary">{{ item.origin_price | thousands }}</del>
                      <p class="fz-xs">{{ item.price | thousands }}</p>
                  </div>
                  <div class="d-flex" @click="editProduct(item)">
                      <span class="material-icons fz-xs">info</span>
                  </div>
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
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/products`)
        .then((res) => {
          this.productsData = res.data.data;
          this.isLoading = false;
        });
    },
    editProduct(product) {
      this.$router.push(`/palipali/admin/product/${product.id}`);
    },
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.getAllProducts();
  },
};
</script>
