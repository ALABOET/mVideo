<template>
  <div class="sx-menu">
    <div class="sx-menu-icon" @click="menuToggled =! menuToggled">
      <burger-menu-logo v-if="!menuToggled"/>
      <burger-menu-close-component v-if="menuToggled"/>
    </div>
    <div class="sx-menu-mobile" v-if="menuToggled">
      <ul class="sx-menu-mobile-list" @click="menuToggled = !menuToggled">
        <li @click="$router.push('/catalog')">Каталог</li>
        <li @click="checkIfProfileAccessible">{{isLoggedIn? userName : 'Личный кабинет'}}</li>
        <li>Избранное</li>
        <li @click="toggleLoginModal" v-if="this.$route.path !== '/login'">{{ isLoggedIn ? 'Выйти' : 'Авторизация' }}
        </li>
        <li v-if="this.$route.path === '/cart'">
          <router-link to="/catalog">Каталог</router-link>
        </li>
        <li v-else>
          <router-link to="/cart">Корзина</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BurgerMenuLogo from "@/components/picscomps/burgerMenuLogo";
import BurgerMenuCloseComponent from "@/components/picscomps/burgerMenuCloseComponent";

import {mapState, mapMutations} from "vuex";

export default {
  name: "menuMobileComponent",
  components: {BurgerMenuCloseComponent, BurgerMenuLogo},
  data() {
    return {
      menuToggled: false,
    }
  },
  computed: {
    ...mapState(['isLoggedIn', 'userName', 'isLoggedIn'])
  },
  methods: {
    ...mapMutations(['toggleLoggedState', 'toggleLoginModal']),
    checkIfProfileAccessible() {
      if(this.isLoggedIn) this.$router.push('/profile');
      if(!this.isLoggedIn) this.toggleLoginModal()
    }
  }
}
</script>

<style lang="scss" scoped>
.sx-menu {
  position: relative;
  display: none;

  &-icon {
    cursor: pointer;
    margin-top: 7px;
  }

  &-mobile {
    position: absolute;
    right: 0;
    background: white;
    box-shadow: 0 0 5px black;
    border-radius: 10px;
    z-index: 10;

    &-list {
      list-style: none;
      padding: 10px;
      margin: 0;

      li {
        cursor: pointer;
        margin: 5px 0;
      }
    }
  }
}

@media screen and (max-width: 650px) {
  .sx-menu {
    display: block;
  }
}
</style>