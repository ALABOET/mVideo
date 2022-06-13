<template>
    <div class="sx-favourite">
        <div>Избранное</div>
        <div v-if="favouriteProducts.length === 0">Пока пусто, добавьте товары в категорию Избранное в каталоге</div>
        <div v-else>
            <div v-for="elem in favouriteProducts" :key="elem">
                {{elem.description}}
            </div>
            <button @click="itemsAddedToCart">Добавить товар{{favouriteProducts.length === 1? '' : 'ы'}} в корзину
            </button>
            <button @click="clearItemsInFavourite">Очистить Избранное</button>
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
            ...mapMutations(['clearItemsInFavourite']),
            itemsAddedToCart() {
                console.log('added')
            }
        }
    }
</script>

<style scoped>

</style>