<template>
    <div class="title-row clearfix">
      <div class="page-header">
        <h2>{{contentHeader.main}}</h2>
      </div>
      <ul class="breadcrumb">
        <li><a href="/vendor/dashboard">{{contentHeader.f}}</a></li>
        <li class="active"><a href="/vendor/order/order_goods_list">{{contentHeader.s}}</a></li>
      </ul>
    </div>
</template>

<script>

export default {
  props:{
    contentHeader:Object
  },
  name: 'ContentHeader',
}
</script>

<style scoped>
 #wrap .title-row {
    padding: 0px 40px 5px;
}

#wrap .title-row .page-header {
    position: relative;
    float: left;
    margin: 0;
}
.page-header {
    padding-bottom: 9px;
    margin: 40px 0 20px;
}

#wrap .title-row .breadcrumb {
    position: relative;
    float: right;
    margin: 22px 0 10px;
    padding: 0;
}

.breadcrumb {
    padding: 8px 15px;
    margin-bottom: 20px;
    list-style: none;
    border-radius: 4px;
}

#wrap .title-row .page-header h2 {
    font-size: 17px;
    font-weight: 700;
    color: #010101;
}

h1, .h1, h2, .h2, h3, .h3 {
    margin-top: 20px;
    margin-bottom: 10px;
}
h1, h2, h3, h4, h5, h6, .h1, .h2, .h3, .h4, .h5, .h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}



#wrap .title-row .breadcrumb li a {
    color: #010101;
}
#wrap .title-row .breadcrumb li.active a {
    color: #010101;
}
</style>
