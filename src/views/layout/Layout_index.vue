<template>
  <div>
    <!-- 首頁主視覺 開始 -->
    <header class="banner banner-lg banner--index ta-center color-basic-w">
      <h2 class="fz-m font-primary" data-aos="fade-up" data-aos-delay="300" data-aos-duration="600" data-aos-once: ture>
        BE HOT GUY<br>IN HOT DAY
      </h2>
      <p class="mt-1 font-secondary fz-xs" data-aos="fade-up" data-aos-delay="500" data-aos-duration="600" data-aos-once: ture>WaterSide life start from here</p>
    </header>
    <!-- 首頁主視覺 結束 -->

    <!-- customers opinions 開始 -->
    <section class="pt-lg pb-lg bgc-primary">
      <div class="container">
        <div class="swiper-container">
          <!-- Additional required wrapper -->
          <div class="swiper-wrapper">
            <!-- Slides -->
            <div class="swiper-slide d-flex">
              <div class="w-60p customer-slider-pic">
                <img src="~@/../static/images/customer_1.jpg">
              </div>
              <div class="w-40p ml-1 mr-1 color-basic-w font-secondary ta-justify">
                <p class="mb-tiny">The best swimwear ever wore. It’s so fit that let my body shape looked prettier and muscular. I met my wife Aunt on Baker Beach when I wore the PaliPail swimwear. She came to talk to me because she thought the pattern so cute, and so did the wearer.</p>
                <p class="color-secondary">Ming, TAIWAN</p>
              </div>
            </div>
            <div class="swiper-slide d-flex">
              <div class="w-60p customer-slider-pic">
                <img src="~@/../static/images/customer_2.jpg">
              </div>
              <div class="w-40p ml-1 mr-1 color-basic-w font-secondary ta-justify">
                <p class="mb-tiny" >Loving all the products of PaliPail! It has various styles that I can choose the best outfit to show how special am I. By the way, I bought a lots of clothes to my buddy, they loved so much.</p>
                <p class="color-secondary">Jay, TAIWAN</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- customers opinions 結束 -->

    <!-- 商品類別 開始 -->
    <router-link to="/palipali/products" class="links links-wh">
    <section>
      <div class="d-flex">
        <div class="w-50p">
          <div class="board">
            <p class="board-title">NEW ARRIVE</p>
            <img src="~@/../static/images/bg_block-new.jpg" />
          </div>
        </div>
        <div class="w-50p d-flex flex-wrap-w">
          <div class="board board--md">
            <p class="board-title">Shirt</p>
            <img src="~@/../static/images/bg_block-shirt.jpg" />
          </div>
          <div class="board board--md">
            <p class="board-title">T-shirt</p>
            <img src="~@/../static/images/bg_block-tshirt.jpg" />
          </div>
          <div class="board board--md">
            <p class="board-title">Pants</p>
            <img src="~@/../static/images/bg_block-pants.jpg" />
          </div>
          <div class="board board--md">
            <p class="board-title">Socks</p>
            <img src="~@/../static/images/bg_block-socks.jpg" />
          </div>
        </div>
      </div>
    </section>
    </router-link>
    <!-- 商品類別 結束 -->
    <!-- 商品類別 結束 -->

    <!-- 訂閱 Email 開始 -->
    <section class="pt-m pb-m bgc-secondary">
      <div class="container">
        <div class="d-flex flex-d-col">
          <label class="mb-1 fz-sm fw-bold" for="email">GET IN TOUCH !</label>
          <div class="d-flex jc-center ai-center">
            <input class="input sub-input" type="email" id="email" name="email" placeholder="Your email address">
            <button class="btn btn-dark">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
    <!-- 訂閱 Email 結束 -->
  </div>
</template>

<script>
import Swiper from 'swiper/bundle';
import AOS from 'aos';
/* global $ */
export default {
  created() {
    $(window).scrollTop(0);
  },
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 5000,
      },
      loop: true,
    });
    AOS.init();
  },
};
</script>
