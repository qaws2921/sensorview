<template>
  <form id="listFrm" method="get" action="/vendor/order/order_goods_list">
        <div class="filter-box clearfix">
            <div class="filter-text-left">
                <a class="btn btn-search" role='button' href="#" style="width:100px;" @click="get" >조회</a>
                <a class="btn btn-search" role='button' href="#" style="width:100px;" >추가</a>
                <a class="btn btn-search" role='button' href="#" style="width:100px;" >삭제</a>

            </div>
            <div class="filter-text-right">
            </div>
        </div>
    </form>
</template>

<script>

export default {

  name: 'ContentMid',
  methods:{
    get(){
       this.$emit('main_get_btn', 1);
    }
  }
}
</script>

<style scoped>
.filter-box {
    padding: 0 40px;
    margin-bottom: 10px;
    height: 34px;
}
.filter-box > div {
    position: relative;
    float: left;
    margin-right: 20px;
}
.btn-search {
    color: #515252;
    background-color: #eee;
    border-color: #ccc;
    margin-right: 3px;
    font-size: 14px;
}

</style>
