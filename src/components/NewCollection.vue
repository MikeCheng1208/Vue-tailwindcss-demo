<script>
import TicketCard2 from "./ui/TicketCard2.vue";
export default {
    components:{
        TicketCard2,
    },
    data(){
        return {
            ticketArr:[
                {
                    img: 'https://source.unsplash.com/user/erondu/270x200?5',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x200?6',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x200?7',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x200?8',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
            ]
        };
    },
};

</script>

<template>
    <div class="w-full h-auto bg-gray-CI pt-13 pb-12">
        <div class="max-w-mid h-auto mx-auto">
            <h1 class="text-3xl text-yellow-CI text-center mb-8">New Winter Collection</h1>
            <p class="block w-2/5 mx-auto text-center text-xs">Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
            <a class="article-btn mx-auto">All collection</a>
            <div class="w-full mt-16">
                <TicketCard2 :tickets="ticketArr"/>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>

</style>
