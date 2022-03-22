<template>
<div class="left-menus-box">
  <left-menus-item>
    <div slot="icon" class="icon">
     <span class="iconfont icon-shenqing"></span>
      </div>
    <div slot="font">项目申请</div>
  </left-menus-item>
  <left-menus-item>
    <div slot="icon" class="icon">
      <span class="iconfont icon-funengkejiyanfa"></span>
    </div>
    <div slot="font">项目研发</div>
  </left-menus-item>
  <left-menus-item>
    <div slot="icon" class="icon">
      <span class="iconfont icon-shenqing"></span>
    </div>
    <div slot="font">变更记录</div>
  </left-menus-item>
  <left-menus-item>
    <div slot="icon" class="icon">
      <span class="iconfont icon-zhongqijiancha"></span>
    </div>
    <div slot="font">中期检查</div>
  </left-menus-item>
  <left-menus-item>
    <div slot="icon" class="icon">
      <span class="iconfont icon-jingfeiguanli"></span>
    </div>
    <div slot="font">经费管理</div>
  </left-menus-item>
  <left-menus-item>
    <div slot="icon" class="icon">
      <span class="iconfont icon-shebeiguanli"></span>
    </div>
    <div slot="font">科研设备管理</div>
  </left-menus-item>
  <HeadPortrait class="profile"></HeadPortrait>
</div>
</template>

<script>
import LeftMenusItem from "@/components/left-menus-item";
import HeadPortrait from "@/components/HeadPortrait";
export default {
  name: "left-menus",
  components: {HeadPortrait, LeftMenusItem}
}
</script>

<style scoped>
.left-menus-box {
  height: 100%;
  width: 270px;
  border-right: 4px #2F3336 solid;
}
.profile {
  position: absolute;
  bottom: 30px;
}
</style>