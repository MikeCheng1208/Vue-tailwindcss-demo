<script>
import TicketCard from "./ui/TicketCard.vue";
export default {
    components:{
        TicketCard,
    },
    data(){
        return {
            ticketArr:[
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?9',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?10',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?11',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?12',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?13',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?14',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?15',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?16',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
            ]
        };
    },
};
</script>

<template>
    <article class="w-full pt-16 pb-16">
        <div class="max-w-mid w-full mx-auto">
            <div class="w-full flex justify-between items-end mb-16">
                <div class="w-5/12">
                    <h1 class="text-3xl text-yellow-CI font-bold mb-8">From Our Collection</h1>
                    <p class="text-sm">Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                </div>
                <div class="flex">
                    <a class="season-btn">Winter</a>
                    <a class="season-btn">Spring</a>
                    <a class="season-btn">Summer</a>
                    <a class="season-btn">Fall</a>
                </div>
            </div>
            <TicketCard :tickets="ticketArr"/>
            <a class="show-me-more-btn mx-auto">Show Me More</a>
        </div>
    </article>
</template>

<style lang='scss' scoped>

</style>
