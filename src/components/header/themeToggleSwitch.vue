<template>
  <div class="sx-theme">
    <button class="sx-theme-button" :class="{'sx-theme-button-active': themeMode === 'Dark'}" @click="setTheme">Темная
      тема
    </button>
    <button class="sx-theme-button" :class="{'sx-theme-button-active': themeMode === 'Light'}" @click="setTheme">Светлая
      тема
    </button>
  </div>
</template>

<script>
import {mapMutations} from "vuex";
import {mapState} from "vuex";

export default {
  name: "themeToggleSwitch",
  methods: {
    ...mapMutations(['setTheme'])
  },
  computed: {
    ...mapState(['themeMode'])
  }
}
</script>

<style lang="scss" scoped>
.sx-theme {
  margin:10px;
  &-button {
    font-size: 16px;
    cursor: pointer;
    margin: 0 10px;
    height: 40px;
    border-radius: 10px;
    border: none;
    background: wheat;

    &-active {
      pointer-events: none;
      box-shadow: 0 0 10px red;
    }
  }
}

@media screen and (max-width: 885px) {
  .sx-theme {
    display: none;
  }
}
</style>