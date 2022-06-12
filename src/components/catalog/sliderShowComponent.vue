<template>
  <div class="sx-slider">
    <div v-for="(photo, index) in photos" :key="photo.id" class="sx-slider-photos">
      <img class="sx-slider-photos-photo" :src="image[index].img">
    </div>
  </div>
</template>

<script>
export default {
  name: "sliderShowComponent",
  props: ['photos', 'image'],

  data() {
    return {
      testing() {
      }
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.sx-slider {
  position: relative;

  &-photos {

    &-photo {
      display: block;
      margin: 20px auto;
      width:55%;
    }

    &-control-before, &-control-after {
      position: absolute;
      top: 50%;
    }

    &-control-before {
      left: 10%;
    }


    &-control-after {
      right: 10%;
    }


  }
}
</style>