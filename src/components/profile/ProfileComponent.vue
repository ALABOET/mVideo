<template>
  <div class="sx-profile">
    <div class="sx-profile-header">
      Личный кабинет пользователя: <strong>{{ userName }}</strong> <br>
      Активная почта: <strong> {{ userMail }} </strong>
    </div>
    <div>Недавние покупки:</div>
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