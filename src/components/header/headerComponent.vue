<template>
    <div class="sx-header" :class="{'sx-header-dark': isDarkTheme}">
        <popup-window text="Товар успешно добавлен в корзину" :condition="isCartModalShown"/>
        <popup-window text="Покупка успешно совершена" :condition="isProductBuyModalShown"/>
        <popup-window text="Товар успешно добавлен в Избранное" :condition="isFavouriteModalShown"/>
        <router-link to="/">
            <mvideo-logo/>
        </router-link>
        <catalog-component :is-catalog-shown="isCatalogShow" @listOpen="clicked"
                           @closed="isCatalogShow = !isCatalogShow"/>
        <search-component/>
        <menu-mobile-component class="sx-header-menu"/>
        <div class="sx-header-logo">
            <div class="sx-header-logo-logos" v-for="element in buttons" :key="element.title">
                <step-logo-component @cartWasClicked="pushToCart" :step-title="element.title"
                                     :current-logo="element.icon"
                />
                <div class="sx-header-logo-logos-counter"
                     :class="{'counter-dark': isDarkTheme}">
                    {{ element.title === 'Корзина' ? addedProducts.length : element.title === 'Избранное' ?
                    favouriteProducts.length : '' }}
                </div>
            </div>
        </div>
        <theme-toggle-switch/>
    </div>
</template>

<script>
    import mvideoLogo from "@/components/picscomps/mvideoLogo";
    import CatalogComponent from "@/components/header/catalogComponent";
    import SearchComponent from "@/components/header/searchComponent";
    import StepLogoComponent from "@/components/header/stepLogoComponent";
    import ProfileLogo from "@/components/picscomps/profileLogo";
    import StatsLogo from "@/components/picscomps/statsLogo";
    import CartLogo from "@/components/picscomps/cartLogo";
    import HeartLogo from "@/components/picscomps/heartLogo";
    import BonusesLogo from "@/components/picscomps/bonusesLogo";
    import {mapState} from 'vuex'
    import ThemeToggleSwitch from "@/components/header/themeToggleSwitch";
    import router from "@/router";
    import MenuMobileComponent from "@/components/catalogMenu/menuMobileComponent";
    import PopupWindow from "@/components/modals/popupWindow";

    export default {
        name: "headerComponent",
        components: {
            PopupWindow,
            MenuMobileComponent,
            ThemeToggleSwitch,
            StepLogoComponent, SearchComponent, CatalogComponent, mvideoLogo
        },
        computed: {
            ...mapState(['itemsInCart', 'userName', 'themeMode', 'addedProducts', 'favouriteProducts', 'isCartModalShown', 'isProductBuyModalShown', 'isFavouriteModalShown']),
            isDarkTheme() {
                return this.themeMode === 'Dark'
            }
        },
        methods: {
            pushToCart() {
                router.push('/cart')
            },
            clicked() {
                if (this.isCatalogShow) {
                    return this.isCatalogShow = false;
                }
                if (!this.isCatalogShow) {
                    return this.isCatalogShow = true;
                }
                return 'Error was detected'
            }
        },
        data() {
            return {
                isCatalogShow: false,
                buttons: [
                    {title: '0', icon: BonusesLogo},
                    {title: '', icon: ProfileLogo},
                    {title: 'Каталог', icon: StatsLogo},
                    {title: 'Избранное', icon: HeartLogo},
                    {title: 'Корзина', icon: CartLogo}],
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sx-header {
        position: sticky;
        background: white;
        padding: 10px;
        top: 0px;
        box-shadow: 0 0 5px black;
        margin: 0 10px;
        border-radius: 0 0 10px 10px;
        display: flex;
        justify-content: center;
        border-bottom: 1px solid grey;
        align-items: center;
        z-index: 2;

        &-menu {
            display: none;
        }

        &-logo {
            display: flex;
            margin-left: 30px;
            align-items: center;

            &-logos {
                display: flex;
                width: 100px;
            }
        }

        &-dark {
            background: darkgray;
        }
    }

    @media screen and (max-width: 1225px) {
        .sx-header {
            &-menu {
                position: absolute;
                right: 10px;
                display: block;
            }

            &-logo {
                display: none;
            }
        }
    }

    .counter-dark {
        color: black;
    }

    @media screen and (max-width: 650px) {
        .sx-header {
            display: flex;
            justify-content: space-around;
            gap: 10px;

            &-menu {
                display: block;
            }
        }
    }
</style>