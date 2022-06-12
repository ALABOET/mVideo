<template>
  <div v-if="!isLoaded">
    <loader-component/>
  </div>
    <slider-show-component v-if="isLoaded" :photos="carouselPhotos" :image="carouselPhotos"/>
  <div v-if="isLoaded" class="sx-catalog-list">
    <div class="sx-catalog-list-title">Самые просматриваемые</div>
    <div class="sx-catalog-list-item">
      <div class="sx-catalog-list-item-elem" v-for="item in items" :key="item">
        <item-component :description="item.description" :rating="item.rating" :price="item.price"
                        :reviews="item.reviews"/>
      </div>
    </div>
  </div>
</template>

<script>

import ItemComponent from "@/components/catalog/itemComponent";
import LoaderComponent from "@/components/loaderComponent";
import SliderShowComponent from "@/components/catalog/sliderShowComponent";

export default {
  name: "catalogListComponent",
  components: {SliderShowComponent, LoaderComponent, ItemComponent},
  mounted() {
    setTimeout(() => this.isLoaded = true, 1000)
  },
  data() {
    return {
      isLoaded: false,
      items: [
        {description: 'iPhone 13 Max 256GB onix', rating: '5', 'reviews': '22 отзыва', 'price': '7990'},
        {description: 'iPhone 12 64GB black', rating: '4,5', 'reviews': '7 отзывов', 'price': '45990'},
        {description: 'iPhone 11 128GB red', rating: '4,6', 'reviews': '4 отзыва', 'price': '25290'},
        {description: 'Samsung A12 32GB black', rating: '3,9', 'reviews': '4 отзыва', 'price': '13990'},
        {description: 'Samsung A14 64GB white', rating: '3,9', 'reviews': '1 отзыв', 'price': '33700'},
        {description: 'Samsung Galaxy 2 8GB black', rating: '2,5', 'reviews': '124 отзыв', 'price': '323990'},
        {description: 'POCO 10X', rating: '4', 'reviews': '11 отзыв', 'price': '14990'},
        {description: 'Realme 8', rating: '4.9', 'reviews': '3 отзыва', 'price': '14000'},
        {description: 'Fly IQ 440 Energie', rating: '5', 'reviews': '1 отзыв', 'price': '8990'},
        {description: 'Fly IQ 441 Radiant', rating: '5', 'reviews': '10 отзывов', 'price': '9990'},
        {description: 'Honor 8X', rating: '4,3', 'reviews': '14 отзывов', 'price': '17890'}],
      carouselPhotos: [
        {
          id: 1,
          name: 'img1',
          img: 'https://toshop.ru/pictures/action_7521.jpg'
        },
        {
          id: 2,
          name: 'img2',
          img: 'https://toshop.ru/pictures/action_5189.jpg'
        },
        {
          id: 3,
          name: 'img3',
          img: 'https://katalognew.ru/images/catalogs/images/mvideo_akciya_prodolzhaem_zelenuyu_pyatnicu_00001.jpg'
        },
        {
          id: 4,
          name: 'img4',
          img: 'https://media.proshoper.ru/catalogs/2017/04/25/33254/mvideo_sankt-peterburg-1.jpg'
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
.sx-catalog-list {
  box-shadow: 0 0 7px black;
  overflow: auto;
  padding: 10px;
  border-radius: 5px;
  font-size: 24px;
  font-weight: 700;
  transition: all .3s;

  &:hover {
    box-shadow: 0 0 10px deepskyblue;
  }

  &-title {
    margin-bottom: 20px;
  }

  &-item {
    display: flex;
    flex-wrap: wrap;
    flex: 1;

    &-elem {
      flex-basis: 50%;
    }
  }
}

@media screen and(max-width: 650px) {
  .sx-catalog-list {
    width: 90%;
    margin: 0 auto;

    &-item {
      &-elem {
        flex-basis: 100%;
      }
    }
  }
}
</style>