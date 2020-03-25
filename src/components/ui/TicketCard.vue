<script>
export default {
    props:{
        tickets:{
            type: Array,
            default: []
        }
    }
};

</script>

<template>
    <ul class="flex justify-between items-center flex-wrap">
        <li v-for="tick in tickets" :key="tick.img" class="block ticket-card cursor-pointer mb-2">
            <img :src="tick.img" alt="">
            <div class="w-full pt-5 pb-7">
                <h2 class="text-black-CI text-ms text-center font-bold">{{tick.title}}</h2>
                <p class="text-yellow-CI text-ms text-center font-bold">{{tick.price}}</p>
            </div>
        </li>
    </ul>
</template>

<style lang='scss' scoped>

</style>
