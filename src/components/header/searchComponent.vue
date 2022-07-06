<template>
    <div class="sx-search">
        <input class="sx-search-input" placeholder="Искать товары"
               v-model="itemName" ref="inputSearch"/>
        <input-search-logo class="sx-search-logo"/>
        <div class="sx-search-list" v-if="searchStarted && itemName && !isArrayEmpty">
            <div class="sx-search-list-item" v-for="elem in newArray" :key="elem">{{elem}}</div>
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
            ...mapState(['items']),

            isArrayEmpty() {
                return this.newArray.length === 0
            }
        },
        mounted() {
            this.$refs.inputSearch.focus();
        },
        watch: {
            itemName() {
                this.searchStarted = true;
                let names = [];
                this.items.forEach(elem => {
                    names.push(elem.name)
                })
                for (let i = 0; i < names.length; i++) {
                    if ((names[i].includes(this.itemName) || names[i].toLowerCase().includes(this.itemName)) && this.itemName !== '') {
                        this.newArray.push(names[i])
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
                itemName: '',
                newArray: []
            }
        }
    }
</script>

<style lang="scss">
    .sx-search {
        height: 48px;
        position: relative;
        width: 220px;

        &-input {
            height: inherit;
            width: inherit;
            resize: none;
            font-size: 16px;
        }

        &-logo {
            position: absolute;
            top: 5px;
            right: 0;
        }

        &-list {
            color: #fff;
            background-color: rgba(242, 38, 19, 0.6);
            padding: 10px;
            margin-top: 5px;
            border-radius: 10px;

            &-item {
                &:hover {
                    cursor: pointer;
                    color: blanchedalmond;
                }
            }
        }


    }

    @media screen and (max-width: 650px) {
        .sx-search {
            display: none;
        }
    }
</style>