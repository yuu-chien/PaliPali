<template>
  <div>
    <!-- 首頁主視覺 開始 -->
    <header class="banner banner-lg banner--index">
        <h2 class="fz-m font-primary color-tertiary">BE HOT GUY<br>IN HOT DAY</h2>
        <p class="mt-1 font-secondary fz-xs color-basic-w">WaterSide life start from here</p>
    </header>
    <!-- 首頁主視覺 結束 -->

    <!-- customers opinions 開始 -->
    <section class="pt-lg pb-lg bgc-primary">
        <div class="container">
            <div class="customer-slider swiper-container">
                <div class="swiper-wrapper">
                    <div class="swiper-slide d-flex">
                        <div class="customer-slider-pic w-60p">
                            <img src="" alt="">
                        </div>
                        <div class="w-40p ml-1 color-basic-w font-secondary ta-justify">
                            <p class="mb-tiny">The best swimwear ever wore. It’s so fit that let my body shape looked prettier and muscular. I met my wife Aunt on Baker Beach when I wore the PaliPail swimwear. She came to talk to me because she thought the pattern so cute, and so did the wearer.</p>
                            <p class="color-secondary">Ming, TAIWAN</p>
                        </div>
                    </div>
                    <div class="swiper-slide d-flex">
                        <div class="customer-slider-pic w-60p">
                            <img src="" alt="">
                        </div>
                        <div class="w-40p ml-1 color-basic-w font-secondary ta-justify">
                            <p class="mb-tiny">The best swimwear ever wore. It’s so fit that let my body shape looked prettier and muscular. I met my wife Aunt on Baker Beach when I wore the PaliPail swimwear. She came to talk to me because she thought the pattern so cute, and so did the wearer.</p>
                            <p class="color-secondary">Ming, TAIWAN</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- customers opinions 結束 -->

    <!-- 商品類別 開始 -->
    <section>
        <div class="d-flex">
            <div class="w-50p">
                <div class="board">
                    <p class="board-title">NEW ARRIVE</p>
                    <img src="">
                </div>
            </div>
            <div class="w-50p d-flex flex-wrap-w">
                <div class="board board--md" v-for="(cate, index) in categories" :key="index">
                    <p class="board-title">{{ cate.cateName }}</p>
                    <img :src="cate.cateImg">
                </div>
            </div>
        </div>
    </section>
    <!-- 商品類別 結束 -->

    <!-- 訂閱 Email 開始 -->
    <section class="pt-xs pb-xs bgc-secondary">
        <div class="container">
            <label class="mb-tiny fz-sm fw-bold" for="email">GET IN TOUCH !</label>
            <div class="d-flex jc-center">
                <input class="input w-75p" type="email" id="email" name="email" placeholder="Your email address">
                <button class="btn btn--dark">Subscribe</button>
            </div>
        </div>
    </section>
    <!-- 訂閱 Email 結束 -->
  </div>
</template>

<script>
// import Swiper from 'swiper/bundle';

export default {
  data() {
    return {
      categories: [
        {
          cateName: 'Shirt',
          cateImg:
            '',
        },
        {
          cateName: 'Pants',
          cateImg:
            '',
        },
        {
          cateName: 'T-shirt',
          cateImg:
            '',
        },
        {
          cateName: 'Socks',
          cateImg:
            '',
        },
      ],
    };
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    // const swiper = new Swiper('.swiper-container', {});
  },
};
</script>
