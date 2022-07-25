<template>
  <div class="sx-item">
    <div class="sx-item-content" @click="showPopup">
      <div class="sx-item-content-photo">
        <img v-if="name.includes(['iPhone'])" style="width: 100px" src="../../pics/iphone_12_PNG36.png"/>
        <img v-if="name.includes(['Samsung'])" style="width: 100px" src="../../pics/samsung.png"/>
        <img v-if="name.includes(['POCO'])" style="width: 100px" src="../../pics/poco.png"/>
        <img v-if="name.includes(['Fly'])" style="width: 100px" src="../../pics/fly.jpeg"/>
        <img v-if="name.includes(['Honor'])" style="width: 100px" src="../../pics/honor.jpg"/>
        <!--плохо, знаю, но не могу сделать через пропсы имаджи -->
      </div>
      <div class="sx-item-content-description">{{ name }} {{ isPopupShown ? '↑' : '↓' }}
      </div>
      <transition name="zoom">
        <div class="sx-item-content-popup" v-if="isPopupShown || isDataShown">
          <div class="sx-item-content-popup-rate">{{ rating }}★ {{ reviews }}</div>
          <div class="sx-item-content-popup-price">{{ price }} рублей</div>
        </div>
      </transition>
    </div>
    <button @click="addClicked">Добавить в корзину</button>
    <div class="sx-item-favourite" @click="favouriteClicked">❤</div>
  </div>
</template>

<script>
import {mapMutations, mapState, mapGetters} from "vuex";

export default {
  name: "itemComponent",
  props: {
    name: {
      type: String,
      default: ''
    },
    rating: {
      type: String,
      default: ''
    },
    reviews: {
      type: String,
      default: ''
    },
    price: {
      type: String,
      default: ''
    },
    id: {
      type: Number,
      default: null
    },
    picPath: {
      type: String,
      default: ''
    },
    isDataShown: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      item: {
        name: this.name,
        rating: this.rating,
        reviews: this.reviews,
        price: this.price,
      },
      isPopupShown: false,
    }
  },
  computed: {
    ...mapState(['addedProducts', 'itemsInCart', 'favouriteProducts']),
    ...mapGetters(['getProducts'])
  },
  methods: {
    ...mapMutations(['addItemToCart', 'addItemToFavourite']),

    addClicked() {
      this.addItemToCart(this.item);
      localStorage.setItem('productsNumber', this.itemsInCart)
    },
    favouriteClicked() {
      this.addItemToFavourite(this.item)
    },
    showPopup() {
      this.isPopupShown = !this.isPopupShown;
      this.$emit('triggerPopup');
    }
  },
}
</script>

<style lang="scss">
.sx-item {
  font-weight: 400;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  width: 50%;
  margin: 0 auto;
  &-favourite {
    color: red;

    &:hover {
      cursor: pointer;
    }
  }

  &-content {
    font-weight: 400;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    &-photo {
    }

    &-description {
      font-weight: 700;
    }
  }
}
</style>