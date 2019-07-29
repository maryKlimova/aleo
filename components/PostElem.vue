<template>
  <li>
    <span class="post-elem-topic" :style="{backgroundColor: topics.color}">{{topics.type}}</span>
    <img :src="`/images/posts/post_${src}.jpg`" :alt="post.title" class="post-elem-img">
    <div class="post-elem-text">
      <h4>{{post.title}}</h4>
      <p>{{post.body}}</p>
    </div>
    <div class="post-comments-wrap">
      <el-button class="button-el-read" @click="openPost()">Read more</el-button>
      <div class="el-icon-chat-round">&nbsp 1</div>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['post', 'topics', 'src'],
    methods: {
      openPost() {
        let curPost = this.post;
        curPost.topic = this.topics.type;
        curPost.src = this.src;
        this.$router.push({path:`/post/${this.post.id}`, query: curPost})
      }
  }
  }
</script>

<style  lang="scss">
  .post-elem-topic {
    padding: 5px 10px;
    color: #fff;
    text-transform: uppercase;
    position: absolute;
    top: 0;
    left: 5%;
  }

  .post-elem-img {
    display: block;
    width: 100%;
    height: auto;
  }

  .post-elem-text {
    background-color: #fff;
    padding: 10px 20px;
    color: #3d3c3c;
  }
  .post-comments-wrap{
    display: flex;
    justify-content: space-between;
    padding: 10px;
  }
  .el-icon-chat-round:before{
    font-size: 18px;
    /*cursor: pointer;*/
  }
  .el-icon-chat-round{
    border: 1px solid #fff;
    padding: 10px 15px;
    border-radius: 4px;
  }
</style>
