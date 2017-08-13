<template>
    <header class="header-container" style="height: 65px;">
        <nav>
            <ul class="pull-right" >
                <li class="dropdown"><a href="#" data-toggle="dropdown" class="dropdown-toggle has-badge ripple"><em class="ion-person"></em><!--<sup class="badge bg-danger" id="unRead"></sup>--><span class="md-ripple"></span></a>
                    <ul class="dropdown-menu dropdown-menu-right md-dropdown-menu">
                        <li><a href="index.php?controller=User&amp;action=EditInfo"><em class="ion-gear-a icon-fw"></em>个人信息</a></li>
                        <li class="divider"></li>
                        <li><a href="index.php?controller=User&amp;action=ResetPwd"><em class="ion-gear-a icon-fw"></em>修改密码</a></li>
                        <li class="divider"></li>
                        <li><a href="index.php?controller=Account&amp;action=Logout"><em class="ion-log-out icon-fw"></em>退出</a></li>
                    </ul>
                </li>
                <h6 class="pull-right" style="font-size: 12px">东信北邮总代理1</h6>
            </ul>
        </nav>
    </header>
</template>
<script>
    export default{
        data(){
            return {}
        }
    }
</script>
<style>
    .header-container {
        position: relative;
        z-index: 1;
        background: transparent;
    }

    @media only screen and (min-width: 992px) {
        .header-container {
            margin-left: 240px;
        }
    }
</style>