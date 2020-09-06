<template>
    <div>
        <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
        <nav class="backend-nav">
            <ul class="d-flex">
                <li class="backend-nav-item mr-1 fw-bold">
                    <router-link to="/palipali/admin/products" class="links">Products</router-link>
                </li>
                <li class="backend-nav-item mr-1 fw-bold is-active">
                    <router-link to="/palipali/admin/orders" class="links">Orders</router-link>
                </li>
            </ul>
        </nav>
        <p class="mb-m d-flex ai-center">Click the<span class="material-icons fz-xs mr-tiny ml-tiny color-primary">info</span>to edit.</p>
        <div>
            <ul class="orders-list" v-for="order in ordersData" :key="order.id">
                <li class="orders-list-item d-flex pt-1 pb-1">
                    <div class="mr-1 flex-1">{{ order.created.datetime }}</div>
                    <div class="mr-1 flex-1">{{ order.payment }}</div>
                    <div class="mr-1 flex-1">{{ order.amount | thousands }}</div>
                    <div class="mr-1 flex-1">{{ order.paid ? 'Paid':'Not paid' }}</div>
                    <div class="d-flex pointer" @click.prevent="checkDetail(order)">
                        <span class="material-icons fz-xs">info</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      ordersData: {},
    };
  },
  methods: {
    getAllorders() {
      this.isLoading = true;
      this.ordersData = {};
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders`)
        .then((res) => {
          this.ordersData = res.data.data;
          this.isLoading = false;
        });
    },
    checkDetail(order) {
      this.$router.push(`/palipali/admin/order/${order.id}`);
    },
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.ordersData = {};
    this.getAllorders();
  },
};
</script>
