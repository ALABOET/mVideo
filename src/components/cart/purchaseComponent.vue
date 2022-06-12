<template>
  <div class="sx-purchase">
    <span>Товары куплены, поздравляем!</span>
    <router-link to="/catalog">Вернуться в магазин</router-link>
  </div>
</template>

<script>
export default {
  name: "purchaseComponent"
}
</script>

<style lang="scss" scoped>
.sx-purchase {
  a {
    text-decoration: none;
    color: red;
  }
}
</style>