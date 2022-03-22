<template>
  <div class="background">
    <div class="box">
      <left-menus></left-menus>
    </div>
  </div>
</template>

<script>
import LeftMenus from "@/components/left-menus";
export default {
  name: "test",
  components: {LeftMenus}
}
</script>

<style scoped>


.box {
  margin: auto;
  position: absolute;
  top: 0; left: 0; bottom: 0; right: 0;
  display: flex;
  width: 96%;
  height: 96%;
  background: #000000;
  box-shadow: 20px 20px 10px #606060;
  border-radius: 19px;
}
.background {
  width: 100%;
  height: 100vh;
  background-color:#C4C4C4;
}
</style>