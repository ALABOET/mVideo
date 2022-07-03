<template>
    <div class="sx-search">
        <input class="sx-search-input" placeholder="Искать товары с рассрочкой"
               v-model="enteredName"/>
        <input-search-logo class="sx-search-logo"/>
        <div v-if="searchStarted && enteredName">
            <div v-for="elem in newArray" :key="elem">{{elem}} new</div>
        </div>
    </div>
</template>

<script>
    import InputSearchLogo from "@/components/picscomps/inputSearchLogo";
    import {mapState} from 'vuex';

    export default {
        name: "searchComponent",
        components: {InputSearchLogo},
        computed: {
            ...mapState(['items'])
        },
        methods: {
            getItem() {
            }
        },
        watch: {
            enteredName() {
                this.searchStarted = true;
                let arrayedArray = [];
                this.items.forEach(elem=>{
                    arrayedArray.push(elem.name)
                })
                for (let i = 0; i < arrayedArray.length; i++) {
                    if (arrayedArray[i].includes(this.enteredName) && this.enteredName !== '') {
                        this.newArray.push(arrayedArray[i])
                    } else {
                        this.newArray.splice(i, 1);
                    }
                }
                this.newArray = Array.from(new Set(this.newArray));
            }
        },
        data() {
            return {
                searchStarted: false,
                enteredName: '',
                newArray: []
            }
        }
    }
</script>

<style lang="scss">
    .sx-search {
        height: 48px;
        position: relative;

        &-input {
            height: inherit;
            resize: none;
            font-size: 16px;
        }

        &-logo {
            position: absolute;
            top: 5px;
            right: 0;
        }
    }

    @media screen and (max-width: 650px) {
        .sx-search {
            display: none;
        }
    }
</style>