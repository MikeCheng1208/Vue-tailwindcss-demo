<script>
export default {
    data(){
        return {
            navIdx: 0,
            NavLeft:['Woman', 'Men', 'Children', 'Collection'],
            NavRight:['Spring', 'Summer', 'Fall', 'Winter'],
        };
    },
    methods:{
        activeNav(idx, tag){
            this.navIdx = tag === 'r' ? idx + 4 : idx;
        }
    }
};
</script>

<template>
    <nav class="w-full max-w-mid mx-auto nav-height flex justify-center items-center">
        <ul class="flex">
            <li v-for="(item, idx) in NavLeft" :key="item" :class="{'ml-8': item !== 'Woman'}">
                <a :class="['nav-btn', {'text-yellow-CI': idx === navIdx}]" @click="activeNav(idx, 'l')">{{item}}</a>
            </li>
        </ul>
        <img class="mx-12" src="../assets/Logo.png" alt="">
        <ul class="flex">
            <li v-for="(item, idx) in NavRight" :key="item" :class="{'mr-8': item !== 'Winter'}">
                <a :class="['nav-btn', {'text-yellow-CI': idx + 4 === navIdx}]" @click="activeNav(idx, 'r')">{{item}}</a>
            </li>
        </ul>
    </nav>
</template>

<style lang='scss' scoped>

</style>
