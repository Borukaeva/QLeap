<template>
  <div id="app">
    
      <b-navbar toggleable="sm" v-bind:class="isSticky">
        <div class="container">
          <div class="nav-cont">
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-navbar-brand href="/" class="desktop"><img src="@/assets/images/logo.png"/></b-navbar-brand>
            <b-navbar-brand href="/" class="mobile"><img src="@/assets/images/logo.png"/></b-navbar-brand>
            <b-collapse id="nav-collapse" is-nav>
              <b-navbar-nav>
                <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link> </li>
                <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
                <li class="nav-item"><a class="nav-link" @click="scrollTo('#subscribe')">Contact Us</a> </li>
                <li class="nav-item dropdown"><a class="nav-link" @click="scrollTo('#products')">Product</a> 
                </li>
              <!--  <li class="nav-item"><router-link to="/gallery" class="nav-link">Gallery</router-link> </li>-->
              </b-navbar-nav>
            </b-collapse>
          </div>
        </div>
      </b-navbar>
    
    <transition name="fade">
      <router-view @hook:mounted="componentMounted"/>
    </transition>
    
    <div class="connect animate" v-infocus="'loaded'">
    <div class="container">
      <div class='animate_block'>
        <div class="row justify-content-center" >
          <div class="col-12 text-center">
            <div>
              <h2 class=" text-white">Get 10% off your first purchase</h2>
            </div>
          </div>
        </div>
        <div class="row justify-content-center" >
          <div class="col-12 col-sm-7 text-center my-4">
            <h5 class="text-white">Enjoy an immediate discount right after signing up for our occasional newsletter. We never spam.</h5>
          </div>
        </div>
         <div class="row justify-content-center" >
          <div class="col-5 text-center">
            <div class="input-group mb-3">
               <input type="email" class="form-control" required v-model="email" placeholder="Enter your email">
               <span class="input-group-text" > 
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-email" viewBox="0 0 64 64"><path d="M63 52H1V12h62zM1 12l25.68 24h9.72L63 12M21.82 31.68L1.56 51.16m60.78.78L41.27 31.68"></path></svg>
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    <footer class="">
      <div class="container">
        <div class="footer-top">
          <div class="row">
            <div class="col-12 col-md-12 bt-logo">
              <a target="_blank" rel="noopener" href="/" class="js-no-transition mx-2">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-instagram" viewBox="0 0 32 32"><path fill="#444" d="M16 3.094c4.206 0 4.7.019 6.363.094 1.538.069 2.369.325 2.925.544.738.287 1.262.625 1.813 1.175s.894 1.075 1.175 1.813c.212.556.475 1.387.544 2.925.075 1.662.094 2.156.094 6.363s-.019 4.7-.094 6.363c-.069 1.538-.325 2.369-.544 2.925-.288.738-.625 1.262-1.175 1.813s-1.075.894-1.813 1.175c-.556.212-1.387.475-2.925.544-1.663.075-2.156.094-6.363.094s-4.7-.019-6.363-.094c-1.537-.069-2.369-.325-2.925-.544-.737-.288-1.263-.625-1.813-1.175s-.894-1.075-1.175-1.813c-.212-.556-.475-1.387-.544-2.925-.075-1.663-.094-2.156-.094-6.363s.019-4.7.094-6.363c.069-1.537.325-2.369.544-2.925.287-.737.625-1.263 1.175-1.813s1.075-.894 1.813-1.175c.556-.212 1.388-.475 2.925-.544 1.662-.081 2.156-.094 6.363-.094zm0-2.838c-4.275 0-4.813.019-6.494.094-1.675.075-2.819.344-3.819.731-1.037.4-1.913.944-2.788 1.819S1.486 4.656 1.08 5.688c-.387 1-.656 2.144-.731 3.825-.075 1.675-.094 2.213-.094 6.488s.019 4.813.094 6.494c.075 1.675.344 2.819.731 3.825.4 1.038.944 1.913 1.819 2.788s1.756 1.413 2.788 1.819c1 .387 2.144.656 3.825.731s2.213.094 6.494.094 4.813-.019 6.494-.094c1.675-.075 2.819-.344 3.825-.731 1.038-.4 1.913-.944 2.788-1.819s1.413-1.756 1.819-2.788c.387-1 .656-2.144.731-3.825s.094-2.212.094-6.494-.019-4.813-.094-6.494c-.075-1.675-.344-2.819-.731-3.825-.4-1.038-.944-1.913-1.819-2.788s-1.756-1.413-2.788-1.819c-1-.387-2.144-.656-3.825-.731C20.812.275 20.275.256 16 .256z"></path><path fill="#444" d="M16 7.912a8.088 8.088 0 0 0 0 16.175c4.463 0 8.087-3.625 8.087-8.088s-3.625-8.088-8.088-8.088zm0 13.338a5.25 5.25 0 1 1 0-10.5 5.25 5.25 0 1 1 0 10.5zM26.294 7.594a1.887 1.887 0 1 1-3.774.002 1.887 1.887 0 0 1 3.774-.003z"></path></svg>
              </a>
               <a target="_blank" rel="noopener" href="/"  class="js-no-transition mx-2">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-facebook" viewBox="0 0 32 32"><path fill="#444" d="M18.56 31.36V17.28h4.48l.64-5.12h-5.12v-3.2c0-1.28.64-2.56 2.56-2.56h2.56V1.28H19.2c-3.84 0-7.04 2.56-7.04 7.04v3.84H7.68v5.12h4.48v14.08h6.4z"></path></svg>
               </a>
               <a target="_blank" rel="noopener" href="/"  class="js-no-transition mx-2">
                <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-linkedin" viewBox="0 0 24 24"><path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6S.02 4.881.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.982 0H8.014v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0V24H24V13.869c0-7.88-8.922-7.593-11.018-3.714V8z"></path></svg>
                </a>
               <a target="_blank" rel="noopener" href="/"  class="js-no-transition mx-2">
               <svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-twitter" viewBox="0 0 32 32"><path fill="#444" d="M31.281 6.733q-1.304 1.924-3.13 3.26 0 .13.033.408t.033.408q0 2.543-.75 5.086t-2.282 4.858-3.635 4.108-5.053 2.869-6.341 1.076q-5.282 0-9.65-2.836.913.065 1.5.065 4.401 0 7.857-2.673-2.054-.033-3.668-1.255t-2.266-3.146q.554.13 1.206.13.88 0 1.663-.261-2.184-.456-3.619-2.184t-1.435-3.977v-.065q1.239.652 2.836.717-1.271-.848-2.021-2.233t-.75-2.983q0-1.63.815-3.195 2.38 2.967 5.754 4.678t7.319 1.907q-.228-.815-.228-1.434 0-2.608 1.858-4.45t4.532-1.842q1.304 0 2.51.522t2.054 1.467q2.152-.424 4.01-1.532-.685 2.217-2.771 3.488 1.989-.261 3.619-.978z"></path></svg>
               </a>
            </div>
            <div class="col-12">
              <b-navbar toggleable="sm">
                <div class="nav-cont justify-content-center">
                  <b-navbar-nav>
                    <li class="nav-item"><router-link to="/" class="nav-link">Home</router-link> </li>
                    <li class="nav-item"><router-link to="/about" class="nav-link">About</router-link></li>
                    <li class="nav-item"><a class="nav-link" @click="scrollTo('#subscribe')">Contact Us</a> </li>
                    <li class="nav-item dropdown"><a class="nav-link" @click="scrollTo('#products')">Product</a> 
                    </li>
                  </b-navbar-nav>
                </div>
              </b-navbar>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bot text-center"><p>© 2022</p></div>
    </footer>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {  },
  data(){
    return {
      isSticky: "",
      scrollPosition:0,
      email: "",
    
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted(){
   
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods:{
    componentMounted() {  
      setTimeout(() => {
        window.scrollTo(0,1)
        window.scrollTo(0,0)
      }, 1500);
    },
    scrollTo(anchor){
      const el = document.querySelector(anchor);
      const y = el.getBoundingClientRect().top + window.pageYOffset - document.querySelector(".navbar").offsetHeight;
      window.scrollTo({top: y, behavior: 'smooth'});
    },
    handleScroll(){
      if(window.scrollY>(document.querySelector(".top-el")?document.querySelector(".top-el").scrollHeight:0)){ this.isSticky="scroll fixed-top" }
      else if(window.scrollY>0){  this.isSticky="scroll"}
      else{ this.isSticky="" }
    }
  }
}
</script>


<style lang="scss">
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
