<template>
    <div class="table-responsive clearfix">
        <table id="mes_grid"></table>
        <div id="mes_grid_pager"></div>
    </div>
</template>

<script>

export default {
    props:{
        jqGrid_col:Object
    },
  name: 'ContentUnder',
  mounted(){
      this.jqGrid()
      },
  methods:{
      jqGrid(){
         $("#mes_grid").jqGrid({
        
       
        colNames:this.jqGrid_col.colNames,
        colModel:this.jqGrid_col.colModel,
        autowidth:true,
        height: 550,
        pager: "#mes_grid_pager",
        jsonReader: {cell:""},
        rowNum: 100,
        rowList: [100, 200, 300, 400],
        viewrecords: true,
        multiselect:true,
        beforeSelectRow: function (rowid, e) {          // 클릭시 체크 방지
            var $myGrid = $(this),
                i = $.jgrid.getCellIndex($(e.target).closest('td')[0]),
                cm = $myGrid.jqGrid('getGridParam', 'colModel');
            return (cm[i].name === 'cb');
        },
        ondblClickRow: function (rowid, iRow, iCol, e) { // 더블 클릭시 수정 모달창
            var data = $('#mes_grid').jqGrid('getRowData', rowid); // 그 셀에 해당되는 데이터
            _this.modal_edit(data); // 데이터 가공
            _this.main_update_btn();
        },
        caption: "SensorView | MES"
    }).navGrid("#mes_grid_pager", { search: false, add: false, edit: false, del: false});
  
      },

  }
}
</script>

<style scoped>
@import '../../assets/js/jqGrid/css/ui.jqgrid-bootstrap4.css';
@import '../../assets/js/jquery-ui-1.11.4/jquery-ui.css';
.table-responsive {
    clear: both;
    padding: 0 40px;
}
.table-responsive {
    min-height: .01%;
    overflow-x: auto;
}
</style>
