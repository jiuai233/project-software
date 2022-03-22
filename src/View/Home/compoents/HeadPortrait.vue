<template>
<div class="profile-box">
 <div class="head-profile">
   <div class="head-profile-in">
     <div>
       <img :src="UserImg">
     </div>
     <div class="head-profile-in-right">
       <div>
         <div class="font role-box">
           久爱233 ✨
         </div>
         <div class="role role-box">
           @管理员
         </div>
       </div>
       <div>
         <span class="iconfont icon-gengduo more" @click="click">
         </span>
       </div>
     </div>
   </div>
 </div>
</div>
</template>

<script>
export default {
  name: "HeadPortrait",
  data(){
    return {
    UserImg:require("@/assets/image/demo.jpg")
    }
  },
  methods:{
    click(){
      alert("1")
    }
  }
}
</script>

<style scoped>
.profile-box {
  width: 270px;
  height: 56px;

}
.head-profile-in {
  display: flex;
  flex-direction: row;
  color: white;
}
.head-profile-in >div > img {
  width: 70px;
  height: 70px;
  border-radius: 35px;
  margin: -30px 20px;
}
.head-profile-in-right {
  margin: -10px -5px;
  display: flex;
}
.font {
  font-family: 'DengXian',system-ui;
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 19px;
}
.role {
  font-family: 'DengXian',system-ui;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 15px;
  /* identical to box height */


  /* gray */

  color: #6E767D;
}
.role-box {
  margin: 5px;
}
.more {
  position: relative;
  top: 15px;
  right: -10px;
}
</style>