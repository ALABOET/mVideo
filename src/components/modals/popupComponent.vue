<template>
    <teleport to="#modal">
        <div class="sx-cart-modal">
            <div class="sx-cart-modal-content">
                <div class="sx-cart-modal-content-text">
                    {{text}}
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
    export default {
        name: "popupComponent",
        props: {
            text: {
                type: String,
                default: ''
            },
            position: {
                type: String,
                default: '',
            },
        },
    }
</script>

<style lang="scss">

    .sx-cart-modal {
        position: fixed;
        right: 10px;
        top: 80%;
        color: white;
        transition: opacity 1s;

        &-content {
            width: 300px;
            text-align: center;
            height: 70px;
            border-radius: 20px;
            background-color: rgba(242, 38, 19, .7);
            padding: 10px;
            margin: auto;

            &-text {
                font-size: 20px;
                text-align: center;
            }
        }
    }
    .fade-leave-to { //todo - вынести анимации в отдельный файл
        opacity: 0;
        transform: translateY(-50px);
    }
    .fade-enter-from {
        opacity: 0;
        transform: translateY(-50px);
    }
    .fade-enter-active {
        transition: all .5s ease;
    }
    .fade-leave-active {
        transition: all .5s ease;
    }
    .fade-enter-to {
        transform: translateY(0px);
        opacity: 1;
    }
    .zoom-leave-to {
        opacity: 0;
    }
    .zoom-enter-from {
        opacity: 0;
    }
    .zoom-enter-active {
        transition: all .5s ease;
    }
    .zoom-leave-active {
        transition: all .5s ease;
    }
    .zoom-enter-to {
    }


    .slide-leave-to {
        opacity: 0;
    }
    .slide-enter-from {
        opacity: 0;
    }
    .slide-enter-active {
        transition: all 2s ease;
    }
    .slide-leave-active {
        transition: all 2s ease;
    }
    .slide-enter-to {
        opacity: 1;
    }
</style>