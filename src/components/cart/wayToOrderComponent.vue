<template>
  <div class="sx-order">
    <input class="sx-order-input" @click="$emit('onWayClicked', this.radioValue)" type="radio" name="order" :value="radioValue">
    <div class="sx-order-type">{{ orderType }}</div>
    <div class="sx-order-description">{{ orderDescription }}
      <div v-if="isSelectable">
        <select>
            <option v-for="elem in usedArray" :key="elem" :value="elem">{{ elem }}</option>
        </select>
      </div>
    </div>
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
    isSelectable: {
      type: Boolean,
      default: false,
    },
    usedArray: {
      type: Array,
      default: () => []
    },
  },
}
</script>

<style lang="scss">
.sx-order {
  width: 240px;
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