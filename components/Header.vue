<template>
  <el-header class="menu-wrapper sticky" :class="{'change-color': menuColor}">
    <div class="header-menu">
      <img src="~static/images/title.svg" alt="logo" class="logo-header" >
      <el-button @click="scrollTop()" v-if="menuColor" plain class="header-up-button" icon="el-icon-top"></el-button>
      <AppNavMenu></AppNavMenu>
    </div>
  </el-header>
</template>

<script>
  import AppNavMenu from '~/components/NavMenu';

  let windowHgtToScroll = 400;
  export default {
    data() {
      return {
        menuColor: false
      }
    },
   components: {
     AppNavMenu
   },
    methods: {
     scrollTop(){
       let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
       if (currentScroll > 0) {
         window.requestAnimationFrame(this.scrollTop);
         window.scrollTo (0,currentScroll - (currentScroll/5));
       }
     },
      handleScroll() {
        (window.scrollY > windowHgtToScroll) ?
          this.menuColor = true :
          this.menuColor = false;
      }
    },
    created(){
      if (process.browser) {
        window.addEventListener('scroll', this.handleScroll);
      }
    },
    destroyed () {
      if (process.browser) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }
</script>

<style scoped>
  .logo-header {
    display: block;
    margin-left: 20px;
  }

  .menu-wrapper {
    padding: 0;
  }

  .header-menu {
    margin: auto;
    display: flex;
    justify-content: space-between;
  }
  .header-up-button{
    margin-top: 10px;
    /*font-size: 18px;*/
  }
</style>
