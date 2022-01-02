<template>
  <main class="home">
    <b-carousel
      id="top-slider"
      class="top-el"
      style="text-shadow: 0px 0px 2px #000"
      v-model="curSlide"
      controls
      indicators
      :interval="4000"
      @sliding-end="onSlideEnd"
      @sliding-start="onSlideStart"
    >
      <b-carousel-slide v-for="(slide,ind) in topSliders" v-bind:key="ind"  :class="'slide_'+ind" >
        <template #img>
          <div class="img-item" :style="'background-image: url(\'/images/topslider/'+slide.img+'\')'"></div>
          <div class="carousel-caption">
            <div class="container">
              
                <div class="callout-title" :class="(ind==0?' animate__animated animate__fadeInUp':'')">
                  <h1 class="p-text text-uppercase block-title">{{slide.title}}</h1>
                  <h3 class="p-text mt-3">{{slide.text}}</h3>
                  <a class="p-text btn-big btn btn-dark " @click="scrollTo('#services')">shop now</a>
                </div>
        

            </div>
          </div>
        </template>
      </b-carousel-slide>
    </b-carousel>


   <div class="pt-5 mb-5 text-center container about">
      <div class="row">
        <div class=" col-sm-8 mx-auto" >
          <h3 class="mb-5 block-title font-normal">Featured & Awarded by</h3>
          <div class="row     align-items-center">
            <div class="col-12 col-md-2">
              <a href="/" class="px-2 d-block">
                <img class="w-100" src="https://cdn.shopify.com/s/files/1/1537/5723/files/Certification-logo-image-bw_180x.png?v=1573476194" />
              </a>
            </div>
            <div class="col-12 col-md-2">
              <a href="/" class="px-2 d-block">
                <img class="w-100" src="https://cdn.shopify.com/s/files/1/1537/5723/files/the-economist-logo-08f989fbd42150da_360x.png?v=1573476232" />
              </a>
            </div>
            <div class="col-12 col-md-2">
              <a href="/" class="px-2 d-block">
                <img class="w-100" src="https://cdn.shopify.com/s/files/1/1537/5723/files/tasteGOLD_16_-_Brushed_-_no_year_78ef1b2c-0afa-4ec9-ad06-2d64d2f079f6_180x.png?v=1574357716" />
              </a>
            </div>
            <div class="col-12 col-md-2">
              <a href="/" class="px-2 d-block">
                <img class="w-100" src="https://cdn.shopify.com/s/files/1/1537/5723/files/Certification-logo-image-bw_180x.png?v=1573476194" />
              </a>
            </div>
            <div class="col-12 col-md-2">
              <a href="/" class="px-2 d-block">
                <img class="w-100" src="https://cdn.shopify.com/s/files/1/1537/5723/files/Certification-logo-image-bw_180x.png?v=1573476194" />
              </a>
            </div>
            <div class="col-12 col-md-2">
              <a href="/" class="px-2 d-block">
                <img class="w-100" src="https://cdn.shopify.com/s/files/1/1537/5723/files/Certification-logo-image-bw_180x.png?v=1573476194" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

   <div id="products" class="pt-5 mb-5 container service_2 animate" v-infocus="'loaded'">
      <div class="row animate_block">
        <div class="col-12 text-center">
          <div class="animate" v-infocus="'appeared'">
            <h2 class="mb-4 section-title">QLeap is an award winning ultra-low mineral, superior purity, still Arctic iceberg water</h2>
          </div>
        </div>
      </div>
      <div class="row animate_block">
        <div class="col-12 col-md-4  blink-bl">
          <a href="" class="d-block  blink-img disabled">
            <img src="https://cdn.shopify.com/s/files/1/1537/5723/products/2bottle-1000_d2d7058b-bc98-4bbb-95c7-d7ff1d64317c_900x.jpg?v=1594687292" />
            <span class="shader-img"></span>
          </a>
          <div class="text-bl text-center mt-4">
            <h6 ><a href="" class="disabled font-normal">Single 750ml Bottle with Gift Tube - Free Shipping</a></h6>
          </div>
        </div>
        <div class="col-12 col-md-4  blink-bl">
          <a href="" class="d-block  blink-img disabled">
            <img src="https://cdn.shopify.com/s/files/1/1537/5723/products/2bottle-1000_d2d7058b-bc98-4bbb-95c7-d7ff1d64317c_900x.jpg?v=1594687292" />
            <span class="shader-img"></span>
          </a>
          <div class="text-bl text-center mt-4">
            <h6 ><a href="" class="disabled font-normal">Single 750ml Bottle with Gift Tube - Free Shipping</a></h6>
          </div>
        </div>
        <div class="col-12 col-md-4  blink-bl">
          <a href="" class="d-block  blink-img disabled">
            <img src="https://cdn.shopify.com/s/files/1/1537/5723/products/2bottle-1000_d2d7058b-bc98-4bbb-95c7-d7ff1d64317c_900x.jpg?v=1594687292" />
            <span class="shader-img"></span>
          </a>
          <div class="text-bl text-center mt-4">
            <h6 ><a href="" class="disabled font-normal">Single 750ml Bottle with Gift Tube - Free Shipping</a></h6>
          </div>
        </div>
      </div>
      <div class="col-12 text-center mt-4">
         <a class="p-text btn btn-dark btn-big" href="/">view all</a>
      </div>
    </div>


  <div class="mt-5 mb-5 newsletter">
    <div class="container">
      <div class="row  animate" v-infocus="'loaded'">
        <div class=" col-sm-12 offset-lg-7 col-lg-5 animate_block">
          <div class="input-group form-bl p-4 bg-white text-center">
            <h2 class="block-title"> The world's northernmost bottled water from 78° north</h2>
            <p>Pristine ice, locked up for millennia fresh as the day it fell as snow. Gathered during its brief few days of life before it can melt away in Svalbard's arctic waters.</p> 
            <div class="text-center w-100"><a class="p-text btn btn-dark btn-big" href="/">shop now</a></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-5 mb-5 container service_2 animate" v-infocus="'loaded'">
    <div class="row animate_block">
      <div class="col-12 col-md-4  blink-bl">
        <a href="" class="d-block  blink-img disabled">
          <img src="/images/portfolio/img1.png" />
          <span class="shader-img"></span>
        </a>
        <div class="text-bl text-center mt-4">
          <h4 class="" ><a href="" class="disabled font-normal">Luxurious gift</a></h4>
          <p>QLeap is an exclusive pure iceberg water for true connoisseurs and those who appreciate elegant design</p>
        </div>
      </div>
       <div class="col-12 col-md-4  blink-bl">
        <a href="" class="d-block  blink-img disabled">
          <img src="/images/portfolio/img1.png" />
          <span class="shader-img"></span>
        </a>
        <div class="text-bl text-center mt-4">
          <h4 class="font-normal" ><a href="" class="disabled font-normal">Luxurious gift</a></h4>
          <p>QLeap is an exclusive pure iceberg water for true connoisseurs and those who appreciate elegant design</p>
        </div>
      </div>
       <div class="col-12 col-md-4  blink-bl">
        <a href="" class="d-block  blink-img disabled">
          <img src="/images/portfolio/img1.png" />
          <span class="shader-img"></span>
        </a>
        <div class="text-bl text-center mt-4">
          <h4 class="font-normal" ><a href="" class="disabled font-normal">Luxurious gift</a></h4>
          <p>QLeap is an exclusive pure iceberg water for true connoisseurs and those who appreciate elegant design</p>
        </div>
      </div>
    </div>
  </div>


  <div class="subscribe pt-5 mb-5" id="subscribe">
    <div class="container">
      <div class=" row">
        <div class="cont-height"></div>
        <div class="col-12 col-md-7 animate" v-infocus="'loaded'">
          <div class="animate_block">
            <h1 class="text-white block-title">Subscribe to our <br>monthly plan and<br> get 10% off</h1>
            <p class="text-white"> Get Svalbardi delivered to your door hassle free. Shipping is on us. Monthly option on product pages.</p>
            <a class="p-text btn btn-white btn-big mt-3" href="/">view plans</a>
          </div>    
        </div>    
      </div>
    </div>
  </div>

   <div class="pt-5 mb-5 container service_1">
      <div class="row">
        <div class="col-12 col-md-6 text-right">
          <div class="mr-md-5 text-center">
            <div class="animate" v-infocus="'appeared'">
              <h2 class=" mb-4 section-title">QLeap helps the fragile Arctic environment</h2>
            </div>
            <p>Every bottle of QLeap sold finances CO2-reducing projects sufficient to save 100kg of the arctic ice cap </p>
            <a class="p-text btn btn-dark btn-big mt-3" href="/">learn more</a>
          </div>
        </div>
        <div class="col-12 col-md-6 right-block">
          <div class="l-img"><img class="w-100 animated" v-infocus="'left-to-right'" src="/images/portfolio/img1.png"></div>
          <div class="r-img"> <img class="w-100 animated" v-infocus="'right-to-left'"  src="/images/portfolio/img1.png"></div>
        </div>
      </div>
    </div>


    <div class="pt-5 pb-5 service_2 animate bg-light" v-infocus="'loaded'">
      <div class="container">
        <div class="row animate_block">
          <div class="col-12 text-center">
            <div class="animate" v-infocus="'appeared'">
              <h2 class="  section-title">Svalbardi blog</h2>
            </div>
          </div>
          <div class="col-12 text-center mt-1">
          <a class="p-text btn btn-dark btn-big" href="/">view all</a>
        </div>
        </div>
        
        <div class="row animate_block mt-4">
          <div class="col-12 col-md-4  blink-bl">
            <a href="" class="d-block  blink-img disabled">
              <img src="@/assets/images/pic1.jpg" />
              <span class="shader-img"></span>
            </a>
            <div class="text-bl text-center mt-4">
              <h6 ><a href="" class="disabled">25 water menus at restaurants, bars, and hotels around the world (2021)</a></h6>
            </div>
          </div>
           <div class="col-12 col-md-4  blink-bl">
            <a href="" class="d-block  blink-img disabled">
              <img src="@/assets/images/pic1.jpg" />
              <span class="shader-img"></span>
            </a>
            <div class="text-bl text-center mt-4">
              <h6 ><a href="" class="disabled">25 water menus at restaurants, bars, and hotels around the world (2021)</a></h6>
            </div>
          </div>
           <div class="col-12 col-md-4  blink-bl">
            <a href="" class="d-block  blink-img disabled">
              <img src="@/assets/images/pic1.jpg" />
              <span class="shader-img"></span>
            </a>
            <div class="text-bl text-center mt-4">
              <h6 ><a href="" class="disabled">25 water menus at restaurants, bars, and hotels around the world (2021)</a></h6>
            </div>
          </div>
        </div>
      </div>  
    </div>



  


  </main>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'

import axios from 'axios';

export default {
  name: 'Home',
  components: {
    
  },
  data() {
      return {
        curSlide: 0,
        email: "",
        msg: "",
       
        topSliders: [
          {"img":"banner1.jpg","title": "Banner title", "text":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua","url":"/"},
        ] ,
       
      }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted(){

   
  },

  methods: {
    sign_nl(){
       var postData = {
          "from": this.email_nl,
          "message": "User wants sign up newsletter",
          "name": "",
          "subscribe":"true"
      }
       axios.post('',postData).then((response)=> {
            if(response.status==201) this.nl_alert = 1;
            else this.nl_alert = 0;
            console.log(this.nl_alert)
            this.email_nl = "";
      }).catch(()=> {
          this.nl_alert = 0;
      });

      setTimeout(() => this.nl_alert =-1, 6000);

    },
    sendMsg(){
      var postData = {
          "from": this.email,
          "message": this.msg,
          "name": this.fname+" "+this.lname,
          "subscribe":"false"
      }
       axios.post('',postData).then((response)=> {
            if(response.status==201) this.sm_alert = 1;
            else this.sm_alert = 0;
            console.log(this.sm_alert)
            this.email = "";
            this.msg = "";
            this.fname = "";
            this.lname = "";
      }).catch(()=> {
          this.sm_alert = 0;
      });

      setTimeout(() => this.sm_alert =-1, 6000);
    },

     scrollTo(anchor){
        const el = document.querySelector(anchor);
        const y = el.getBoundingClientRect().top + window.pageYOffset - document.querySelector(".navbar").offsetHeight;
        window.scrollTo({top: y, behavior: 'smooth'});
    },
    handleScroll(){
  
      
    },

    onSlideStart() {
      document.querySelector(".slide_"+this.curSlide+" .callout-title").classList.remove("animate__fadeInUp");
      document.querySelector(".slide_"+this.curSlide+" .callout-title").classList.remove("animate__animated");
    },
    onSlideEnd() {
      document.querySelector(".slide_"+this.curSlide+" .callout-title").classList.add("animate__animated");
      document.querySelector(".slide_"+this.curSlide+" .callout-title").classList.add("animate__fadeInUp"); 
    },

  }
}
</script>



<style scoped lang="scss">
#top-slider{
  .carousel-inner{
    
  }
  .title-svg-holder{
    display: table;
    table-layout: fixed;
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    height: 32px;
    .title-svg-holder-side {
        background-color: #fff;
        position: relative;
        display: table-cell;
        height: 100%;
        width: 100%;
        vertical-align: middle;
        text-align: center;
    }
    .title-svg-holder-middle {
        position: relative;
        display: table-cell;
        height: 100%;
        width: 100%;
        vertical-align: middle;
        text-align: center;
        width: 80px;
        transform: translateZ(0);
        svg {
            display: block;
        }
    }
  }
  .img-item{
    background-position: center 0;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 110%;
    background-attachment: fixed;
    height: 0;
    padding-bottom: 51%;
    background-color: #000;
    img{
      opacity: 0;
    }
  }
  .callout-title{
     padding-left: 50%;
      .p-text{
        margin-bottom: 0;
        opacity: 0;
        text-shadow: none;
        &:nth-child(1){
          animation-delay: .25s;
          -webkit-animation-delay: .25s
        }
        &:nth-child(2){
          animation-delay: .6s;
          -webkit-animation-delay: .6s
        }
        &:nth-child(3){
          animation-delay: .9s;
          -webkit-animation-delay: .9s
        }
        &:nth-child(4){
          animation-delay: 1.2s;
          -webkit-animation-delay: 1.2s
        }
      }
      &.animate__animated{
        .p-text{
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-duration: 1s;
          animation-duration: 1s;
          -webkit-animation-fill-mode: both;
          animation-fill-mode: both
        }
      }
      &.animate__fadeInUp{
        .p-text{
          -webkit-animation-name: fadeInUp;
          animation-name: fadeInUp
        }
      }
      h2{
        font-size: 2.9rem;
        letter-spacing: 2px;
      }
      h3{
        font-size: 1.3rem;
     
      }
  }
  .btn{
 
    margin-top: 40px;
 
  }
}



.portfolio {
  .card{
    border: none!important;
    &:hover{
      .item-img{
        .text-block{
          opacity: 1;
        -webkit-transform: translateY(0);
        transform: translateY(0);
        }
        .img-block{
          -webkit-transform: scale(1.01);
          transform: scale(1.01);
        }
      }
    }
    .item-img {
      position: relative;
      overflow: hidden;
      height: 100%;
      .item-link{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 100;
        display: block;
      }
      .img-block{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        backface-visibility: hidden;
        -webkit-backface-visibility: hidden;
        width: 100%;
      }
      .text-block{
        position: absolute;
        bottom: 0;
        opacity: 0;
        background-color: #000;
        padding: 15px 33px 10px;
        text-align: left;
        width: 100%;
        box-sizing: border-box;
        -webkit-transform: translateY(100%);
        transform: translateY(100%);
        -webkit-transition: all .3s ease-in-out;
        transition: all .3s ease-in-out;
        .link-btm{
          color: $medium-color;
        }
      }
    }
    
  }
}
.services{
  .item{
    
    .service-bl{
      margin: 0 12%;
      &:hover{
        .icon-block{
          span{
            i{
              transform: scale(1.2);
            }
          }
        }
      }
      .icon-block{
        position: relative;
        span{
          position: relative;
          font-size: 1.8em;
          
        }
        .fas{
            transform: scale(1);
            transition: all .3s ease-in-out;
            color: #000;
          }
        &:after {
          content: '';
          position: absolute;
          height: 1px;
          width: 38px;
          background-color: #ccc;
          bottom: 0;
          margin: auto;
          left: 0;
          right: 0;
        }  
      }
      .text-block{
        h6{
          text-transform: uppercase;
        }
        p{
          
        }
      }
    }
  }

}
.feedback{
  .right-bl{
    margin-top: 99px;
  }
}


.subscribe{
  background-image: url('~@/assets/images/bg2.jpg');
  background-color: $dark-color;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  .cont-height{
    padding-bottom: 75%;
  }
  .row{
    align-items: center;
  }
}

.newsletter{
  background-image: url('~@/assets/images/bg1.jpg');
  background-color: $dark-color;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
  .form-bl{
    input{
      border: none;
    }
    span{
      border: 1px solid $dark-color;
      i{
        color: #fff;
        font-size: 19px;
      }
    }
  }
}



.service_1{
  .row{
    justify-content: space-between;
    align-items: center;
    .right-block{
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 0 55px 0;
      .l-img{
        width:50%;
          transform: translate(50px,50px);
      }
      .r-img{
          width:50%;
      }
    }
  }
}



@media (max-width: 991.98px){
    #top-slider{
      .img-item{
        background-attachment: inherit!important;
      }
        .callout-title{
          padding-left: 33%;
            p{
                font-size: 0.6rem;
                line-height: 1.1;
                margin-top: 0.2rem ;
            }
            h2{
                font-size: 1.7rem;
            }
            h3{
                  font-size: 5rem;
                  line-height: 0.9;
            }
        }
        .btn{
            margin-top: 20px;
        }
    }

    .portfolio{
        .card{
            margin-bottom: 0px;
        }
    }
    .accordion {
      .card-body {
        padding: 0 0px 20px 0px;
      }
    }
}
@media (max-width: 400.98px){
    #top-slider{
     
        .callout-title{
          h2{
              font-size: 1.5rem;
          }
            h3{
                  font-size: 4rem;
                  line-height: 0.9;
            }
        }
    }
}


.donut-bl{
  margin: auto;
  margin-bottom: 30px;
  .donut-chart {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    &.chart{
      margin: auto;
      width: 160px;
      height: 160px;
      background: #e1e1e1;
      .chart-center{
        top: 10px;
        left: 10px;
        width: 140px;
        height: 140px;
        background: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 2.3rem;
        color: #000;
      }
    }
    .quad {
      position: absolute;
      top: 0;
      left: 0;
    }

    .chart-center {
      position: absolute;
      border-radius: 50%;
    
      span {
        display: block;
        text-align: center;
      }
    }
  }
}

@mixin donut-chart($name, $perc, $size, $width, $speed, $base, $center, $color, $textColor: $color, $textSize: 40px) {
  
  $deg: ($perc/100*360)+deg;
  
  @-webkit-keyframes #{$name} {
    0% {
      -webkit-transform: rotate(0deg);
    }
    
    100% {
      -webkit-transform: rotate($deg);
    }
  }
  
  @-webkit-keyframes chartRotate2 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    
    100% {
      -webkit-transform: rotate(90deg);
    }
  }
  
  @-webkit-keyframes chartRotate3 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    
    100% {
      -webkit-transform: rotate(180deg);
    }
  }
  
  @-webkit-keyframes chartRotate4 {
    0% {
      -webkit-transform: rotate(0deg);
    }
    
    100% {
      -webkit-transform: rotate(270deg);
    }
  }
  
  @-webkit-keyframes chartCover {
    0%, 90% {
      opacity: 1;
    }
    
    91%, 100% {
      opacity: 0;
    }
  }
    
  .donut-chart {
    &.#{$name} {
      width: $size;
      height: $size;
      background: $base;
      
      .quad {
        width: $size/2;
        height: $size/2;
        top: 0;
        left: 0;
        border-radius: 100% 0 0 0;
        display: none;
      
        &.one {
          -webkit-transform: rotate($deg);  
          -webkit-transform-origin: bottom right;
          background: $color;
          -webkit-animation: #{$name} $speed linear;
        
          @if $perc > 0 {
            display: block;
          }
        }
        
        &.two {
          -webkit-transform: rotate(90deg);
          -webkit-transform-origin: bottom right;
          background: $color;
          -webkit-animation: chartRotate2 $speed linear;
          
          @if $perc > 25 {
            display: block;
          }
        }
      
        &.three {
          -webkit-transform: rotate(180deg);
          -webkit-transform-origin: bottom right;
          background: $color;
          -webkit-animation: chartRotate3 $speed linear;
          
          @if $perc > 50 {
            display: block;
          }
        }
        
        &.four {
          -webkit-transform: rotate(270deg);
          -webkit-transform-origin: bottom right;
          background: $color;
          -webkit-animation: chartRotate4 $speed linear;
          
          @if $perc > 75 {
            display: block;
          }
        }
      
        &.top {
          display: block;
          background: $base;
          
          @if $perc > 75 {
            opacity: 0;
            -webkit-animation: chartCover .01s linear $speed/1.2 both;
          }
        }
      } // quad
      
      .chart-center {
        top: $width;
        left: $width;
        width: $size - ($width * 2);
        height: $size - ($width * 2);
        background: $center;
        
      }
    }
  }
} // mixin

.contact_info{
    color: #000;
    text-transform: capitalize;
    font-weight: bold;
}


@include donut-chart('chart3', 100, 160px, 10px, .9s, #e1e1e1, #fff, $dark-color);



</style>
