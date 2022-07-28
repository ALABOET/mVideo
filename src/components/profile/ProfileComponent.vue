<template>
  <div class="sx-profile">
    <div class="sx-profile-header">
      <span style="font-size: 24px; color: grey">Личный кабинет</span><br>
      Имя пользователя: <strong>{{ userName }}</strong> <br>
      Активная почта: <strong> {{ userMail }} </strong>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "ProfileComponent",
  computed: {
    ...mapState(['userName', 'userMail'])
  }
}
</script>

<style scoped>
.sx-profile {

}

@media screen and (max-width: 650px) {
  .sx-profile{
    width: 70%;
  }
}

</style>