<template>
    <div>
        <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
        <h2 class="mb-m fz-xs fw-bold color-secondary">Order Detail</h2>
        <div class="d-flex">
            <form class="w-50p">
                <div class="d-flex ai-center">
                    <p class="input input-edit-label">Created time</p>
                    <p class="">{{ tempData.created.datetime }}</p>
                </div>
                <div class="d-flex ai-center">
                    <p class="input input-edit-label">Total</p>
                    <p class="">{{ tempData.amount }}</p>
                </div>
                <div class="d-flex ai-center">
                    <p class="input input-edit-label">Payment</p>
                    <p class="">{{ tempData.paid ? 'Paid':'Not paid' }} </p>
                </div>
                <div class="d-flex ai-center">
                    <p class="input input-edit-label">Paid</p>
                    <p class="">{{ tempData.payment }}</p>
                </div>
                <div class="d-flex ai-center">
                    <p for="paid" class="input input-edit-label w-50p">Products</p>
                    <ul class="pt-tiny">
                        <li class="d-flex jc-space-between" v-for="prod in tempData.products" :key="prod.title">
                            <p class="mr-1">{{ prod.product.title }}</p>
                            <p>{{ prod.quantity }}</p>
                        </li>
                    </ul>
                </div>
            </form>
            <ul class="w-50p">
                <li>
                    <p class="input input-edit-label">Recipient name</p>
                    <span class="pl-tiny">{{ tempData.user.name }}</span>
                </li>
                <li>
                    <p class="input input-edit-label">Recipient E-mail</p>
                    <span class="pl-tiny">{{ tempData.user.email }}</span>
                </li>
                <li>
                    <p class="input input-edit-label">Recipient Phone</p>
                    <span class="pl-tiny">{{ tempData.user.tel }}</span>
                </li>
                <li>
                    <p class="input input-edit-label">Recipient Address</p>
                    <span class="pl-tiny">{{ tempData.user.address }}</span>
                </li>
            </ul>
        </div>
        <div class="d-flex mt-m">
            <router-link to="/palipali/admin/orders">
                <button class="btn btn-pri mr-1">Cancel</button>
            </router-link>
            <button class="btn btn-dark mr-1" @click.prevent="savePaid(tempData)">Paid</button>
            <button class="btn btn-dark" @click.prevent="saveUnPaid(tempData)">Not Paid</button>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      orderData: {},
      tempData: {
        created: {},
        user: {},
        paid: '',
        id: '',
      },
    };
  },
  methods: {
    getOrderInfo() {
      this.isLoading = true;
      this.orderData = {};
      const { id } = this.$route.params;
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${id}`)
        .then((res) => {
          this.orderData = res.data.data;
          this.tempData = this.orderData;
          this.isLoading = false;
        });
    },

    savePaid(info) {
      this.isLoading = true;
      this.$http.patch(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${info.id}/paid`)
        .then(() => {
          this.getOrderInfo();
        });
    },

    saveUnPaid(info) {
      this.isLoading = true;
      this.$http.patch(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/orders/${info.id}/unpaid`)
        .then(() => {
          this.getOrderInfo();
        });
    },
  },
  created() {
    this.token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`;
    this.orderData = {};
    this.getOrderInfo();
  },
};
</script>
