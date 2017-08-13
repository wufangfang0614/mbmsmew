<template>
    <div class="layout-container">
        <top-header></top-header>
        <sidebar></sidebar>
        <div class="main-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import topHeader from './TopHeader'
    import sidebar from './Sidebar'
    export default{
        components:{
            topHeader,
            sidebar
        }

    }

</script>

<style>
    /*重置样式*/
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    body {
        background: #f0f2f5;
        font-family: "Helvetica Neue", Helvetica, Arial, "Hiragino Sans GB", "Hiragino Sans GB W3", "Microsoft YaHei UI", "Microsoft YaHei", "WenQuanYi Micro Hei", sans-serif;
        font-size: 14px;
        color: #444;
    }

    /*公用样式*/
    .pull-right {
        float: right;
    }

    /*布局样式*/
    .layout-container {
        position: relative;
        width: 100%;
        height: 100%;
        background: url(../assets/theme-1/bg.png) no-repeat;
        background-size: 100% 180px;
    }
    .main-container{
        background-color: transparent;
        position: relative;
        height: calc(100% - 65px);
        overflow: auto;
        -webkit-overflow-scrolling: touch;
    }
    @media only screen and (min-width: 992px){
        .main-container {
            margin-left: 240px;
        }
    }






</style>