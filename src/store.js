import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            itemsInCart: 0,
            totalBonuses: 550,
            isCartModalShown: false,
            isProductBuyModalShown: false,
            isFavouriteModalShown: false,
            isSuccessfullyBought: false,
            sumOfMoney: 0,
            themeMode: 'Light',
            addedProducts: [],
            favouriteProducts: [],
            chosenBank: 'default',
            items: [
                {name: 'iPhone 13 Max 256GB', rating: '4.9', reviews: '22 отзыва', price: 79900, id: 1},
                {name: 'iPhone 12 64GB', rating: '4.5', reviews: '7 отзывов', price: 45990, id: 2},
                {name: 'iPhone 11 128GB', rating: '4.6', reviews: '4 отзыва', price: 25290, id: 3},
                {name: 'Samsung A12 32GB', rating: '3.9', reviews: '4 отзыва', price: 13990, id: 4},
                {name: 'Samsung A14 64GB', rating: '3.9', reviews: '1 отзыв', price: 33700, id: 5},
                {name: 'Samsung Galaxy 2 8GB', rating: '2.5', reviews: '124 отзыв', price: 323990, id: 6},
                {name: 'POCO 10X', rating: '4', reviews: '11 отзыв', price: 14990, id: 7},
                {name: 'Honor 9A', rating: '4.4', reviews: '3 отзыва', price: 14000, id: 8},
                {name: 'Fly IQ 440 Energie', rating: '4.95', reviews: '1 отзыв', price: 8990, id: 9},
                {name: 'Fly IQ 441 Radiant', rating: '5', reviews: '10 отзывов', price: 9990, id: 10},
                {name: 'Honor 8X', rating: '4.3', reviews: '14 отзывов', price: 17890, id: 11}],
            userName: '',
            userMail: '',
            isLoginModalOpen: false,
            isLoggedIn: false,
        }
    },
    getters: {
        getProducts(state) {
            return state.addedProducts
        }
    },
    mutations: {
        toggleLoginModal(state) {
            state.isLoginModalOpen = !state.isLoginModalOpen;
        },
        toggleLoggedState(state) {
            state.isLoggedIn = !state.isLoggedIn
        },

        itemsBought(state) {
          state.isSuccessfullyBought = true;
          setTimeout(() => state.isSuccessfullyBought = false, 5000)
        },
        changeActiveBank(state, payload) {
            state.chosenBank = payload
        },
        addItemToCart(state, payload) {
            state.itemsInCart++;
            state.isCartModalShown = true;
            state.addedProducts.push(payload)
            setTimeout(() => state.isCartModalShown = false, 5000)
            localStorage.setItem('productsNumber', state.itemsInCart)
        },

        moveItemFromFavouriteToCart(state) {
            state.isCartModalShown = true;
            setTimeout(() => state.isCartModalShown = false, 5000)
            state.favouriteProducts.forEach((elem) => {
                state.addedProducts.push(elem)
            })
            state.favouriteProducts.length = 0;
        },

        addItemToFavourite(state, payload) {
            state.favouriteProducts.push(payload);
            state.isFavouriteModalShown = true;
            setTimeout(() => state.isFavouriteModalShown = false, 5000)
        },
        setUserName(state, payload) {
            state.userName = payload
        },
        setUserMail(state, payload) {
            state.userMail = payload
        },
        setUserBonuses(state, payload) {
            state.totalBonuses -= payload
        },
        deleteElement(state, payload) {
            state.addedProducts.splice(payload, 1)
            state.itemsInCart--;
            localStorage.setItem('productsNumber', state.itemsInCart)
        },
        deleteFavouriteElement(state, payload) {
            state.favouriteProducts.splice(payload, 1)
        },
        clearItemsInCart(state) {
            state.addedProducts.length = 0;
            state.itemsInCart = 0;
            localStorage.setItem('productsNumber', state.itemsInCart)
        },
        clearItemsInFavourite(state) {
            state.favouriteProducts.length = 0;
        },
        completePurchase(state) {
            for (let elem of state.addedProducts) {
                state.sumOfMoney += elem.price
            }
            state.addedProducts.length = 0;
            state.itemsInCart = 0;
            state.isProductBuyModalShown = true;
            setTimeout(() => state.isProductBuyModalShown = false, 5000)
        },
        setTheme(state) {
            if (state.themeMode === 'Dark') return state.themeMode = 'Light'

            if (state.themeMode === 'Light') state.themeMode = 'Dark'

        },
        setProductNumber(state) {
            state.itemsInCart = localStorage.getItem('productsNumber')
        }
    }
})