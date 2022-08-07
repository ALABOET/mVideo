<template>
    <div class="sx-cart-data">
        <div style="font-size: 24px">Оформление заказа</div>
        <span style="color: red">Сумма заказа - {{ sumOfMoney }} рублей</span>
        <div>1. Укажите личные данные пользователя</div>
        <span>ФИО </span>
        <input type="text" v-model="name">
        <br/>
        <span>Дата рождения </span>
        <input type="date" v-model="birthday">
        <br/>
        <span>Адрес доставки </span>
        <input type="text" v-model="address">
        <br/>
        <div>2. Как Вам лучше оформить заказ?</div>
        <div class="sx-cart-data-options">
            <div class="sx-cart-data-options-elem" v-for="elem in waysToOrder" :key="elem">
                <way-to-order-component @onWayClicked="selectOption" :order-type="elem.wayName"
                                        :order-description="elem.wayDescription"
                                        :radio-value="elem.radioValue"
                                        :class="{'sx-cart-data-on':elem.radioValue === this.text}"
                                        :is-selectable="elem.wayName === 'В рассрочку'"
                                        :used-array="bankArray"/>
            </div>
        </div>
        <div v-if="isPaymentShown">
            <div>3. Списание бонусов</div>
            <div class="sx-cart-data-bonus">
                <input @click="useBonus" type="checkbox" v-model="totalBonuses"><span>Использовать бонусы</span>
                <div class="sx-cart-data-bonus-scale" :class="{'sx-cart-data-bonus-scale__disabled':!useBonuses}">
                    <div>Сумма</div>
                    <input type="text" v-model="usedBonuses">
                    <br/>
                    <input type="range" min="0" v-model="usedBonuses" :max="totalBonuses"/>
                    <br/>
                    <button @click="useCurrentBonuses">Списать бонусы</button>
                </div>
                <div v-if="showFinal"> Использовано бонусов: {{ usedBonuses }}
                    <div>Итоговая сумма: {{ sumOfMoney - usedBonuses }} рублей</div>
                </div>
            </div>
        </div>
        <div>4. Завершение покупки</div>
        <button :class="{'sx-cart-data-bonus-scale__disabled':!isInfoPresent}" @click="finishBuying">{{isPaymentShown?
            'Купить товары' : 'Перейти в банк'}}
        </button>
    </div>
</template>

<script>
    import WayToOrderComponent from "@/components/cart/wayToOrderComponent";
    import {mapState, mapMutations} from "vuex";

    export default {
        name: "cartDataComponent",
        components: {WayToOrderComponent},
        methods: {
            ...mapMutations(['setUserBonuses', 'itemsBought', 'nullifySumOfMoney']),
            selectOption(value) {
                this.text = value
            },
            useBonus() {
                this.useBonuses = !this.useBonuses;
            },
            useCurrentBonuses() {
                this.setUserBonuses(this.usedBonuses)
                this.useBonuses = false;
                this.showFinal = true;
            },
            finishBuying() {
                if (!this.isPaymentShown) {
                    window.open(`https://www.${this.chosenBank === 'МТС'? 'mtsbank': this.chosenBank === 'Россельхозбанк' ? 'rshb' : this.chosenBank === 'Тинькофф' ? 'tinkoff' : 'sberbank'}.ru/`);
                }
                this.$router.push('/catalog');
                this.nullifySumOfMoney();
                this.itemsBought();
            }
        },
        computed: {
            ...mapState(['totalBonuses', 'sumOfMoney', 'chosenBank']),
            isInfoPresent() {
                return this.name !== '' && this.birthday !== null && this.address !== '' && this.text !== ''
            },
            isPaymentShown() {
                return this.text === 'online' || this.text === 'offline' || this.text === ''
            }
        },
        data() {
            return {
                name: '',
                birthday: null,
                address: '',
                text: '',
                useBonuses: false,
                usedBonuses: 0,
                showFinal: false,
                bankArray: ['МТС', 'Сбербанк', 'Россельхозбанк', 'Тинькофф'],
                waysToOrder: [{
                    wayName: 'Онлайн', wayDescription: 'Оплатить покупки можно только пластиковой картой.\n' +
                        'При использовании VPN сервисов могут наблюдаться проблемы.', radioValue: 'online'
                }, {
                    wayName: 'При получении',
                    wayDescription: 'Оплатить покупки при получении товара в магазине.', radioValue: 'offline'
                }, {wayName: 'В кредит', wayDescription: '', radioValue: 'credit'}, {
                    wayName: 'В рассрочку',
                    wayDescription: 'Список банков-партнеров.', radioValue: 'installment'
                }]
            }
        }
    }
</script>

<style lang="scss">
    .sx-cart-data {
        &-bonus {
            &-scale {
                &__disabled {
                    opacity: 0.4;
                    pointer-events: none;
                }
            }
        }

        &-options {
            display: flex;
            flex-basis: 50%;
            flex-wrap: wrap;
            flex-direction: column;
            align-items: center;

            &-elem {
                margin: 10px 10px;
            }
        }
    }

    .sx-cart-data-on {
        box-shadow: 0 0 10px greenyellow;
    }

    @media screen and (min-width: 650px) {
        .sx-cart-data-options {
            flex-direction: row;
            width: 650px;
        }
    }

</style>