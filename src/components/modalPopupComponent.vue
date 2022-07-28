<template>
  <div class="sx-modalpopup">
    <popup-component v-if="isCartModalShown" text="Товар успешно добавлен в корзину"/>
    <popup-component v-if="isSuccessfullyBought" text="Покупка успешно совершена"/>
    <popup-component v-if="isFavouriteModalShown" text="Товар успешно добавлен в Избранное"/>
    <login-component v-if="isLoginModalOpen"/>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";
import PopupComponent from "@/components/modals/popupComponent";
import LoginComponent from "@/components/authorization/loginComponent";

export default {
  name: "modalPopupComponent",
  components: {LoginComponent, PopupComponent},
  computed: {
    ...mapState(['isCartModalShown', 'isProductBuyModalShown', 'isSuccessfullyBought', 'isFavouriteModalShown', 'isLoginModalOpen', 'userName', 'isLoggedIn']),
  },
  methods: {
    ...mapMutations(['setUserName', 'toggleLoggedState', 'toggleLoginModal', 'setUserMail']),
  },
}
</script>