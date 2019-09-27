<template>
  
<header id="gnb1">
    <div class="gnb-wrap clearfix">
        <section class="quick-menu">
            <div class="top_bt"><a role='button' href="/vendor/order/order_reg" style="width:115px;">Manufacturing Execution System</a></div>
        </section>
        <section class="logon-info">
            <div class="info-btn">
                <div class="top_bt"><a role='button' href="javascript:goLogout();">HelpDesk</a></div>
            </div>
        </section>
    </div>
</header>
  
</template>

<script>
export default {
  name: 'HelpDesk'
 
}
</script>

<style scoped>
a {
    color: inherit !important;
    text-decoration: none !important;
}
a {
    background-color: transparent;
}
#gnb1 .gnb-wrap {
    margin: 0;
    padding: 0;
    width: 100%;
}
#gnb1 {
    font-size: 9px;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #d0d0d0;
    background: linear-gradient(to bottom, rgba(125,126,125,1) 0%,rgba(14,14,14,1) 100%);
}
#gnb1 .gnb-wrap .quick-menu {
    position: relative;
    float: left;
    color: #ffffff;
    padding: 8px;
    padding-left: 20px;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}

#gnb1 .gnb-wrap .logon-info {
    position: relative;
    float: right;
    color: #ffffff;
}
#gnb1 .gnb-wrap .info-btn {
    float: left;
    padding: 8px 20px;
}

</style>
