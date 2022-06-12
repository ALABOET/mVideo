<template>
  <div class="sx-auth">
    <registration-component/>
  </div>
</template>

<script>
import registrationComponent from "@/components/authorization/registrationComponent";

export default {
  name: "authorizationComponent",
  components: {registrationComponent},
  data() {
    return {}
  },
  methods: {
    checkIfPasswordsMatch() {
    }
  },
}
</script>

<style scoped lang="scss">
.sx-auth {
  box-shadow: 0 0 10px black;
  padding: 10px;
  border-radius: 10px;
}

@media screen and (max-width: 650px) {
  .sx-auth {
    width: 80%;
    margin: 0 auto;
  }
}
</style>