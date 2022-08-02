<template>
    <div class="sx-favourite">
        <div class="sx-favourite-title">Избранное</div>
        <div v-if="favouriteProducts.length === 0" class="sx-favourite-warning">Пока пусто, добавьте товары в категорию
            Избранное в каталоге
        </div>
        <div v-else class="sx-favourite-list">
            <div v-for="(elem, index) in favouriteProducts" class="sx-favourite-list-item" :key="elem">
                {{elem.name}} <span class="sx-favourite-list-item-delete" @click="deleteElement(index)">удалить</span>
            </div>
            <div class="sx-favourite-list-buttons">
                <button @click="moveItemFromFavouriteToCart">Добавить товар{{favouriteProducts.length === 1? '' : 'ы'}}
                    в
                    корзину
                </button>
                <button @click="clearItemsInFavourite">Очистить Избранное</button>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from "vuex"

    export default {
        name: "favouriteComponent",
        computed: {
            ...mapState(['favouriteProducts'])
        },
        methods: {
            ...mapMutations(['clearItemsInFavourite', 'moveItemFromFavouriteToCart', 'deleteFavouriteElement']),
            deleteElement(item) {
                this.deleteFavouriteElement(item)
            },
        }
    }
</script>

<style lang="scss">
    .sx-favourite {
        &-list {
            &-buttons {
                display: flex;
                gap: 15px;
            }

            &-item {
                &-delete {
                    &:hover {
                        cursor: pointer;
                        color: red;
                    }
                }
            }
        }
    }

</style>