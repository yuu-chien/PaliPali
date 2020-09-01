<template>
    <div class="d-flex">
        <form class="w-60p">
            <div class="d-flex ai-center">
                <label for="product-title" class="input input-edit-label">Title</label>
                <input type="text" id="product-title" class="input input-edit" placeholder="title" v-model="this.prodData.title">
            </div>
            <div class="d-flex ai-center">
                <label for="product-category" class="input input-edit-label">Category</label>
                <select name="product-category" id="product-category" v-model="this.prodData.category">
                    <option value="Swimwear">Swimwear</option>
                    <option value="T-shirt">T-shirt</option>
                    <option value="Shirt">Shirt</option>
                    <option value="Pants">Pants</option>
                    <option value="Socks">Socks</option>
                </select>
            </div>
            <div class="d-flex ai-center">
                <label for="product-enabled" class="input input-edit-label">Enabled</label>
                <select name="product-enabled"  id="product-enabled" v-model="this.prodData.enabled">
                    <option value=true>Enabled</option>
                    <option value=false>Not enabled</option>
                </select>
            </div>
            <div class="d-flex ai-center">
                <label for="product-origin_price" class="input input-edit-label">Origin price</label>
                <input type="number" id="product-origin_price" class="input input-edit" v-model="this.prodData.origin_price">
            </div>
            <div class="d-flex ai-center">
                <label for="product-price" class="input input-edit-label">Price</label>
                <input type="number" id="product-price" class="input input-edit" v-model="this.prodData.price">
            </div>
            <div class="d-flex ai-center">
                <label for="product-content" class="input input-edit-label">Content</label>
                <input type="text" id="product-content" class="input input-edit" v-model="this.prodData.content">
            </div>
            <div class="d-flex ai-center">
                <label for="product-unit" class="input input-edit-label">Unit</label>
                <input type="text" id="product-unit" class="input input-edit" v-model="this.prodData.unit">
            </div>
            <div class="d-flex ai-start">
                <label for="product-description" class="input input-edit-label">Description</label>
                <textarea id="product-description" class="input input-edit" style="resize:none; height: 160px" v-model="this.prodData.description"></textarea>
            </div>
             <div class="d-flex ai-center">
                <label for="product-imageUrl" class="input input-edit-label">Image</label>
                <input type="text" id="product-imageUrl" class="input input-edit" v-model="this.prodData.imageUrl">
            </div>
            <div class="d-flex mt-m">
                <button class="btn btn-pri mr-1">Cancel</button>
                <button class="btn btn-dark">Finish</button>
            </div>
        </form>
        <div class="backend-preview-pic w-40p">
            <img :src="this.prodData.imageUrl">
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      fullPage: true,
      prodData: {
        title: '',
        category: '',
        enabled: '',
        origin_price: '',
        price: '',
        content: '',
        unit: '',
        description: '',
      },
      temporaryData: {},
    };
  },
  methods: {
    showData() {
    },
  },
  created() {
    this.isLoading = true;
    const { id } = this.$route.params;
    this.$http.get(`${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/admin/ec/product/${id}`)
      .then((res) => {
        this.prodData = res.data.data;
        this.isLoading = false;
      });
  },
};
</script>
