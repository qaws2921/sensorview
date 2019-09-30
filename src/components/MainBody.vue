<template>
<div>
  
    <HelpDesk></HelpDesk>
    <Header></Header>
    <HeaderMenu></HeaderMenu>
    <router-view/>
    <!-- <div class="body-wrap">
      <SideMenu></SideMenu>
    </div> -->
</div>
</template>

<script>
import HelpDesk from './HelpDesk'
import Header from './Header'
import HeaderMenu from './HeaderMenu'
import SideMenu from './SideMenu'

export default {
  name: 'MainBody',
   components: {
    HelpDesk,
    Header,
    HeaderMenu,
    SideMenu
  }
}
</script>

<style>
  a {
    color: inherit;
    text-decoration: none;
}
a {
    background-color: transparent;
}
.body-wrap {
    position: relative;
    width: 100%;
    min-height: 960px;
    padding-left: 208px;
    box-sizing: border-box;
}

</style>