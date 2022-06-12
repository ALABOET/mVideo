import {createStore} from "vuex";

export default createStore({
    state() {
        return {
            itemsInCart: 0,
            isCartModalShown: false,
            themeMode: 'Light',
            addedProducts: [],
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
        addItemToCart(state, payload) {
            state.itemsInCart++;
            state.isCartModalShown = true;
            state.addedProducts.push(payload)
            setTimeout(() => state.isCartModalShown = false, 5000)
            localStorage.setItem('productsNumber', state.itemsInCart)
        },
        setUserName(state, payload) {
            state.userName = payload
        },
        setUserMail(state, payload) {
            state.userMail = payload
        },
        deleteElement(state, payload) {
            state.addedProducts.splice(payload, 1)
            state.itemsInCart--;
            localStorage.setItem('productsNumber', state.itemsInCart)
        },
        completePurchase(state) {
            state.addedProducts.length = 0;
            state.itemsInCart = 0;
        },
        setTheme(state) {
            if (state.themeMode === 'Dark') {
                state.themeMode = 'Light'
                return;
            }
            if (state.themeMode === 'Light') {
                state.themeMode = 'Dark'
                return;
            }
        },
        setProductNumber(state) {
            state.itemsInCart = localStorage.getItem('productsNumber')
        }
    }
})