<template>
  <div class="sx-order">
    <input class="sx-order-input" @click="wayClicked" type="radio" name="order" :value="radioValue">
    <div class="sx-order-type">{{ orderType }}</div>
    <div class="sx-order-description">{{ orderDescription }}</div>
  </div>
</template>

<script>
export default {
  name: "wayToOrderComponent",
  props: {
    orderType: {
      type: String,
      default: 'Способ'
    },
    orderDescription: {
      type: String,
      default: ''
    },
    radioValue: {
      type: String,
      default: ''
    },
  },
  data() {
    return {
      isOn: false,
    }
  },
  methods: {
    wayClicked() {
      this.isOn = !this.isOn
      this.$emit('onWayClicked', this.radioValue)
      console.log(this.radioValue)
    }
  }
}
</script>

<style lang="scss">
.sx-order {
  width: 260px;
  height: 170px;
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px 20px;

  &-input {
    &:hover {
      cursor: pointer;
    }
  }

  &-description {
    color: grey;
  }
}
</style>