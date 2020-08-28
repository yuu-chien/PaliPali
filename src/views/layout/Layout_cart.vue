<template>
  <div>
    <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
    <section class="banner banner-sm banner--cart">
      <p class="fz-m font-primary">ORDER DETAIL</p>
    </section>
    <section class="pt-lg pb-lg">
      <div class="container">
        <div class="row">
          <div class="col-8 pl-sm pr-sm">
            <div class="card cart-prod pt-tiny pb-tiny " v-for="(products, id) in cartData" :key="id">
              <div class="row">
                <div class="col-4 cart-prodImg">
                  <img :src="products.product.imageUrl">
                </div>
                <div class="col-8 card-content">
                  <div class="d-flex jc-space-between ai-center mb-1">
                    <p class="font-primary color-primary fz-sm">{{ products.product.title }}</p>
                    <span class="material-icons color-secondary ta-right pointer" @click="delProd(products.product.id)">clear</span>
                  </div>
                  <p class="w-75p color-secondary fz-xxs mb-1">{{ products.product.content }}</p>
                  <div class="d-flex ai-center">
                    <input class="input" type="number" v-model="products.quantity" @click="editCart(products)">
                    <p>{{ parseInt((products.quantity)*(products.product.price)) | thousands }}</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="mt-1 d-flex jc-flex-end">
              <p class="mr-xs fw-bold fz-xs color-primary">TOTAL</p>
              <p class="mr-xs fz-xs">{{ this.totalPrice | thousands }}</p>
            </div>
          </div>
          <div class="col-4">
            <form>
              <ValidationProvider name="name" v-slot="{ errors, classes }" class="d-flex flex-d-col mb-tiny">
                <label for="recipient_name" class="input input-label fz-xs">NAME</label>
                <input type="text" id="recipient_name" name="name" class="input input-line" placeholder="Hex Excellent" v-model="recipientData.name" :class="classes">
                <span class="recipient-warn">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="telephone" v-slot="{ errors, classes }" rules="numeric|required" class="d-flex flex-d-col mb-tiny">
                <label for="recipient_tel" class="input input-label fz-xs">TELEPHONE</label>
                <input type="tel" id="recipient_tel" name="tel" class="input input-line" placeholder="0912345678" v-model="recipientData.tel" :class="classes">
                <span class="recipient-warn">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="email" v-slot="{ errors, classes }" rules="email|required" class="d-flex flex-d-col mb-tiny">
                <label for="recipient_email" class="input input-label fz-xs">EMAIL</label>
                <input type="email" id="recipient_email" name="email" class="input input-line" placeholder="Hex@Excellent.com" v-model="recipientData.email" :class="classes">
                <span class="recipient-warn">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="payment" v-slot="{ errors, classes }" rules="required" class="d-flex flex-d-col mb-tiny">
                <label for="payment" class="input input-label fz-xs">PAYMENT</label>
                <select name="payment" id="payment" class="form-control input" v-model="recipientData.payment" :class="classes">
                  <option value="WebATM">網路銀行轉帳</option>
                  <option value="CVS">超商條碼繳費</option>
                  <option value="Credit">線上信用卡</option>
                  <option value="ApplePay">ApplePay</option>
                  <option value="GooglePay">GooglePay</option>
                </select>
                <span class="recipient-warn">{{ errors[0] }}</span>
              </ValidationProvider>
              <ValidationProvider name="address" v-slot="{ errors, classes }" rules="required" class="d-flex flex-d-col mb-tiny">
                <label for="recipient_address" class="input input-label fz-xs">ADDRESS</label>
                <input type="text" id="recipient_address" name="address" class="form-control input input-line" placeholder="loremloremloremloremlorem" v-model="recipientData.address" :class="classes">
                <span class="recipient-warn">{{ errors[0] }}</span>
              </ValidationProvider>
              <router-link to="/palipali/success" class="links links-pri mt-tiny">
                <div class="btn btn-dark mt-xs ta-center pointer">ORDER NOW</div>
              </router-link>
              <!-- <div class="btn btn-dark mt-xs ta-center pointer" @click="orderNow(recipientData)">ORDER NOW</div> -->
            </form>
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
      cartData: {},
      totalPrice: 0,
      recipientData: {
        name: '',
        tel: '',
        email: '',
        address: '',
        payment: '',
      },
      isLoading: false,
      fullPage: true,
    };
  },
  methods: {
    getCartData() {
      this.isLoading = true;
      this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`)
        .then((res) => {
          this.cartData = res.data.data;
          this.totalPrice = 0;
          this.cartData.forEach((i) => {
            this.totalPrice += i.product.price * i.quantity;
          });
          this.isLoading = false;
        });
    },
    editCart(item) {
      this.isLoading = true;
      const cateData = {
        product: item.product.id,
        quantity: item.quantity,
      };
      this.$http.patch(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`, cateData)
        .then(() => {
          this.getCartData();
        });
    },
    delProd(id) {
      this.isLoading = true;
      this.$http.delete(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}`)
        .then(() => {
          this.isLoading = false;
          this.getCartData();
          this.isLoading = false;
        });
    },
    orderNow(recipientData) {
      this.isLoading = true;
      this.$http.post(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`, recipientData)
        .then(() => {
          this.cartData = '';
          this.isLoading = false;
          this.$router.push({ path: '/palipali/success' });
        });
    },
  },
  created() {
    this.getCartData();
  },
};
</script>
