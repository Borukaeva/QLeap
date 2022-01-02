<template>
<main class="contact">
    <div id="top-banner" class="top-el">  
        <div class="banner-caption">
            <div class="mt-5 callout-title animate__animated animate__fadeInUp text-white">
                <h1 class="p-text  block-title">The Story of QLeap</h1>
                <p class="p-text mt-3 ">QLeap / svahl-bar-thee / cold coasts</p>
            </div>
        </div>
    </div>

    <div class="pt-5  container about">
      <div class="row">
        <div class=" col-sm-8 mx-auto" >
          <p class="my-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
      </div>
    </div>

    <div class="mt-5 mb-5 service1">
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


    <div class="pt-5  container about animate" v-infocus="'loaded'">
      <div class="row animate_block">
        <div class=" col-sm-10 mx-auto text-center" >
          <h3 class="block-title font-normal">The company operates sustainably for the conservation of the Arctic environment in three main ways:</h3>
        </div>
      </div>
      <div class="row animate_block mt-5">
        <div class="col-12 col-md-4">
          <h4 class="block-title">1</h4>
          <div class=""><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col-12 col-md-4">
          <h4 class="block-title">2</h4>
          <div class=""><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div class="col-12 col-md-4">
          <h4 class="block-title">3</h4>
          <div class=""><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit</b></div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>



 
</main>
</template>


<script>

export default {
  name: 'About',
  components: {
    
  },
  data() {
      return {

      }
  },
  created(){
      console.log("created");
      //window.scrollTo(0,1)
  },
  mounted(){
      console.log("mounted");
      window.scrollTo(0,1)
  }
}
</script>



<style scoped lang="scss">
.service1{
  background-image: url('~@/assets/images/bg1.jpg');
  background-color: $dark-color;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  padding: 100px 0;
}
#top-banner{
    background-image: url('~@/assets/images/bg3.jpg');    
}
.contact{
    .right-bl{
        margin-top: 62px;
    }
}
.about{
  .block-title{
    line-height: 1.4;
  }
}
</style>