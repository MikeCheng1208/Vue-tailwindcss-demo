<script>
export default {
    props:{
        option: {
            type: Array,
            default: []
        }
    }
};
</script>

<template>
    <select class="bg-black-CI text-white text-xs pr-1 mr-2 outline-none">
        <option v-for="item in option" :key="item" :value="item">{{item}}</option>
    </select>
</template>

<style lang='scss' scoped>

</style>
