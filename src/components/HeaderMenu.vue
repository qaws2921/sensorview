<template>
    <header id="gnb2">
        <div class="gnb-wrap clearfix">
            <section class="quick-menu">
                <div class="top_bt">
                    <a role='button' href="/vendor/order/order_reg" style="width:115px;">
                        <img src="@/assets/images/button/button-admin.png" class="button-item-admin"/>
                    </a>
                </div>
                <div class="bar"></div>
                <div class="top_bt">
                    <a role='button' href="/vendor/order/order_reg" style="width:115px;">
                        <img src="@/assets/images/button/button-board.png" class="button-item-board"/>
                    </a>
                </div>
                <div class="bar"></div>
                <div class="top_bt">
                    <a role='button' href="/vendor/order/order_reg" style="width:115px;">
                        <img src="@/assets/images/button/button-scm.png" class="button-item-scm"/>
                    </a>
                </div>
            </section>
        </div>
    </header>
</template>

<script>
export default {
  name: 'HeaderMenu'

}
</script>

<style>
  #gnb2 {
      width: 100%;
      height: 60px;
      border-bottom: 1px solid #d0d0d0;
      background-color: #ffffff;
  }
  #gnb2 .gnb-wrap {
    margin: 0;
    padding: 0;
    width: 100%;
  }
  #gnb2 .gnb-wrap .quick-menu {
    position: relative;
    float: left;
    padding: 5px 0 10px 20px;
}
#gnb2 .top_bt {
    float: left;
    padding: 0;
}


[role="button"] {
    cursor: pointer;
}

#gnb2 .bar {
    float: left;
    margin: 8px 18px 0px;
    width: 1px;
    height: 35px;
    background: #ccc;
}



</style>