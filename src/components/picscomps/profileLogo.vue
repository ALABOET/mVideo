<template>
  <div class="sx-profilelogo" @click="goToProfile">
    <svg id="Layer_1" style="enable-background:new 0 0 128 128; width: 40px; height: 40px"
         version="1.1" viewBox="0 0 128 128" xml:space="preserve"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g>
    <path d="M30,49c0,18.7,15.3,34,34,34s34-15.3,34-34S82.7,15,64,15S30,30.3,30,49z
       M90,49c0,14.3-11.7,26-26,26S38,63.3,38,49
        s11.7-26,26-26S90,34.7,90,49z"/>
    <path
        d="M24.4,119.4C35,108.8,49,103,64,103s29,5.8,39.6,16.4l5.7-5.7C97.2,101.7,81.1,95,64,95s-33.2,6.7-45.3,18.7L24.4,119.4z"/></g>
  </svg>
    <div class="sx-profilelogo-name">
      {{ isLoggedIn ? userName : '' }}
    </div>
  </div>
</template>


<script>
import {mapState, mapMutations} from "vuex";

export default {
  name: "profileLogo",
  computed: {
    ...mapState(['userName', 'isLoggedIn'])
  },
  methods: {
    ...mapMutations(['toggleLoginModal']),
    goToProfile() {
      if (this.isLoggedIn) this.$router.push('/profile');
      if (!this.isLoggedIn) this.toggleLoginModal();
    }
  }
}
</script>

<style scoped lang="scss">
.sx-profilelogo {
  text-align: center;

  #Layer_1 {
    &:hover {
      cursor: pointer;
    }
  }
}
</style>