<template>
    <div class="sx-cart-component">
        <div v-if="addedProducts.length > 0" class="sx-cart-component-full">
            <div class="sx-cart-component-full-title">
                <span>Товары в корзине: {{ addedProducts.length }}</span>
                <br/>
                <router-link to="/catalog">
                    В каталог
                </router-link>
                <div class="sx-cart-component-full-title-items" v-for="(elem,index) in addedProducts" :key="elem">
                    {{ elem.name }} <span @click="deleteItem(index)"
                                          class="sx-cart-component-full-title-items-delete">X</span>
                </div>
                <button @click="clearItemsInCart">Очистить корзину</button>
                <button @click="purchase">Купить</button>
                <div class="sx-cart-component-full-title-warning" v-if="isWarningShown">Для покупки необходимо авторизоваться</div>
            </div>
        </div>


        <div v-else class="sx-cart-component-empty">Что-то тут пусто, вернитесь в
            <router-link to="/catalog">
                магазин
            </router-link>
            и наполните корзину
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "cartComponent",
        computed: {
            ...mapState(['itemsInCart', 'addedProducts', 'isLoggedIn']),
        },
        data() {
            return {
                isWarningShown: false,
            }
        },
        methods: {
            ...mapMutations(['deleteElement', 'completePurchase', 'clearItemsInCart']),
            deleteItem(item) {
                this.deleteElement(item)
            },
            purchase() {
                if (this.isLoggedIn) {
                    this.completePurchase();
                    this.$router.push('/catalog')
                } else {
                    this.isWarningShown = true;
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sx-cart-component {
        font-size: 20px;
        width: 600px;

        &-empty, &-full {
            a {
                text-decoration: none;
                color: red;
            }

            &-title {
                box-shadow: 0 0 10px black;
                border-radius: 5px;
                padding: 10px;

                &-items {
                    position: relative;
                    margin: 15px 0;

                    &-delete {
                        position: absolute;
                        left: 250px;

                        &:hover {
                            cursor: pointer;
                        }
                    }
                }

                &-warning {
                    color: red;
                }
            }
        }
    }

    @media screen and (max-width: 650px) {
        .sx-cart-component {
            width: 90%;
        }
    }
</style>