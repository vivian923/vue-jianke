<template>
  <div id="app">
    <keep-alive exclude="gtype,boyCon,detail,car">
      <router-view></router-view>
    </keep-alive>
      <TabBar v-if="$route.meta.flag"/>
  </div>
</template>

<script>
import TabBar from "@common/components/tabBar"
export default {
  components:{
    TabBar
  }
}
</script>

<style>
.page{
  height:100%;
  position: absolute;
  left:0;
  right:0;
  top:0;
  bottom:0;
  padding-bottom:.5rem
}
</style>
