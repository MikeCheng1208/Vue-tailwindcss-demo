<script>
import TicketCard from "./ui/TicketCard.vue";
export default {
    components:{
        TicketCard,
    },
    data(){
        return {
            menuArr: ['Trending', 'Bestsellers', 'New', 'On Sale'],
            popularIdx: 0,
            ticketArr:[
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?1',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?2',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?3',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
                {
                    img: 'https://source.unsplash.com/user/erondu/270x320?4',
                    title: 'PARIS JACKET',
                    price: '$89,99'
                },
            ]
        };
    },
    methods:{
        activeMenu(idx){
            this.popularIdx = idx;
        }
    }
};
</script>

<template>
    <article class="w-full h-auto mb-12">
        <div class="max-w-mid w-full mx-auto">
            <h1 class="text-3xl text-yellow-CI mt-13 text-center mb-8">Popular Now</h1>
            <nav class="flex items-center justify-center mb-20">
                <a 
                    v-for="(item, idx) in menuArr" 
                    :key="item" 
                    :class="['popular-btn', {'text-yellow-CI': idx === popularIdx}]"
                    @click="activeMenu(idx)"
                >
                    {{item}}
                </a>
            </nav>
            <TicketCard :tickets="ticketArr"/>
        </div>
    </article>
</template>

<style lang='scss' scoped>

</style>
