<template>
    <div class="sx-order">
        <input class="sx-order-input" @click="$emit('onWayClicked', this.radioValue)" type="radio" name="order"
               :value="radioValue">
        <div class="sx-order-type">{{ orderType }}</div>
        <div class="sx-order-description">{{ orderDescription }}
            <div v-if="isSelectable">
                <select v-model="selectedBank">
                    <option v-for="(elem, index) in usedArray" :key="elem" :value="elem">{{++index}}. {{ elem }}</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapState} from 'vuex';

    export default {
        name: "wayToOrderComponent",
        data() {
            return {
                selectedBank: this.usedArray[0]
            }
        },
        updated() {
            this.changeActiveBank(this.selectedBank)
        },
        computed: {
            ...mapState(['chosenBank']),
        },
        methods: {
            ...mapMutations(['changeActiveBank']),
        },
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