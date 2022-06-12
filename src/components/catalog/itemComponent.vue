<template>
  <div class="sx-item">
    <div class="sx-item-photo">
      <phone-logo/>
    </div>
    <div class="sx-item-description">{{ description }}</div>
    <div class="sx-item-rate">{{ rating }}★ {{ reviews }}</div>
    <div class="sx-item-price">{{ price }} рублей</div>
    <button @click="addItem">Добавить в корзину</button>
  </div>
</template>

<script>
import PhoneLogo from "@/components/picscomps/phoneLogo";
import {mapMutations, mapState, mapGetters} from "vuex";

export default {
  name: "itemComponent",
  components: {PhoneLogo},
  props: ['description', 'rating', 'reviews', 'price'],
  computed:{
    ...mapState(['addedProducts', 'itemsInCart']),
    ...mapGetters(['getProducts'])
  },
  methods: {
    ...mapMutations(['addItemToCart']),

    addItem() {
      let item = {description:this.description, rating: this.rating, reviews: this.reviews, price: this.price}
      this.addItemToCart(item);
      localStorage.setItem('productsNumber', this.itemsInCart)
    }
  },
}
</script>

<style lang="scss" scoped>
.sx-item {
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-description {
    font-weight: 700;
  }
}
</style>