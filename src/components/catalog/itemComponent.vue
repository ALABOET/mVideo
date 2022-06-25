<template>
    <div class="sx-item">
        <div class="sx-item-content" @click="showPopup">
            <div class="sx-item-content-photo">
                <phone-logo/>
            </div>
            <div class="sx-item-content-description">{{ name }} {{isPopupShown? '↑' : '↓'}}
            </div>
            <transition name="zoom">
                <div class="sx-item-content-popup" v-if="isPopupShown">
                    <div class="sx-item-content-popup-rate">{{ rating }}★ {{ reviews }}</div>
                    <div class="sx-item-content-popup-price">{{ price }} рублей</div>
                </div>
            </transition>
        </div>
        <button @click="addClicked">Добавить в корзину</button>
        <div class="sx-item-favourite" @click="favouriteClicked">❤</div>
    </div>
</template>

<script>
    import PhoneLogo from "@/components/picscomps/phoneLogo";
    import {mapMutations, mapState, mapGetters} from "vuex";

    export default {
        name: "itemComponent",
        components: {PhoneLogo},
        props: {
            name: {
                type: String,
                default: ''
            },
            rating: {
                type: String,
                default: ''
            },
            reviews: {
                type: String,
                default: ''
            },
            price: {
                type: String,
                default: ''
            },
            id: {
                type: Number,
                default: null
            }
        },
        data() {
            return {
                item: {
                    name: this.name,
                    rating: this.rating,
                    reviews: this.reviews,
                    price: this.price,
                },
                isPopupShown: false,
            }
        },
        computed: {
            ...mapState(['addedProducts', 'itemsInCart', 'favouriteProducts']),
            ...mapGetters(['getProducts'])
        },
        methods: {
            ...mapMutations(['addItemToCart', 'addItemToFavourite']),

            addClicked() {
                this.addItemToCart(this.item);
                localStorage.setItem('productsNumber', this.itemsInCart)
            },
            favouriteClicked() {
                this.addItemToFavourite(this.item)
            },
            showPopup() {
                this.isPopupShown = !this.isPopupShown;
                console.log(this.isPopupShown)
            }
        },
    }
</script>

<style lang="scss">
    .sx-item {
        font-weight: 400;
        display: flex;
        flex-direction: column;
        align-items: center;
        cursor: pointer;
        width: 50%;
        margin: 0 auto;

        &-content {
            font-weight: 400;
            display: flex;
            flex-direction: column;
            align-items: center;
            cursor: pointer;

            &-description {
                font-weight: 700;
            }

            &-favourite:hover {
                cursor: pointer;
            }
        }
    }
</style>