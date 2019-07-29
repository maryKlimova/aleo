<template>
  <div>
    <div class="post-elem-layout">
      <div class="post-header">
        <h2>{{post.title }}</h2>
        <nuxt-link  to="/" tag="el-button"><i class="el-icon-back"></i></nuxt-link>
      </div>
      <img :src="`/images/posts/post_${post.src}.jpg`" :alt="post.title" class="post-img">
      <p class="post-text">{{post.body}}Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci aspernatur autem, cum dolores, eaque error exercitationem harum illo iste necessitatibus nostrum numquam placeat quisquam totam unde. Cumque excepturi impedit molestiae nihil odio quas quisquam quod, sed tempore voluptate? A, amet assumenda consequuntur distinctio ea eligendi fuga ipsam iure, laboriosam laudantium placeat quam qui quia recusandae rerum sunt tenetur unde voluptatibus.</p>
      <div class="el-icon-chat-round">&nbsp 1</div>
      <el-collapse>
        <el-collapse-item title="Consistency" name="1">
          <ul>
            <li></li>
          </ul>
        </el-collapse-item>
      </el-collapse>
    </div>
    <div class="comments-wrap">
      <p>Leave comment...</p>
      <textarea class="post-comment"></textarea>
      <el-button>Comment</el-button>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        post: this.$route.query,
      }
    },
    created() {
    }
  }
</script>

<style scoped lang="scss">
.post-elem-layout{
  width: 70%;
  margin: 60px auto;
  background-color: #fff;
 // border-radius: 4px;
}
.comments-wrap{
  width: 70%;
  margin: 20px auto;
  background-color: #fff;
}
  .post-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
  .post-img{
    width: 50%;
    margin: auto;
    height: auto;
    display: block;
  }
  .post-text{
    padding: 20px;
    font-size: 14px;
  }
</style>
