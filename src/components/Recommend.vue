<template>
  <div>
      <div class="d-flex flex-wrap-w p-0">
        <div class="card card-recom pointer mb-1" v-for="(item, id) in recommendInfo" :key="id" @click.prevent="getAProducts(item)">
          <div class="card-head prod-pic">
            <img :src="item.imageUrl">
          </div>
          <div class="card-content">
            <p class="card-tit mb-tiny">{{ item.title }}</p>
            <div class="d-flex">
              <del class="mr-2 fz-ets color-secondary">{{ item.origin_price | thousands }}</del>
              <p class="fz-xs">{{ item.price | thousands }}</p>
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
      recommendProducts: [],
      recommendInfo: [],
    };
  },
  methods: {
    FisherYatesShuffle(reco) {
      this.recommendInfo = [];
      const finNum = reco.length - 1;
      for (let i = finNum; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.recommendProducts[i], this.recommendProducts[j]] = [this.recommendProducts[j], this.recommendProducts[i]];
      }
      for (let s = 0; s < 5; s += 1) {
        this.recommendInfo[s] = this.recommendProducts[s];
      }
    },
  },
  created() {
    this.isLoading = true;
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`)
      .then((res) => {
        this.recommendProducts = res.data.data;
        this.FisherYatesShuffle(this.recommendProducts);
      });
  },
};
</script>
