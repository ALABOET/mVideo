<template>
    <div>
        <div>Страница продукта</div>
        <div>{{itemName}}</div>
        <div>{{itemRating}} {{itemPrice}}</div>
        {{$route.params}}
    </div>
</template>

<script>
    export default {
        name: "productPage",
        props:{
            itemData:{
              type: Array
            },
            itemName:{
                type: String,
                default: ''
            },
            itemRating:{
                type: String,
                default: ''
            },
            itemPrice:{
                type: String,
                default: ''
            },
        }
    }
</script>

<style scoped>

</style>