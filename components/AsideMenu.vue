<template>
  <div>
    <div class="aside-weather">
      <div class="aside-weather-title">
        <p>Weather</p>
      </div>
      <!-- weather widget start -->
      <a target="_blank" href="https://www.booked.net/weather/dnipro-33401" >
        <img class="weather-widget" src="https://w.bookcdn.com/weather/picture/32_33401_1_1_f1c411_250_f39c13_ffffff_ffffff_1_2071c9_ffffff_0_6.png?scode=2&domid=w209&anc_id=27390"  alt="booked.net"/>
      </a><!-- weather widget end -->
    </div>
    <div class="aside-gallery" @click="routeToGallery">
      <div class="aside-gallery-title">
        <p>Gallery</p>
      </div>
      <ul class="aside-gallery-wrap">
        <li v-for="num of 6"
            :key="num"
            class="aside-gallery-li">
          <img :src="`/images/posts/post_${num}.jpg`" class="aside-gallery-img">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      routeToGallery() {
        this.$router.push("/gallery")
      }
    }
  }
</script>

<style scoped lang="scss">
  .aside-weather{
    width: 100%;
    align-items: center;
    background-color: #EAEAEA;
  }
  .aside-weather-title,
  .aside-gallery-title {
    background-color: #3d3c3c;
    padding: 10px 20px;
    text-align: center;
    color: #fff;
    text-transform: uppercase;
  }
  .weather-widget{
    display: block;
    margin: auto ;
    padding: 20px;
  }
  .aside-gallery-wrap{
    padding: 15px;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .aside-gallery-li{
    padding: 5px 0;
    list-style: none;
  }
  .aside-gallery-img{
    width: 100px;
    height: 70px;
    object-fit: cover;
  }
</style>
