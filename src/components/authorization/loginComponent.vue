<template>
    <teleport to="#modal">
        <div class="sx-registry" @click.self="toggleLoginModal">
            <div class="sx-registry-window">
                <div class="sx-registry-window-auth" v-if="!isLoggedIn">
                    <div class="sx-registry-window-auth-header">Регистрация на нашем сайте очень простая, но это
                        необходимо для
                        максимального опыта использования ресурса.
                    </div>
                    <div class="sx-registry-window-auth-input">
                        <div>Укажите логин</div>
                        <input v-model="login" type="text">
                    </div>
                    <div class="sx-registry-window-auth-input">
                        <div>Добавьте активную почту</div>
                        <input v-model="mail" type="text">
                    </div>
                    <div class="sx-registry-window-auth-input">
                        <div>Придумайте пароль</div>
                        <input v-model="password" :type="isPasswordShown? 'text' : 'password'">
                        <div style="cursor: pointer" @click="isPasswordShown = !isPasswordShown">показать пароль</div>
                    </div>
                    <div class="sx-registry-window-auth-input">
                        <div>Повторите придуманный пароль</div>
                        <input v-model="passwordRep" :type="isPasswordShown? 'text' : 'password'">
                    </div>
                    <button @click="finishRegistration">Регистрация</button>
                    <div v-if="!checkIfPasswordsMatch && tryLogging" class="sx-registry-window-auth-warning">
                        Что-то пошло не так, повторите попытку
                    </div>
                </div>
                <div class="sx-registry-window-logout" v-else>
                    <div class="sx-registry-window-logout-header">
                        Выйти из аккаунта {{ userName }}?
                    </div>
                    <div class="sx-registry-window-logout-button">
                        <button @click="logOut">Выйти</button>
                    </div>
                </div>
            </div>
        </div>
    </teleport>
</template>

<script>
    import {mapMutations, mapState} from "vuex";

    export default {
        name: "loginComponent",
        data() {
            return {
                login: '',
                mail: '',
                password: '',
                passwordRep: '',
                isPasswordShown: false,
                tryLogging: false,
            }
        },
        computed: {
            ...mapState(['userName', 'isLoggedIn']),
            isMailCorrect() {
                return this.mail.split('').includes('@')
            },
            checkIfPasswordsMatch() {
                if (this.password === this.passwordRep && this.password != '' && this.login != '' && this.isMailCorrect) return true;
                return false;
            }
        },

        methods: {
            ...mapMutations(['setUserName', 'toggleLoggedState', 'toggleLoginModal', 'setUserMail']),
            finishRegistration() {
                this.tryLogging = true;
                if (this.checkIfPasswordsMatch) {
                    this.setUserName(this.login);
                    this.setUserMail(this.mail);
                    this.$router.push('/catalog')
                    this.toggleModalLoginState();
                }
            },
            logOut() {
                this.$router.push('/catalog')
                this.toggleModalLoginState()
            },
            toggleModalLoginState() {
                this.toggleLoggedState();
                this.toggleLoginModal();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .sx-registry {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.5);
        font-size: 20px;

        &-window {
            pointer-events: all;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background: white;
            border-radius: 10px;
            padding: 20px;
            color: black;
            width: 400px;

            &-auth-input {
                display: flex;
                flex-direction: column;
                gap: 8px;

                input {
                    border: 1px solid black;
                    border-radius: 5px;
                }
            }
        }
    }

    @media screen and (max-width: 650px) {
        .sx-registry-window {
            width: 70%;
        }

    }

</style>