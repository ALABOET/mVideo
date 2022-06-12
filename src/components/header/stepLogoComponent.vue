<template>
  <div class="sx-step">
    <component @test="$emit('cartWasClicked')" class="sx-step-logo" :is="currentLogo"/>
    <div class="sx-step-title"
         :class="{'dark':themeMode === 'Dark' }">{{ stepTitle }}
    </div>
  </div>
</template>

<script>
import ProfileLogo from "@/components/picscomps/profileLogo";
import {mapState, mapMutations} from "vuex";

export default {
  name: "stepLogoComponent",
  components: {ProfileLogo},
  props: ['currentLogo', 'stepTitle'],
  computed: {
    ...mapState(['isLoggedIn', 'themeMode'])
  },
  methods: {
    ...mapMutations(['toggleLoginModal']),
  }
}
</script>

<style lang="scss" scoped>
.sx-step {
  width: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &-logo {
    &:hover {
      cursor: pointer;
    }
  }

  &-title {
  }

  .dark {
    color: black;
  }
}
</style>