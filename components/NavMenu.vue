<template>
  <div>
    <el-dropdown :hide-on-click="false">
  <div class="el-dropdown-link">
  </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item><nuxt-link class="drop-link" to="/" >Home</nuxt-link></el-dropdown-item>
        <el-dropdown-item><nuxt-link class="drop-link" to="/about" >About</nuxt-link></el-dropdown-item>
        <el-dropdown-item><nuxt-link class="drop-link" to="/gallery" >Gallery</nuxt-link></el-dropdown-item>
        <el-dropdown-item><nuxt-link class="drop-link" to="/contact">Contact</nuxt-link></el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <ul class="nav-list">
      <li class="nav-item" data-href="/"@click="changeActiveTab"><nuxt-link class="tabs-link" to="/" >Home</nuxt-link></li>
      <li class="nav-item" data-href="/about" @click="changeActiveTab"><nuxt-link class="tabs-link"  to="/about" >About</nuxt-link></li>
      <li class="nav-item" data-href="/blog"@click="changeActiveTab"><nuxt-link class="tabs-link"  to="/gallery" >Gallery</nuxt-link></li>
      <li class="nav-item" data-href="/contact" @click="changeActiveTab"><nuxt-link class="tabs-link"  to="/contact">Contact</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        tabs: []
      }
    },
    mounted() {
      this.tabs = document.querySelectorAll('.nav-item');
      this.setActiveTab();
      console.log('storeeee',this.$store)
    },
    methods: {
      changeActiveTab(event){
        if (!event.target.matches('.tabs-link')) {
          return;
        }
        let parent = event.target.closest('.nav-item');
        if (!parent.classList.contains('active')) {
          this.tabs.forEach(li => {
            li.classList.remove('active')
          });
          parent.classList.add('active')
        }
      },

      setActiveTab(){
        this.tabs.forEach(li => {
          if (li.getAttribute('data-href') === window.location.pathname) {
            li.classList.add('active');
          }
        });
      }
    },
  }
</script>

<style lang="scss" scoped>
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
    width: 30px;
    height: 30px;
    margin: 20px;
    background: url("/images/icons/icon-menu.png") no-repeat;
    background-size: 100%;
  }
  .el-icon-menu{
    background-size: 100%;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .nav-list {
    list-style: none;
    padding: 0;
    margin: 10px 30px;
    display: flex;
  }
  .nav-item {
    margin: 0 20px;

    padding: 0 0 5px 0;
    position: relative;
    &::before{
      content: '';
      display: block;
      height: 2px;
      width: 0;
      position: absolute;
      bottom: -5px;
      left: 0;
      transition: all 0.25s;
      background-color: #fff;
    }
  }
  .nav-item .tabs-link {
    text-decoration: none;
    color: #fefefe;
  }

  .nav-item.active,
  .nav-item:hover{
    &::before {
      width: 100%;
    }
  }
  .drop-link{
    text-decoration: none;
    color: #666666;
  }
  @media (max-width: 767px) {
    .nav-list {
      display: none;
    }
    .el-dropdown{
      display: block;
    }
  }
  @media (min-width: 768px) {
    .nav-list {
      display: flex;
    }
    .el-dropdown{
      display: none;
    }
  }
</style>
