<template>
  <div>
    <AppHeader class="menu-wrapper-sticky" ></AppHeader>
    <el-container>
      <el-main>
        <nuxt/>
      </el-main>
    </el-container>
  </div>
</template>
<script>
  import AppHeader from '~/components/Header';
  export default {

    components: {
      AppHeader,
    },

    methods: {

    },
    mounted() {

    },
  }
</script>
<style lang="scss">


  .slider-wrapper {
    position: absolute;
  }

  .el-main {
    padding: 0;
  }
  .menu-wrapper-sticky {
    position: fixed;
    z-index: 100;
    width: 100%;
  }
  .change-color {
    transition: .25s;
    background-color: rgba(40,40,40, 0.7);
  }
</style>
