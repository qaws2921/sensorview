<template>
  <header id="gnb">
    <div class="gnb-wrap clearfix">
        <section class="logo clearfix">
            <a href="/vendor/dashboard">
                <img src="@/assets/images/logo/logo-sm.png" style="width: 150px"/>
            </a>
        </section>
        <section class="logon-info">
            <div class="info-btn">
                <div class="top_bt">
                    <select>
                        <option value="">1공장</option>
                        <option value="">2공장</option>
                        <option value="">3공장</option>
                    </select>
                </div>
                <div class="bar"></div>
                <div class="member_bt">
                    <a role='button' href="javascript:goMypage();" style="width:115px;">
                        <img src="https://content.marketbom.com/vendor-assets/vendor_pc/img/member_icon.png" alt="정보보기 아이콘"/>&nbsp;김종효님 (관리자)</a>
                </div>
                <div class="bar"></div>
                <div class="top_bt"><a role='button' href="javascript:logout();">로그아웃</a></div>
            </div>
        </section>
    </div>
</header>
</template>

<script>
export default {
  name: 'Header'
  
}
</script>

<style scoped>
#gnb {
    width: 100%;
    height: 60px;
    border-bottom: 1px solid #d0d0d0;
}
#gnb .gnb-wrap {
    margin: 0;
    padding: 0;
    width: 100%;
}
#gnb .gnb-wrap .logo {
    float: left;
    width: 208px;
    height: 60px;
    background: #ffffff;
    border-left: 1px solid #d0d0d0;
    border-bottom: 1px solid #d0d0d0;
    padding: 14px 0 10px 20px;
        margin-left: -172px;
}
#gnb .gnb-wrap .logo a {
    display: inline-block;
}
img {
    vertical-align: middle;
}
img {
    border: 0;
}
#gnb .gnb-wrap .logon-info {
    position: relative;
    float: right;
    padding: 5px 40px 0 0;
}
#gnb .gnb-wrap .info-btn {
    float: left;
    padding: 10px 0;
}


#gnb .bar {
    float: left;
    margin: 8px 20px 0px;
    width: 1px;
    height: 20px;
    background: #ccc;
}

#gnb .top_bt {
    float: left;
    padding: 6px 0px;
}
input, button, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
button, select {
    text-transform: none;
}
button, input, optgroup, select, textarea {
    margin: 0;
    font: inherit;
    color: inherit;
}
#gnb .member_bt {
    float: left;
    padding: 6px 0px;
}
  a {
    color: inherit ;
    text-decoration: none;
}
a {
    background-color: transparent;
}

</style>