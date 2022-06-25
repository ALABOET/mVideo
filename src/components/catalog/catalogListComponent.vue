<template>
    <div v-if="!isLoaded">
        <loader-component/>
    </div>
    <slider-show-component v-if="isLoaded" :photos="carouselPhotos" :image="carouselPhotos[getRandomPic]"/>
    <div v-if="isLoaded" class="sx-catalog-list">
        <div class="sx-catalog-list-title">Самые просматриваемые</div>
        <div>
            <div class="sx-catalog-list-sorting" @click="openSortingWindow">Сортировка</div>
            <transition name="zoom">
                <div class="sx-catalog-list-sorted" v-if="isSortingShown">
                    <div class="sx-catalog-list-sorted-list" @click="sortByPrice">Сортировать по цене
                        {{!sortByMostExpensive?
                        '↑' :
                        '↓'}}
                    </div>
                    <div class="sx-catalog-list-sorted-list" @click="sortByRating">Сортировать по рейтингу
                        {{!sortByMostRating?
                        '↑' :
                        '↓'}}
                    </div>
                </div>
            </transition>
        </div>
        <div>
            <div v-if="!hasSortingStarted" class="sx-catalog-list-item">
                <div class="sx-catalog-list-item-elem" v-for="item in items" :key="item">
                    <item-component :name="item.name" :rating="item.rating" :price="item.price"
                                    :reviews="item.reviews" :id="item.id"/>
                </div>
            </div>
            <div v-if="hasSortingStarted && isSortedByPrice" class="sx-catalog-list-item">
                <div class="sx-catalog-list-item-elem" v-for="sortedItem in sortedByPriceItems" :key="sortedItem">
                    <item-component :name="sortedItem.name" :rating="sortedItem.rating"
                                    :price="sortedItem.price"
                                    :reviews="sortedItem.reviews" :id="sortedItem.id"/>
                </div>
            </div>
            <div v-if="hasSortingStarted && isSortedByRating" class="sx-catalog-list-item">
                <div class="sx-catalog-list-item-elem" v-for="sortedItem in sortedByRatingItems" :key="sortedItem">
                    <item-component :name="sortedItem.name" :rating="sortedItem.rating"
                                    :price="sortedItem.price"
                                    :reviews="sortedItem.reviews" :id="sortedItem.id"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import ItemComponent from "@/components/catalog/itemComponent";
    import LoaderComponent from "@/components/loaderComponent";
    import SliderShowComponent from "@/components/catalog/sliderShowComponent";

    export default {
        name: "catalogListComponent",
        components: { SliderShowComponent, LoaderComponent, ItemComponent},
        mounted() {
            setTimeout(() => this.isLoaded = true, 1000)
        },
        computed: {
            getRandomPic() {
                return Math.floor(Math.random() * this.carouselPhotos.length);
            }
        },
        data() {
            return {
                isLoaded: false,
                hasSortingStarted: false,
                sortByMostExpensive: false,
                sortByMostRating: false,
                isSortedByPrice: false,
                isSortedByRating: false,
                isSortingShown: false,
                items: [
                    {name: 'iPhone 13 Max 256GB', rating: '4.9', reviews: '22 отзыва', price: '79900', id: 1},
                    {name: 'iPhone 12 64GB', rating: '4.5', reviews: '7 отзывов', price: '45990', id: 2},
                    {name: 'iPhone 11 128GB', rating: '4.6', reviews: '4 отзыва', price: '25290', id: 3},
                    {name: 'Samsung A12 32GB', rating: '3.9', reviews: '4 отзыва', price: '13990', id: 4},
                    {name: 'Samsung A14 64GB', rating: '3.9', reviews: '1 отзыв', price: '33700', id: 5},
                    {name: 'Samsung Galaxy 2 8GB', rating: '2.5', reviews: '124 отзыв', price: '323990', id: 6},
                    {name: 'POCO 10X', rating: '4', reviews: '11 отзыв', price: '14990', id: 7},
                    {name: 'Realme 8', rating: '4.75', reviews: '3 отзыва', price: '14000', id: 8},
                    {name: 'Fly IQ 440 Energie', rating: '4.95', reviews: '1 отзыв', price: '8990', id: 9},
                    {name: 'Fly IQ 441 Radiant', rating: '5', reviews: '10 отзывов', price: '9990', id: 10},
                    {name: 'Honor 8X', rating: '4.3', reviews: '14 отзывов', price: '17890', id: 11}],
                sortedByPriceItems: [],
                sortedByRatingItems: [],
                carouselPhotos: [
                    {
                        id: 1,
                        name: 'img1',
                        img: 'https://toshop.ru/pictures/action_7521.jpg'
                    },
                    {
                        id: 2,
                        name: 'img2',
                        img: 'https://toshop.ru/pictures/action_5189.jpg'
                    },
                    {
                        id: 3,
                        name: 'img3',
                        img: 'https://katalognew.ru/images/catalogs/images/mvideo_akciya_prodolzhaem_zelenuyu_pyatnicu_00001.jpg'
                    },
                    {
                        id: 4,
                        name: 'img4',
                        img: 'https://media.proshoper.ru/catalogs/2017/04/25/33254/mvideo_sankt-peterburg-1.jpg'
                    },
                ]
            }
        },
        methods: {
            sortByPrice() {
                this.hasSortingStarted = true;
                this.isSortedByPrice = true;
                this.isSortedByRating = false;
                this.sortByMostExpensive = !this.sortByMostExpensive;
                if (this.sortByMostExpensive) {
                    this.sortedByPriceItems = this.items.sort((a, b) => {
                        return b.price - a.price;
                    });
                }
                if (!this.sortByMostExpensive) {
                    this.sortedByPriceItems = this.items.sort((a, b) => {
                        return a.price - b.price;
                    });
                }

            },
            sortByRating() {
                this.isSortedByRating = true;
                this.hasSortingStarted = true;
                this.isSortedByPrice = false;
                this.sortByMostRating = !this.sortByMostRating;
                if (this.sortByMostRating) {
                    this.sortedByRatingItems = this.items.sort((a, b) => {
                        return b.rating - a.rating;
                    });
                }
                if (!this.sortByMostRating) {
                    this.sortedByRatingItems = this.items.sort((a, b) => {
                        return a.rating - b.rating;
                    });
                }
            },
            openSortingWindow() {
                this.isSortingShown = !this.isSortingShown;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sx-catalog-list {
        box-shadow: 0 0 7px black;
        overflow: auto;
        padding: 10px;
        border-radius: 5px;
        font-size: 24px;
        font-weight: 700;
        transition: all .3s;

        &:hover {
            box-shadow: 0 0 10px deepskyblue;
        }

        &-title {
            margin-bottom: 20px;
        }

        &-sorting {
            cursor: pointer;
        }

        &-sorted {
            padding: 15px 5px;
            box-shadow: 0 0 5px black;
            border-radius: 4px;
            width: 250px;

            &-list {
                font-size: 20px;
                height: 30px;

                &:hover {
                    cursor: pointer;
                }
            }
        }

        &-item {
            display: flex;
            flex-wrap: wrap;
            flex: 1;

            &-elem {
                flex-basis: 50%;
            }
        }
    }

    @media screen and(max-width: 650px) {
        .sx-catalog-list {
            width: 90%;
            margin: 0 auto;

            &-item {
                &-elem {
                    flex-basis: 100%;
                }
            }
        }
    }
</style>