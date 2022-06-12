<template>
  <div class="sx-catalog-component" @click="setMouseOver">
    <ul class="sx-catalog-component-list">
      <div class="sx-catalog-component-list-tags" v-for="(tag, index) in tags" :key="tag">
        <ul>{{ index += 1 }}. {{ tag }}</ul>
        <component v-if="blockOpen" :is="tag.comp"/>
      </div>
    </ul>
  </div>
</template>

<script>
import SalesComponent from "@/components/catalogMenuParts/salesComponent";
import GadgetsComponent from "@/components/catalogMenuParts/gadgetsComponent";

export default {
  name: "catalogMenuComponent",
  components: {},
  data() {
    return {
      blockOpen: false,
      actualTags: [{name: 'Акции, скидки и распродажи', comp: SalesComponent}, {
        name: 'Смартфоны и гаджеты',
        comp: GadgetsComponent
      }],
      tags: ['Акции, скидки и распродажи', 'Смартфоны и гаджеты', 'Умный дом', 'Игры и софт', 'Хобби, спорт и развлечения', 'Фото и видео', 'Аксессуары', 'Premium']
    }
  },
  methods: {
    setMouseOver() {
      console.log('clicked')
    }
  }
}
</script>

<style lang="scss" scoped>
.sx-catalog-component {
  font-size: 20px;
  background: gainsboro;
  position: absolute;
  color: black;
  width: 500px;
  height: 400px;
  z-index: 1;
  left: 0;
  top: 90px;
  border-radius: 5px;
  overflow: auto;

  &-list {
    padding: 0;

    &-tags {
      margin: 25px 0;

      &:hover {
        cursor: pointer;
        color: red;
      }
    }

    li {
      margin: 25px 0;
    }
  }
}

@media screen and (max-width: 650px) {
  .sx-catalog-component {
    width: 190px;

    &-list {
      &-tags {
        margin: 25px -25px;
        width: 200px;
      }
    }
  }
}
</style>