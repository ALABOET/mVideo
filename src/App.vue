<template>
    <div class="sx-app"
         :class="{'sx-app-dark': isThemeDark, 'sx-app-blur': isLoginModalOpen}">
        <HeaderComponent/>
        <div class="sx-app-content">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import HeaderComponent from "@/components/header/headerComponent";
    import {mapState, mapMutations} from "vuex";

    export default {
        name: 'App',
        components: {

            HeaderComponent
        },
        methods: {
            ...mapMutations(['setProductNumber'])
        },
        computed: {
            ...mapState(['themeMode', 'itemsInCart', 'userName', 'isLoginModalOpen', 'isCartModalShown']),
            isThemeDark() {
                return this.themeMode === 'Dark'
            }
        },
        mounted() {
            this.setProductNumber();
            if (this.userName) {
                return;
            }
            this.$router.push('/')
        }
    }
</script>

<style lang="scss">
    .sx-app {
        min-height: 100vh;

        a {
            text-decoration: none;
            color: black;

            &:hover {
                color: red;
            }
        }

        font-family: "sans-serif";
        font-size: 20px;

        &-dark {
            background: black;
            color: white;
        }

        &-blur {
            filter: blur(4px);
        }

        &-content {
            width: 70%;
            margin: 50px auto;
        }
    }

    @media screen and (max-width: 650px) {
        .sx-app {
            &-content {
                width: 80%;
            }
        }
    }
</style>
