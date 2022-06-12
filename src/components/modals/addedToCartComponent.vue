<template>
  <transition name="fade">
    <teleport to="#modal" v-if="isCartModalShown">
      <div class="sx-cart-modal" :class="{'sx-cart-modal-animated':isCartModalShown}">
        <div class="sx-cart-modal-content">
          <div class="sx-cart-modal-content-text">Товар успешно добавлен в корзину</div>
        </div>
      </div>
    </teleport>
  </transition>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "addedToCartComponent",
  components: {},
  computed: {
    ...mapState(['isCartModalShown'])
  }
}
</script>

<style lang="scss">
.fade-leave-to {
  opacity: 0;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.fade-enter-active {
  transition: all .5s ease;
}

.fade-leave-active {
  transition: all .5s ease;
}

.fade-enter-to {
  transform: translateY(0px);
  opacity: 1;
}

.fade-leave-to {
  transform: translateY(-50px);
}


.sx-cart-modal {
  position: fixed;
  right: 10px;
  top: 80%;
  color: white;
  transition: opacity 1s;

  &-content {
    width: 300px;
    text-align: center;
    height: 70px;
    border-radius: 20px;
    background: red;
    padding: 10px;

    &-text {
      font-size: 20px;
    }
  }
}
</style>