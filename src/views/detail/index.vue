<template>
    <div class="scrollBox">
        <div>
            <seller-header :seller="seller"></seller-header>
            <van-tabs v-model="active" sticky animated color="#ffda41">
                <van-tab title="菜单">
                    <order></order>
                </van-tab>
                <van-tab title="评价">内容 2</van-tab>
                <van-tab title="商家">内容 3</van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
    import {getStoreById} from '@/api/detail.js' 
    import sellerHeader from "./seller-header"
    import order from './order'
    import BScroll from 'better-scroll'
    export default {
        data(){
            return {
                seller:[],
                active:0,
                scrollBox:null,
            }
        },
        components:{
            sellerHeader,
            order
        },
        methods:{
            getStoreMsg(){
                //请求id
                getStoreById({id:this.$route.query.id}).then(res=>{
                    // console.log(res);
                    this.seller = res.data
                })
            }
        },
        mounted(){
            this.scrollBox = new BScroll('.scrollBox');
        },
        created(){
            this.getStoreMsg();
        }
    }
</script>

<style lang="scss" scoped>
    .scrollBox{
        height: 100vh;
    }
</style>