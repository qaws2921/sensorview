<template>
  <div class="body-wrap">
      <SideMenu></SideMenu>
      <div id="wrap" class="order-list clearfix">
        <ContentHeader :contentHeader='contentHeader'></ContentHeader>
        <ContentMid></ContentMid>
        <ContentUnder :jqGrid_col='jqGrid_col'></ContentUnder>
      </div>
  </div>
</template>

<script>

import SideMenu from '../../../components/SideMenu'
import ContentHeader from '../../../components/mainContent/ContentHeader'
import ContentMid from '../../../components/mainContent/ContentMid'
import ContentUnder from '../../../components/mainContent/ContentUnder'
export default {
  data(){
    return{
      contentHeader:{
        main:'부서관리',
        f:'관리자',
        s:'부서관리'
      },
      jqGrid_col:{
        colNames:['부서코드','부서명','사용여부','등록자','수정일'],

        colModel:[
            {name:'dept_code',index:'dept_code',key: true ,sortable: false},
            {name:'dept_name',index:'dept_name',sortable: false},
            {name:'use_yn',index:'use_yn',sortable: false},
            {name:'user_name',index:'user_name',sortable: false},
            {name:'update_date',index:'update_date',sortable: false},

        ],
        }
      }
  },
  name: 'Auth',
  components: {
    SideMenu,
    ContentHeader,
    ContentMid,
    ContentUnder
  },
  methods:{
    main_get_btn(page) { // 조회 버튼
      var _this = this;
      $('#mes_grid').setGridParam({ url: 'http://localhost:9001/sysAuth/sp_sys_auth_group_get' ,datatype: "json", page: page ,mtype: 'POST',}).trigger("reloadGrid");
    },
  }
}
</script>

<style scoped>
  #wrap {
    vertical-align: top;
    padding-bottom: 50px;
}
</style>