<template>
  <div class="sx-search">
    <textarea class="sx-search-input" placeholder="Искать товары с рассрочкой"></textarea>
    <input-search-logo class="sx-search-logo"/>
  </div>
</template>

<script>
import InputSearchLogo from "@/components/picscomps/inputSearchLogo";

export default {
  name: "searchComponent",
  components: {InputSearchLogo}
}
</script>

<style lang="scss" scoped>
.sx-search {
  height: 48px;
  position: relative;

  &-input {
    height: inherit;
    resize: none;
    font-size: 16px;
  }

  &-logo {
    position: absolute;
    top: 5px;
    right: 0;
  }
}

@media screen and (max-width: 650px) {
  .sx-search {
    display: none;
  }
}
</style>