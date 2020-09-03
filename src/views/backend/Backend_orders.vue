<template>
    <div>
        <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
        <div class="pl-sm pr-sm">
            <ul class="orders-list" v-for="order in ordersData" :key="order.id">
                <li class="d-flex pt-tiny pb-tiny fw-bold">
                    <div>Created time</div>
                    <div>Payment</div>
                    <div>Total</div>
                    <div>Paid</div>
                    <div></div>
                </li>
                <li class="orders-list-item d-flex pt-1 pb-1">
                    <div>{{ order.created.datetime }}</div>
                    <div>{{ order.payment }}</div>
                    <div>{{ order.amount }}</div>
                    <div>{{ order.paid }}</div>
                    <div class="d-flex">
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
          // eslint-disable-next-line no-console
          console.log('this.ordersData', this.ordersData);
          this.isLoading = false;
        });
    },
  },
  created() {
    this.getAllorders();
  },
};
</script>
