<template>
  <main>
    <AppHeaderSlider></AppHeaderSlider>
    <el-container class="home-main">
      <el-main class="el-main-home">
        <div class="topics-header-menu">
          <ul>
            <li v-for="topic of topics" :key="topic.type" class="topics-header-elem" @click="selectedTopic(topic.type)">{{topic.type}}</li>
          </ul>
        </div>
        <div class="posts-lists-wrap">
        <ul class="posts-wrapper" v-for="ul of 3" :key="ul">
          <transition-group name="posts-elements">
            <AppPostElem
              :post="post"
              :src="post.userId"
              :topics="topics[post.userId]"
              v-for="(post, index) of showPosts(ul-1)"
              v-if="post.userId && index < current"
              :key="post.id"
              class="post-elem"
            >
            </AppPostElem>
          </transition-group>
        </ul>
        </div>
        <div @click="addPosts" class="btn-load-posts" ><span ref="btnLoad">Load More</span></div>
      </el-main>
      <el-aside width="20%" class="home-side-bar">
        <AppAsideMenu></AppAsideMenu>
      </el-aside>
    </el-container>
  </main>
</template>

<script>
  import AppHeaderSlider from '~/components/HeaderSlider';
  import AppPostElem from '~/components/PostElem';
  import AppAsideMenu from '~/components/AsideMenu';

  let addPagesNum = 10,
    postsFlag = false;
  export default {
    async asyncData({store, error}){
      if (postsFlag) {
        return;
      }
      try{
         let posts = await store.dispatch('posts/fetchPosts');
        postsFlag = true;
        return {posts : posts.posts};
      }
      catch(e) {
         error(e)
      }
    },
    data(){
      return{
        topics: [
          {type:'all', color: 'transparent'},
          {type:'sport', color: '#6ab40b'},
          {type:'inspiration', color: '#10a6fc'},
          {type:'travel', color: '#ff9b00'},
          {type:'lifestyle', color: '#EFCF59'},
          {type:'techno', color: '#3d3c3c'},
          {type:'science', color: '#88368B'},
          {type:'education', color: '#076952'},
          {type:'nature', color: '#1ed0d2'},
          {type:'tips', color: '#d21e72'},
          {type:'photography', color: '#8598a0'},

        ],
        topicsMenuWdt: 0,
        topicsWdt: 0,
        current: 10,
        rand: [],
        parts: [],
        loaded : false,
        posts : null

      }
    },
    components: {
      AppHeaderSlider,
      AppPostElem,
      AppAsideMenu
    },
    created(){
      this.rand = this.randomOrder(this.posts).map( post => {
        post.topic = this.topics[post.userId].type;
        return post;
      });
      this.divideParts(this.rand);
    },

    mounted() {
      // let parent = document.querySelector('.topics-header-menu ul');
      // let children = document.querySelector('.topics-header-menu ul').children;
      // let lastChild = children[children.length -1];
      // window.addEventListener('resize',function(e){
      //   this.topicsWdt = lastChild.getBoundingClientRect().left;
      //   this.topicsMenuWdt = parent.getBoundingClientRect().width - parent.getBoundingClientRect().left;
      // })
    },
    methods: {
      addPosts(){
        let checked = this.checkPostsNumber();
        if (checked) {
          this.current+= addPagesNum;
        }

      },
      randomOrder(elem){
        return elem.sort(function(){
          return Math.random() - 0.5;
        })
      },
      showPosts(ul) {
        return this.parts[ul];
      },
      selectedTopic(topic) {
        this.parts = [];
        if (topic === 'all') {
          this.current = 10;
          this.divideParts(this.rand)
        }
        else {
          let filteredRandom = this.rand.filter(a => {if (a.topic === topic) {return a}});
          this.divideParts(filteredRandom)
        }
        this.checkPostsNumber();
      },
      divideParts(rand){
        this.parts.push(rand.filter((d, i) => i % 3 === 0));
        this.parts.push(rand.filter((d, i) => i % 3 === 1));
        this.parts.push(rand.filter((d, i) => i % 3 === 2));
      },
      checkPostsNumber(){
        let partsLenth = 0;
        for (let i =0; i< this.parts.length;i++){
          partsLenth +=this.parts[i].length
        }
        if (this.current * this.parts.length <= partsLenth) {
          this.$refs.btnLoad.innerHTML = 'Load more';
          return true;
        }
        else {
          this.$refs.btnLoad.innerHTML = 'No posts more';
          return false;
        }

      }
    },
    computed: {

  },
  }
</script>

<style lang="scss">
  body {
    background-color: #282828;
  }
  .el-main-home {
    margin-right: 20px;
  }

  .posts-lists-wrap{
    display: flex;
    justify-content: space-between;
  }
  .topics-header-menu{
    display: block;
    background-color:#3d3c3c;
    ul {
      width: auto;
      display: flex;
     }
  }
  .posts-wrapper{
    width: 32%;
    display: inline-block;
    padding: 0;
  }
  .topics-header-elem{
    list-style: none;
    text-transform: uppercase;
    color: #e7e7e7;
    margin: 10px 20px;
    cursor: pointer;
    transition: 0.25s;
    &:hover{
      color: #989797;
    }
  }
  .home-side-bar {
    background-color: #F5F5F5;
  }
  .home-main {
    margin: 15px 30px;
  }
  .post-elem{
    //width: 300px;
    width: 100%;
    position: relative;
    display: inline-block;
    list-style-type: none;
    color: #fff;
    margin-bottom: 25px;
    height: auto;
    background-color: #3d3c3c;
  }
.btn-load-posts{
  box-sizing: border-box;
  cursor: pointer;
  transition: 0.2s;
  box-shadow: 0 0 5px inset #858383;
  width: 100%;
  background-color: #3d3c3c;
  color: #fff;
  text-transform: uppercase;
  border: none;
  text-align: center;
  padding: 10px;
  &:hover{
    color: #a3a2a2;
  }
  span {
    position: relative;
    padding-left: 30px;
  }
  span::before {
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    position: absolute;
    top: 0;
    left: 0;
    background: url("/images/icons/icon-load-more.svg")no-repeat center;
  }

}
  .posts-elements-enter-active, .posts-elements-leave-active {
    transition: all 0.25s ease-out;
  }
  .posts-elements-enter, .posts-elements-leave-to {
    opacity: 0;
    transform: scale(1.1);
  }

</style>
