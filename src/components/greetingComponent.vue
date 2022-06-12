<template>
  <div class="sx-greeting">
    <div class="sx-greeting-title">Приветстуем вас в нашем магазине техники мВидео. На нашем сайте самые лучшие товары,
      заходите и смотрите.
    </div>
    <div class="sx-greeting-button">
      <router-link class="sx-greeting-button-link" to="/catalog">В магазин</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "greetingComponent",
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.sx-loader {
  font-size: 24px;
}

.sx-greeting {
  height: 200px;
  box-shadow: 0 0 5px black;
  border-radius: 5px;
  font-size: 20px;
  width: 90%;
  margin: 0 auto;

  &-title {
    padding: 20px 10px;
  }

  &-button {
    padding: 20px 10px;

    &-link {
      color: rosybrown;
      text-decoration: none;
    }
  }
}
</style>