<template>
    <div class="sx-greeting">
        <div class="sx-greeting-title">Приветстуем вас в нашем магазине техники мВидео. На нашем сайте самые лучшие
            товары,
            заходите и смотрите.
        </div>
        <div class="sx-greeting-button">
            <router-link class="sx-greeting-button-link" to="/catalog">Перейти в каталог</router-link>
        </div>
        <div class="sx-greeting-img" style="text-align: center">
            <transition name="slide">
                <div v-if="firstPicShown" class="sx-greeting-img-div"><img
                        class="sx-greeting-img-photo"
                        src="../pics/mvideo1.png"></div>
            </transition>
            <transition name="slide">
                <div v-if="!firstPicShown && secondPicShown" class="sx-greeting-img-div"><img class="sx-greeting-img-photo"
                                                                           src="../pics/mvideo2.jpg">
                </div>
            </transition>
            <transition name="slide">
                <div v-if="!firstPicShown && !secondPicShown" class="sx-greeting-img-div"><img
                        class="sx-greeting-img-photo"
                        src="../pics/mvideo3.jpg"></div>
            </transition>
        </div>
    </div>
</template>

<script>
    let pictureInterval = null;
    export default {
        name: "greetingComponent",
        data() {
            return {
                firstPicShown: true,
                secondPicShown: false, //ужасно, знаю, нужно разобраться с индексацией и require path src из массива
            }
        },
        methods: {
            setPictureInterval() {
                pictureInterval = setInterval(() => {
                    if (this.firstPicShown) {
                        this.secondPicShown = true;
                        this.firstPicShown = false;
                        return;
                    }
                    if (this.secondPicShown) {
                        this.secondPicShown = false;
                        return;
                    }
                    if (!this.firstPicShown && !this.secondPicShown) {
                        this.firstPicShown = true;
                        return;
                    }
                }, 5000)
            }
        },
        mounted() {
            this.setPictureInterval();
        },
        unmounted() {
            clearInterval(pictureInterval);
            console.log('destroyed')
        },
    }
</script>

<style lang="scss" scoped>
    .sx-loader {
        font-size: 24px;
    }

    .sx-greeting {
        box-shadow: 0 0 5px black;
        border-radius: 5px;
        font-size: 20px;
        width: 90%;
        margin: 0 auto;

        &-img {
            height: 430px;
            position: relative;

            &-photo {
                width: 600px;
                height: 400px;
                border-radius: 8px;
                box-shadow: 0px 0px 10px black;
            }

            &-div {
                position: absolute;
                left: 0;
                right: 0;
            }
        }

        &-title {
            padding: 20px 10px;
        }

        &-button {
            padding: 20px 10px;

            &-link {
                color: rosybrown;
                text-decoration: none;
            }
        }
    }

    @media screen and (max-width: 1000px) {
        .sx-greeting-img-photo {
            display: none;
        }
    }
</style>