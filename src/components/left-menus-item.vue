<template>
<div class="left-menus-item">
  <div  class="icon">
    <slot name="icon"></slot>
  </div>
  <div class="font">
    <slot name="font"></slot>
  </div>
</div>
</template>

<script>
export default {
  name: "left-menus-item"
}
</script>

<style scoped>
.left-menus-item {
  display: flex;
  position: relative;
  width: 200px;
  height: 47px;
  /*background: #211F1F;*/
  border-radius: 53px;
  margin: 25px;
}
.left-menus-item:hover{
  background: #211F1F;
  transition: all .3s;
}
.icon {
margin: 6px;
  color: white;
}
.font {
  margin: 14px 10px;
  width: 108px;
  height: 19px;
  font-style: normal;
  font-weight: 530;
  font-size: 18px;
  line-height: 19px;
  /* identical to box height */



  color: #FFFFFF;
}


</style>