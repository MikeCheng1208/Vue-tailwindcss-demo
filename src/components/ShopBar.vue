<script>
import SelectUi from "./ui/SelectUi.vue";
export default {
    components:{
        SelectUi,
    },
    data(){
        return {
            countryArr:['TW', 'EN', 'JP'],
            coinArr:['TWD', 'USD', 'JPY', 'PHP']
        };
    },
};
</script>
<template>
    <nav class="shop-bar-height bg-black-CI w-full">
        <div class="w-full max-w-mid mx-auto h-full flex justify-between">
            <div class="flex items-center h-full">
                <SelectUi :option="countryArr"/>
                <SelectUi :option="coinArr"/>
            </div>
            <div class="flex flex-row-reverse justify-start items-center">
                <div class="flex justify-between items-center amount-box box-height bg-white ml-4">
                    <a class="cursor-pointer flex bg-yellow-CI w-1/3 box-height Cart-Icon bg-no-repeat bg-center"></a>
                    <p class="flex justify-center items-center w-2/3 h-full text-sm font-bold text-black-CI">$ 90.00</p>
                </div>
                <div class="flex search-box">
                    <input class="pl-4 search-width h-full outline-none" type="text" name="" id="" placeholder="search">
                    <a class="cursor-pointer flex bg-yellow-CI box-width box-height Search-Icon bg-no-repeat bg-center"></a>
                </div>
                <div class="text-white">
                    <a class="shop-bar-btn">Shopping Cart</a>
                    <a class="shop-bar-btn">WishList (7)</a>
                    <a class="shop-bar-btn">Checkout</a>
                    <a class="shop-bar-btn mr-10">My Account</a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style lang='scss' scoped>

</style>
