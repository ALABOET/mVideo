<template>
    <div class="sx-slider">
        <div class="sx-slider-photos">
            <a href="https://www.mvideo.ru/" target="_blank"><img class="sx-slider-photos-photo" :src="image.img"></a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sliderShowComponent",
        props: ['photos', 'image', 'index'],

        data() {
            return {}
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .sx-slider {
        position: relative;

        &-photos {
            margin: 0 auto;
            width: 40%;

            &-photo {
                display: block;
                margin: 15px auto;
                width: 100%;
            }

            &-control-before, &-control-after {
                position: absolute;
                top: 50%;
            }

            &-control-before {
                left: 10%;
            }


            &-control-after {
                right: 10%;
            }
        }
    }

    @media screen and (max-width: 885px) {
        .sx-slider {
            display: none;
        }
    }
</style>