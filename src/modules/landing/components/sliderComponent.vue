<template>
  <section class="page-hero hero-swiper-slider d-flex align-items-center" id="page-hero">
    <div class="social-icons d-none">
      <div class="sc-wraper dir-row sc-flat">
        <ul class="sc-list">
          <li class="sc-item" title="Facebook">
            <a class="sc-link" href="#0"><i class="fab fa-facebook-f sc-icon"></i></a>
          </li>
          <li class="sc-item" title="youtube">
            <a class="sc-link" href="#0"><i class="fab fa-youtube sc-icon"></i></a>
          </li>
          <li class="sc-item" title="instagram">
            <a class="sc-link" href="#0"><i class="fab fa-instagram sc-icon"></i></a>
          </li>
          <li class="sc-item" title="twitter">
            <a class="sc-link" href="#0"><i class="fab fa-twitter sc-icon"></i></a>
          </li>
        </ul>
      </div>
    </div>
    <!--Start  Swiper JS slider-->
    <div class="slider swiper-container">
        <div class="swiper-wrapper text-center">
          <!--first slider-->
          <div class="swiper-slide">
            <div class="slide-content">
              <div class="slider-bg">
                <div class="overlay-color"></div>
                <img class="slider-bg-img" src="img/slide1.jpg" alt="slider-bg 1" />
              </div>
              <div class="container">
                <div class="hero-text-area">
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-8 mx-auto">
                      <h1 class="slide-title" data-splitting="words">
                        Software a la Medida para  
                        <span class="hollow-text">Impulsar</span> tu Negocio.
                      </h1>
                    </div>
                    <div class="col-9 col-md-10 col-lg-8 mx-auto">
                      <p class="slide-subtitle narrow-centerd-text" data-splitting="words">
                        Desarrollamos soluciones personalizadas que se adaptan perfectamente a tus necesidades específicas, optimizando sus procesos y mejorando tu eficiencia.
                      </p>
                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--second slider-->
          <div class="swiper-slide">
            <div class="slide-content">
              <div class="slider-bg">
                <div class="overlay-color"></div>
                <img class="slider-bg-img" src="img/slide2.jpg" alt="slider-bg 2" />
              </div>
              <div class="container">
                <div class="hero-text-area">
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-8 mx-auto">
                      <h1 class="slide-title" data-splitting="words">
                        Migraciones  
                        <span class="hollow-text">Eficientes</span> y Sin Interrupciones
                      
                      </h1>
                    </div>
                    <div class="col-9 col-md-10 col-lg-8 mx-auto">
                      <p class="slide-subtitle narrow-centerd-text" data-splitting="words">
                        Actualiza tus sistemas a nuevas tecnologías sin preocupaciones. Nos encargamos de una migración suave y sin interrupciones para tu negocio.
                      </p>
                    </div>
                    <div class="col-12">
                      <div class="cta-links-area wow fadeInUp" data-wow-delay="0.8s">
                        <div class="play-btn-row-dir">
                          <a class="video-link" href="https://www.youtube.com/watch?v=8cN7LWGO-gE" role="button"
                            data-fancybox="data-fancybox">
                            
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!--third slider-->
          <div class="swiper-slide">
            <div class="slide-content">
              <div class="slider-bg">
                <div class="overlay-color"></div>
                <img class="slider-bg-img" src="img/slide3.jpg" alt="slider-bg 3" />
              </div>
              <div class="container">
                <div class="hero-text-area">
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-8 mx-auto">
                      <h1 class="slide-title wow fadeInUp" data-splitting="words">
                        <span class="hollow-text">Optimización y </span> Modernización de Proyectos
                      </h1>
                    </div>
                    <div class="col-9 col-md-10 col-lg-8 mx-auto">
                      <p class="slide-subtitle narrow-centerd-text" data-splitting="words">
                        Dale nueva vida a tus proyectos con nuestras soluciones de actualización. Integramos las tecnologías más avanzadas para mejorar tu rendimiento y seguridad.
                      </p>
                    </div>
                    <div class="col-12">                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!--navigation buttons-->
        <div class="swiper-button-prev wow fadeInUp" data-wow-offset="0" data-wow-delay=".4s">
          <div class="left-arrow"><i class="fas fa-arrow-left icon"></i></div>
        </div>
        <div class="swiper-button-next wow fadeInUp" data-wow-offset="0" data-wow-delay=".4s">
          <div class="right-arrow"><i class="fas fa-arrow-right icon"></i></div>
        </div>
    </div>
  </section>
</template>