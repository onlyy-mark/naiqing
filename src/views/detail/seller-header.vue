<template>
    <div class="container">
        <div class="header" >
            <span class="iconfont icon-fanhui" @click="$router.push('/')"></span>
        </div>
        <div class="seller-box">
            <div class="img-box">
                <img :src="seller.img" alt="">
            </div>
            <div class="info-box">
                <div class="time">{{seller.minute}}分钟  {{seller.distance}}</div>
                <div class="notice">{{seller.notice}}</div>
                <div class="sale">{{seller.full}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["seller"]
    }
</script>

<style lang="scss" scoped>
    .container{
        background: #2e2f3b;
        .header{
            height: 1rem;
            line-height: 1rem;
            color: #fff;
            padding-left: 0.2rem;
        }
        .seller-box{
            display: flex;
            padding: 0.1rem 0.2rem 0.2rem;
            .img-box{
                width: 1.7rem;
                flex:  0 0 1.7rem;
                margin-right: 0.2rem;
                img{
                    width: 100%;
                }
            }
        }
        .info-box{
            color: #fff;
            flex: 1;
            width: 0;
            font-size: 12px;
            .time{
                height: 0.32rem;
                line-height: 0.32rem;
                margin-bottom: 0.1rem;
            }
            .notice{
                height: 0.32rem;
                line-height: 0.32rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                margin-bottom: 0.2rem;
            }
        }
    }
</style>