<template>
      <nav id="global-menu">
        <div class="vendor-info clearfix">
            <h3 class="name">관리자</h3>
        </div>

        <ul class="nav flex-column">
            <li class="nav-item bor-bm">
                <a class="nav-link ba-color-999 auth  menuMainA" href="javascript:;">
                    권한 관리
                <i class="down-icon"><font-awesome-icon  icon="angle-down" /></i>
                </a>
                <ul class="file-tree">

                    <li>
                        <a class="sysAuth" href="javascript:;"><router-link :to="{path:'/admin/auth/sysAuth',query:{active:'auth'}}" >권한그룹관리</router-link></a>
                    </li>
                    <li>
                        <a class="sysAuthProgram" href="sysAuthProgram">권한그룹별 프로그램관리</a>
                    </li>


                </ul>
            </li>
            <li class="nav-item bor-bm">
                <a class="nav-link ba-color-999 user menuMainA" href="javascript:;">
                    사용자 관리 <i class="down-icon"><font-awesome-icon  icon="angle-down" /></i>
                </a>
                <ul class="file-tree">

                    <li>
                        <a class="sysDept" href="javascript:;"><router-link :to="{path:'/admin/user/sysDept',query:{active:'user'}}" >부서관리</router-link></a>
                    </li>
                    <li>
                        <a class="sysAuthProgra" href="#">사용자관리</a>
                    </li>
                    <li>
                        <a class="sysUserSupp" href="sysUserSupp">협력사 접속관리</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item bor-bm">
                <a class="nav-link ba-color-999 menuMainA" href="#">
                    마스터 관리 <i class="down-icon"><font-awesome-icon  icon="angle-down" /></i>
                </a>
                <ul class="file-tree">

                    <li>
                        <a class="sysAut" href="#">공통코드 관리</a>
                    </li>
                    <li>
                        <a class="sysPartGroup" href="sysPartGroup">품목그룹관리</a>
                    </li>
                    <li>
                        <a class="sysMs" href="sysMsg">메세지 관리</a>
                    </li>
                    <li>
                        <a class="sysBoard" href="sysBoard">게시판 관리</a>
                    </li>
                    <li>
                        <a class="sysAuthProgra" href="#">사이트별 업체 관리</a>
                    </li>
                    <li>
                        <a class="sysAuthProgra" href="#">업체코드 관리</a>
                    </li>
                    <li>
                        <a class="sysAut" href="#">자재마스터 관리</a>
                    </li>
                    <li>
                        <a class="sysAuthProgra" href="#">제품마스터 관리</a>
                    </li>
                    <li>
                        <a class="sysAuthProgra" href="#">설정 관리</a>
                    </li>
                </ul>
            </li>
            <li class="nav-item bor-bm">
                <a class="nav-link ba-color-999 menuMainA" href="#">
                    공통 <i class="down-icon"><font-awesome-icon  icon="angle-down" /></i>
                </a>
                <ul class="file-tree">

                    <li>
                        <a class="sysAut" href="#">비밀번호 변경</a>
                    </li>
                    <li>
                        <a class="sysAuthProgra" href="#">사용자화면 설정</a>
                    </li>
                </ul>
            </li>
        </ul>
    </nav>  
</template>

<script>
  // import '../assets/js/tree/file-explore.js'


export default {
  name: 'SideMenu',
  created() {
       
   
  },
  mounted(){

      const top = this.$route.query.active;
      $("."+top).css("color","blue")
      $("."+top).parent().children(".file-tree").slideDown(300)
      $("."+top).addClass('menuMainA_down');
     $(".file-tree").filetree();
  
     $(document).off('click').on("click",".menuMainA",function () {
        if (!$(this).hasClass("menuMainA_down")){
            $(".menuMainA").removeClass("menuMainA_down");
            $(".file-tree").slideUp(100);
        }


        if ($(this).hasClass("menuMainA_down")){
            $(this).removeClass('menuMainA_down');
            $(this).parent().children(".file-tree").slideUp(100);
        }else {
            $(this).addClass('menuMainA_down');
            $(this).parent().children(".file-tree").slideDown(100);
        }

    });
  }
 
}
</script>

<style  scoped>
@import '../assets/js/tree/file-explore.css';
@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');
#global-menu {
    position: absolute;
    top: 0;
    left: 0;
    width: 208px;
    height: 100%;
    background: #eee;
    z-index: 10;
}
#global-menu .vendor-info {
    background: #825fa9;
    color: #fff;
    padding: 10px 20px;
    border: 1px solid #825fa9;
    border-top: 0;
  
}
#global-menu .vendor-info .name {
    font-size: 12px;
    word-wrap: break-word;
    width: 100%;
    font-weight: 500;
    margin: auto;
}
.nav {
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
}
ul, ol {
    margin-top: 0;
    margin-bottom: 10px;
}
.nav > li {
    margin-bottom: 8px;
    border-top: #cccccc solid 1px;
}
.nav > li {
    position: relative;
    display: block;
}
.nav > li > a {
    font-size: 9pt;
    font-weight: 700;
}
.nav > li > a {
    position: relative;
    display: block;
    padding: 10px 15px;
}
  a {
    color: inherit ;
    text-decoration: none;
}
a {
    background-color: transparent;
}
.active{
  color: blue;
}
</style>