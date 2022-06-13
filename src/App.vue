<template>
  <div class="sx-app"
       :class="{'sx-app-dark': isThemeDark, 'sx-app-blur': isLoginModalOpen}">
    <HeaderComponent/>
    <added-to-cart-component/>
    <div class="sx-app-content">
      <router-view/>
    </div>
    <login-component v-if="isLoginModalOpen"/>
  </div>
</template>

<script>
import HeaderComponent from "@/components/header/headerComponent";
import AddedToCartComponent from "@/components/modals/addedToCartComponent";
import {mapState, mapMutations} from "vuex";
import LoginComponent from "@/components/authorization/loginComponent";

export default {
  name: 'App',
  components: {
    LoginComponent,
    AddedToCartComponent,
    HeaderComponent
  },
  methods: {
    ...mapMutations(['setProductNumber'])
  },
  computed: {
    ...mapState(['themeMode', 'itemsInCart', 'userName', 'isLoginModalOpen']),
    isThemeDark() {
      return this.themeMode === 'Dark'
    }
  },
  mounted() {
    this.setProductNumber();
    if (this.userName) {
      return;
    }
    this.$router.push('/catalog')
  }
}
</script>

<style lang="scss">
.sx-app {
  a {
    text-decoration: none;
    color: black;

    &:hover {
      color: red;
    }
  }

  font-family: "sans-serif";
  font-size: 20px;

  &-dark {
    background: black;
    color: white;
  }

  &-blur {
  filter: blur(4px);
}

  &-content {
    width: 70%;
    margin: 50px auto;
  }
}

@media screen and (max-width: 650px) {
  .sx-app {

    &-content {
      width: 80%;
    }
  }
}
</style>
