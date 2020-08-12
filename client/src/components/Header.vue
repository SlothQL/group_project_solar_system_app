<template>
   <div class="heading-wrap">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
         <a class="navbar-brand solar-system-text" href="#">
         <img src="../assets/nav-logo-header.jpg" class="d-inline-block align-top logo" alt="">
         Solar System
         </a>
         <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
         <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
               <a class="nav-item nav-link" href="#">Computer Science</a>
               <a class="nav-item nav-link" href="#">Wildlife</a>
               <a class="nav-item nav-link" href="#">Climate Change</a>
               <a class="nav-item nav-link" href="#">Human Biology</a>
               <a class="nav-item nav-link" href="#">History</a>

            </div>
         </div>
      </nav>
      <div class="carousel-container">
         <b-carousel
            id="carousel-1"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000; font-size: 22px;"
            
            >
       
            <b-carousel-slide
               caption="SOLAR FACT #1"
               text="194 moons, 3,583 comets and 796,289 asteroids have been found in the solar system."
               img-src="../assets/carousel_images/The_Planets_Saturn.jpg"
               ></b-carousel-slide>
            <b-carousel-slide 
               caption="SOLAR FACT #2"
               text="99.86% of the solar system’s mass is found in the Sun."
               img-src="../assets/carousel_images/cropped-1024-480-957439.jpg">
            </b-carousel-slide>
        
            <b-carousel-slide 
                caption="SOLAR FACT #3"
                text="The Solar System formed around 4.6 billion years ago."
                img-src="../assets/carousel_images/nasa-yZygONrUBe8-unsplash.jpg"></b-carousel-slide>
           
            <b-carousel-slide 
                caption="SOLAR FACT #4"
                text="As of 2008, there are also five dwarf planets: Pluto, Ceres, Eris, Makemake and Haumea."
                img-src="../assets/carousel_images/moon.jpg"></b-carousel-slide>
          
            <b-carousel-slide 
                caption="SOLAR FACT #5" 
                text="The two innermost gas giants, Jupiter and Saturn, are the largest of the four outer planets."
                img-src="../assets/carousel_images/carousel_one.jpg" 
                img-alt="">
            </b-carousel-slide>
         </b-carousel>
      </div>
   </div>
</template>

<script>
  export default {
    name: "heading",  

  }
</script>

<style scoped>

.carousel-container {
    margin-top: 0.5rem;
}

.logo {
   height: 30px;
   margin-right: 20px;
}

.solar-system-text {
   font-size: 25px;
   margin-right: 50px;
}

.navbar-nav {
   margin-top: 5px;
   font-size: 19px;
   display: flex;
}

.nav-link {
   margin-right: 50px;
}
</style>