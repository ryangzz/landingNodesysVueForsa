<template>
  <!-- Start  our-clients Section-->
  <section class="our-clients elf-section section-bg-shade" id="our-clients">
    <div class="container">
      <div class="section-heading">
        <h2 class="section-title2">¡Ellos confian en nosotros!</h2>
        <p class="section-subtitle">
        </p>        
      </div>
      <div class="line line-solid-main-color wow fadeIn" data-wow-delay="1s"
                    style="visibility: visible; animation-delay: 1s; animation-name: fadeIn;"></div>
    </div>
    <div class="container"> 
      <div class="clients-logos d-flex align-items-center justify-content-around flex-wrap">
        <!--Swiper-->
        <div class="swiper-container">
          <div class="swiper-wrapper clients-logo-wraper">
            <!-- every client logo is located inside div  with clss name "swiper-slide ".
                if you want to add more logos please keep the strcture of the swiper-slide as showen below
                
                
                -->
            <div class="swiper-slide">
              <div class="client-logo wow fadeInUp" data-wow-delay=".2s">
                <a href="#0"><picture><source type="image/webp" srcset="img/FloreriaHortensia2.webp" /><img class="img-fluid logo" src="img/FloreriaHortensia2.png" alt="Logo de Florería Hortensia" width="500" height="190" loading="lazy" decoding="async" /></picture></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="client-logo wow fadeInUp" data-wow-delay=".2s">
                <a href="#0"><picture><source type="image/webp" srcset="img/Spa.webp" /><img class="img-fluid logo" src="img/Spa.png" alt="Logo de Spa" width="480" height="249" loading="lazy" decoding="async" /></picture></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="client-logo wow fadeInUp" data-wow-delay=".2s">
                <a href="#0"><picture><source type="image/webp" srcset="img/Coexsa.webp" /><img class="img-fluid logo" src="img/Coexsa.png" alt="Logo de Coexsa" width="200" height="200" loading="lazy" decoding="async" /></picture></a>
              </div>
            </div>
            <div class="swiper-slide">
              <div class="client-logo wow fadeInUp" data-wow-delay=".2s">
                <a href="#0"><picture><source type="image/webp" srcset="img/biofase.webp" /><img class="img-fluid logo" src="img/biofase.png" alt="Logo de Biofase" width="500" height="126" loading="lazy" decoding="async" /></picture></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
<!-- End  our-clients Section-->
</template>