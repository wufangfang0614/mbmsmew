<template>
    <aside class="sidebar-container">
        <div class="sidebar-header">
            <img src="http://60.205.114.50/meeting/public//default/img//login/yunshixun_logo02.png" alt="">
            <h1>云视讯</h1>
        </div>
        <div class="sidebar-content">
            <nav class="sidebar-nav">
                <ul>
                    <li><a href="index.php?controller=default&amp;action=index"><span
                            class="pull-right nav-label"></span><span class="nav-icon icon1"></span><span
                            class="text">我的首页</span><span class="md-ripple"></span></a></li>
                    <li @click="navOpenAndClose('iszhibo')" :class="iszhibo">
                        <a href="#">
                            <span class="nav-icon icon4"></span>
                            <span class="text">直播管理</span>
                            <span class="pull-right arrow"></span>
                        </a>
                        <ul class="sidebar-subnav">
                            <li >
                                <router-link :to="{path:'/live/list'}">
                                    <span>直播列表</span>
                                </router-link>
                            </li>
                            <li>
                                <a href="index.php?controller=Live&amp;action=GetLiveList" >
                                    <span>直播列表</span>
                                </a>
                            </li>
                        </ul>
                    </li>


                </ul>
            </nav>
        </div>
    </aside>
</template>
<script>
    export default{
        data(){
            return {
                iszhibo: ""
            }
        },
        methods:{
            navOpenAndClose(name){
                if(this[name]=="active"){
                    this[name]= "";
                }else{
                    this[name]="active";
                }
            }
        }
    }
</script>
<style>
    .sidebar-container {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        width: 240px;
        overflow-y: auto;
        overflow-x: visible;
        z-index: 20;
        background: #43465F;
        color: #6C7177;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);
        -webkit-transition: -webkit-transform 0.28s ease-in-out;
        -moz-transition: -moz-transform 0.28s ease-in-out;
        -o-transition: -o-transform 0.28s ease-in-out;
        transition: transform 0.28s ease-in-out;
        will-change: transform;
    }

    @media only screen and (min-width: 992px) {
        .sidebar-container {
            -webkit-transform: translate3d(0, 0, 0);
            transform: translate3d(0, 0, 0);
        }
    }

    .sidebar-header {
        height: 60px;
        padding: 10px 16px 0;
        color: #fff;
    }

    .sidebar-header img {
        vertical-align: middle;
    }

    .sidebar-header h1 {
        margin: 0;
        display: inline-block;
        font-size: 26px;
        line-height: 48px;
        height: 48px;
        vertical-align: -10px;
    }

    .sidebar-header + .sidebar-content {
        height: calc(100% - 65px);
        overflow: auto;
        border-right: 1px solid rgba(0, 0, 0, 0.11);
    }

    .sidebar-nav {
        font-weight: 500;
        font-size: 16px;
        color: #FFF;
        padding-top: 0;
    }

    .sidebar-nav ul > li > a {
        display: block;
        padding: 0 16px 0 35px;
        height: 56px;
        line-height: 56px;
        text-decoration: none;
        letter-spacing: 0.0125em;
        color: inherit;
        overflow: hidden;
    }

    .sidebar-nav > ul > li.active > a {
        border-left: 3px solid #4A5FE2;
        padding-left: 32px;
    }

    .sidebar-nav ul > li > a > .nav-icon {
        display: inline-block;
        margin-right: 16px;
        background-image: url(../assets/theme-1/sidebar_icon.png);
    }

    .sidebar-nav ul > li.active > a > .nav-icon {
        background-image: url(../assets/theme-1/sidebar_iconclick.png);
    }

    .sidebar-nav ul > li > a > .icon1 {
        width: 28px;
        height: 28px;
        background-position: 0px 0px;
        vertical-align: -7px;
    }

    .sidebar-nav ul > li > a > .icon2 {
        width: 28px;
        height: 29px;
        background-position: 0px -28px;
        vertical-align: -8px;
    }

    .sidebar-nav ul > li > a > .icon3 {
        width: 28px;
        height: 28px;
        background-position: 0px -57px;
        vertical-align: -10px;
    }

    .sidebar-nav ul > li > a > .icon4 {
        width: 28px;
        height: 28px;
        background-position: 0px -84px;
        vertical-align: -7px;
    }

    .sidebar-nav ul > li > a > .icon5 {
        width: 28px;
        height: 28px;
        background-position: 0px -113px;
        vertical-align: -10px;
    }

    .sidebar-nav ul > li > a > .icon6 {
        width: 28px;
        height: 28px;
        background-position: 0px -141px;
        vertical-align: -10px;
    }

    .sidebar-nav ul > li > a > .icon7 {
        width: 28px;
        height: 28px;
        background-position: 0px -169px;
        vertical-align: -10px;
    }

    .sidebar-nav ul > li > a > .icon8 {
        width: 28px;
        height: 28px;
        background-position: 0px -168px;
        vertical-align: -6px;
    }

    .sidebar-nav ul > li > a > .icon9 {
        width: 28px;
        height: 28px;
        background-position: 0px -196px;
        vertical-align: -8px;
    }

    .sidebar-nav ul > li > a > .icon10 {
        width: 28px;
        height: 28px;
        background-position: 0px -223px;
        vertical-align: -6px;
    }

    .sidebar-nav ul > li > a > .icon11 {
        width: 28px;
        height: 28px;
        background-position: 0px -140px;
        vertical-align: -6px;
    }

    .sidebar-nav ul > li.active > a > .text {
        color: rgb(74, 95, 226);
    }

    .sidebar-nav ul > li > a > .nav-caret {
        -webkit-transition: -webkit-transform 0.2s ease;
        -moz-transition: -moz-transform 0.2s ease;
        -o-transition: -o-transform 0.2s ease;
        transition: transform 0.2s ease;
    }

    .sidebar-nav ul > li.active > a > .nav-caret {
        -webkit-transform: rotate(90deg);
        -ms-transform: rotate(90deg);
        -o-transform: rotate(90deg);
        transform: rotate(90deg);
    }

    .sidebar-nav ul > li.active > ul {
        height: auto;
    }

    .sidebar-nav ul > li.active > ul > li > a {
        opacity: 1;
        margin-left: 0;
    }

    .arrow {
        margin-left: 10px;
        cursor: pointer;
    }

    .arrow:before {
        content: "\f3d3";
        display: inline-block;
        font-family: "Ionicons";
        font-size: 18px;
        font-weight: bolder;
        color: #4A5FE2;
        transform: rotate(90deg);
        -webkit-transform: rotate(-270deg);
        -webkit-transition: -webkit-transform 0.2s ease;
        -moz-transition: -moz-transform 0.2s ease;
        -o-transition: -o-transform 0.2s ease;
        transition: transform 0.2s ease;
    }

    .active > .arrow:before {
        transform: rotate(-90deg);
    }

    .sidebar-subnav{
        display: none;
    }

    .active .sidebar-subnav{
        display: block;
    }

    .sidebar-nav ul > li > ul {
        height: 0;
        overflow: hidden;
        -webkit-transition: height 0.55s cubic-bezier(0.35, 0, 0.25, 1);
        -o-transition: height 0.55s cubic-bezier(0.35, 0, 0.25, 1);
        transition: height 0.55s cubic-bezier(0.35, 0, 0.25, 1);
    }

    .sidebar-nav ul > li ul > li > a {
        opacity: 1;
        margin-left: 0;
        padding-left: 90px;
        -webkit-transition: 0.5s ease;
        -o-transition: 0.5s ease;
        transition: 0.5s ease;
        -webkit-transition-property: opacity, margin-left;
        transition-property: opacity, margin-left;
    }
</style>
