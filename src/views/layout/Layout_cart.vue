<template>
  <div>
    <loading :active.sync="isLoading" color="#2D7487" background-color="#000"></loading>
    <section class="banner banner-sm banner--cart">
      <p class="fz-m font-primary">ORDER DETAIL</p>
    </section>
    <section class="pt-lg pb-lg">
      <div class="container">
        <div class="row">
          <div class="col-8 pr-5">
            <div class="c-card c-card--cart" v-for="(products, id) in cartData" :key="id">
              <div class="row c-card">
                <div class="col-4 c-card__pic">
                  <img :src="products.product.imageUrl" />
                </div>
                <div class="col-8 c-card__body c-card__body--v">
                  <span class="material-icons" @click="delProd(products.product.id)">clear</span>
                  <p class="c-input__label">{{ products.product.title }}</p>
                  <p class="c-card__dec">{{ products.product.content }}</p>
                  <div class="c-card__bottom">
                    <input class="c-input c-input--w75p" type="number" v-model="products.quantity" />
                    <p>{{ parseInt((products.quantity)*(products.product.price)) | thousands }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-4">
            <form class="l-fromGroup">
              <validation-provider rules="required" class="l-fromItem">
                <label for="recipient_name" class="c-input__label">NAME</label>
                <input
                  type="text"
                  id="recipient_name"
                  name="name"
                  class="form-control c-input"
                  placeholder="Hex Excellent"
                  v-model="recipientData.name"
                />
                <span class></span>
              </validation-provider>
              <validation-provider rules="numeric|required" class="l-fromItem">
                <label for="recipient_tel" class="c-input__label">TELEPHONE</label>
                <input
                  type="tel"
                  id="recipient_tel"
                  name="tel"
                  class="form-control c-input"
                  placeholder="0912345678"
                  v-model="recipientData.tel"
                />
                <span class></span>
              </validation-provider>
              <validation-provider rules="email|required" class="l-fromItem">
                <label for="recipient_email" class="c-input__label">EMAIL</label>
                <input
                  type="email"
                  id="recipient_email"
                  name="email"
                  class="form-control c-input"
                  placeholder="Hex@Excellent.com"
                  v-model="recipientData.email"
                />
                <span class></span>
              </validation-provider>
              <validation-provider rules="required" class="l-fromItem">
                <label for="payment" class="c-input__label">PAYMENT</label>
                <select
                  name="payment"
                  id="payment"
                  class="form-control"
                  v-model="recipientData.payment"
                >
                  <option value="WebATM">網路銀行轉帳</option>
                  <option value="CVS">超商條碼繳費</option>
                  <option value="Credit">線上信用卡</option>
                  <option value="ApplePay">ApplePay</option>
                  <option value="GooglePay">GooglePay</option>
                </select>
              </validation-provider>
              <validation-provider rules="required" class="l-fromItem">
                <label for="recipient_address" class="c-input__label">ADDRESS</label>
                <input
                  type="text"
                  id="recipient_address"
                  name="address"
                  class="form-control c-input"
                  placeholder="loremloremloremloremlorem"
                  v-model="recipientData.address"
                />
                <span class></span>
              </validation-provider>
              <div class="l-fromItem">
                <p class="c-input__label">TOTAL</p>
                <p class="c-input">{{ totalPrice }}</p>
              </div>
              <div class="c-btn c-btn__order" @click="orderNow(recipientData)">ORDER NOW</div>
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
      this.$http
        .get(`https://course-ec-api.hexschool.io/api/${process.env.VUE_APP_UUID}/ec/shopping`)
        .then((res) => {
          this.cartData = res.data.data;
          this.isLoading = false;
        });
    },
    delProd(id) {
      this.isLoading = true;
      this.$http
        .delete(`https://course-ec-api.hexschool.io/api/${process.env.VUE_APP_UUID}/ec/shopping/${id}`)
        .then(() => {
          this.isLoading = false;
          this.getCartData();
        });
    },
    orderNow(recipientData) {
      this.isLoading = true;
      this.$http.post(`https://course-ec-api.hexschool.io/api/${process.env.VUE_APP_UUID}/ec/orders`, recipientData)
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
