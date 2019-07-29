<template>
  <div class="carousel-header">
    <el-carousel trigger="click" height="550px" >
      <el-carousel-item v-for="(slide, index) of slides" :key="index">
        <el-row class="slider-elem" :style="{background: ` no-repeat center/cover url('${slide.src}')`}">
          <el-col class="slider-text-container" direction="vertical">
            <span class="slider-text-before" :style="{backgroundColor: type[slide.typeId - 1].color}">{{type[slide.typeId - 1].type}}</span>
            <h3>{{slide.title}}</h3>
            <p>{{slide.text}}</p>
            <el-button class="button-el-read">Read more</el-button>
          </el-col>
        </el-row>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slides: [
          {
            typeId: 1,
            src: '/images/header_4.jpg',
            title: 'Sara Maitland: My subconscious was cleverer than my conscious in choosing to live alone',
            text: 'How did you come to live the solitary life? Was it a suddendecision or did it evolve gradually?',
            fulltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur atque blanditiis cum ducimus eaque earum esse, facilis in iste iure laudantium magni nulla perspiciatis qui, quisquam repellendus sapiente ut.'
          },
          {
            typeId: 3,
            src: '/images/header_2.jpg',
            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur atque ',
            text: 'How did you come to live the solitary life? Was it a suddendecision or did it evolve e? Was it a suddendecision or did it evolve gradually?',
            fulltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur atque blanditiis cum ducimus eaque earum esse, facilis in iste iure laudantium magni nulla perspiciatis qui, quisquam repellendus sapiente ut.'
          },
          {
            typeId: 2,
            src: '/images/header_1.jpg',
            title: 'Sara Maitland: My subconscious was cleverer than my conscious in choosing to live alone',
            text: 'How did you come to live the solitary life? Was it a suddendecision or did it evolve gradually?',
            fulltext: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto aspernatur atque blanditiis cum ducimus eaque earum esse, facilis in iste iure laudantium magni nulla perspiciatis qui, quisquam repellendus sapiente ut.'
          },
        ],
        type: [{type:'sport', color: '#6ab40b'}, {type:'inspiration', color: '#10a6fc'}, {type:'travel', color: '#ff9b00'}]
      }
    }
  }
</script>

<style lang="scss">
  .carousel-header {
    /*width: 95%;*/
    margin: auto;
  }

  .button-el-read {
    background: transparent;
    text-transform: uppercase;
    color: #fff;
  }

  .slider-elem {
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: flex-end;
  }

  .slider-text-container {
    position: relative;
    display: block;
    width: 100%;
    height: 50%;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 40px 40% 20px 20px;

    .slider-text-before{
      position: absolute;
      display: block;
      top: 0;
      left: 5%;
      color: #fff;
      padding: 5px 10px;
      text-transform: uppercase;
    }

    p, h3 {
      color: #fff;
    }

  }

  @media (max-width: 867px) {
    .slider-text-container {
      padding: 40px 15% 20px 20px;
    }
    h3{
      font-size: 14px;
    }
    p{
      font-size: 11px;
    }
  }
  @media (min-width: 868px) {
    .slider-text-container {
      padding: 40px 35% 20px 20px;
    }
    h3{
      font-size: 25px;
    }
    p{
      font-size: 12px;
    }
  }

</style>
