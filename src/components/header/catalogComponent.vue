<template>
  <div class="sx-catalog">
    <div class="sx-catalog-button" @click="isCatalogShown = !isCatalogShown">
      <search-catalog-component/>
      <div class="sx-catalog-button-title">Каталог</div>
    </div>
    <transition name="fade">
      <catalog-menu-component v-if="isCatalogShown"/>
    </transition>
  </div>
</template>

<script>
import SearchCatalogComponent from "@/components/picscomps/searchCatalogLogo";
import CatalogMenuComponent from "@/components/catalogMenu/catalogMenuComponent";

export default {
  name: "catalogComponent",
  components: {CatalogMenuComponent, SearchCatalogComponent},
  data() {
    return{
      isCatalogShown: false
    }
  },
  methods: {
    test() {
      console.log('clicked')
    }
  }
}
</script>

<style lang="scss">
.sx-catalog {
  position: relative;
  background: red;
  color: #fff;
  width: 140px;
  margin: 0 20px 0 0;
  height: 48px;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:hover {
    background: firebrick;
    transition: background-color .6s;
    cursor: pointer;
  }

  &-button {
    display: flex;
    width: 100%;
    height: 100%;

    &-title {
      margin: 10px 0 5px 50px;
    }
  }
}
</style>