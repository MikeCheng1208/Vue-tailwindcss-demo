<script>
import Header from './components/Header.vue';
import Nav from './components/Nav.vue';
import TopBar from './components/TopBar.vue';
import ShopBar from "./components/ShopBar.vue";
import Popular from "./components/Popular.vue";
import NewCollection from "./components/NewCollection.vue";
import Sole from "./components/Sole.vue";
import SubscribeBar from "./components/SubscribeBar.vue";
import FromOurCollection from "./components/FromOurCollection.vue";
import StoryBehind from "./components/StoryBehind.vue";
import Footer from "./components/Footer.vue";
export default {
  components:{
    Header,
    Nav,
    TopBar,
    ShopBar,
    Popular,
    NewCollection,
    Sole,
    SubscribeBar,
    FromOurCollection,
    StoryBehind,
    Footer,
  }
};
</script>
<template>
  <div id="app">
    <Header/>
    <Nav/>
    <TopBar/>
    <ShopBar/>
    <Popular/> 
    <NewCollection/>
    <Sole/>
    <SubscribeBar/>
    <FromOurCollection/>
    <StoryBehind/>
    <Footer/>
  </div>
</template>
<style lang="scss">

</style>
