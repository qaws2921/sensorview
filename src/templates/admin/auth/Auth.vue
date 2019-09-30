<template>
  <div class="body-wrap">
      <SideMenu></SideMenu>
      <div id="wrap" class="order-list clearfix">
        <ContentHeader :contentHeader='contentHeader'></ContentHeader>
        <ContentMid @main_get_btn="main_get_btn"></ContentMid>
        <ContentUnder :jqGrid_col='jqGrid_col'></ContentUnder>
      </div>
  </div>
</template>

<script>
function formmatter_date(cellValue) { // 날짜 필터
   if (cellValue == null){
       return '';
   } else {

    var y = cellValue.substring(0,4);
    var m = cellValue.substring(4,6);
    var d = cellValue.substring(6,8);
    var h = cellValue.substring(8,10);
    var mm = cellValue.substring(10,12);
    var s = cellValue.substring(12,14);
    // 20190718092501
    var date = y+"-"+m+"-"+d+" "+h+":"+mm+":"+s;
    return date;
   }
}



import SideMenu from '../../../components/SideMenu'
import ContentHeader from '../../../components/mainContent/ContentHeader'
import ContentMid from '../../../components/mainContent/ContentMid'
import ContentUnder from '../../../components/mainContent/ContentUnder'
export default {
  data(){
    return{
      contentHeader:{
        main:'권한그룹 관리',
        f:'관리자',
        s:'권한그룹 관리'
      },
      jqGrid_col:{
        colNames:['권한그룹코드','권한그룹명','등록자','등록일'],

        colModel:[
          {name:'auth_code',index:'auth_code',key: true ,sortable: false,width:380},
          {name:'auth_name',index:'auth_name',sortable: false,width:380},
          {name:'user_name',index:'user_name',sortable: false,width:380},
          {name:'update_date',index:'update_date',sortable: false,formatter:formmatter_date,width:380}
        ]
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