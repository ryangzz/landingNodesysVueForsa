<template>
  <section class="page-hero hero-swiper-slider d-flex align-items-center" id="page-hero">
    <div class="social-icons ">
      <div class="sc-wraper dir-row sc-flat">
        <ul class="sc-list">
          <li class="sc-item" title="Facebook">
            <a class="sc-link" href="https://www.facebook.com/Kernesys/" aria-label="Facebook de Kernesys"><i class="fab fa-facebook-f sc-icon"></i></a>
          </li>
          <li class="sc-item" title="Linkedin">
            <a class="sc-link" href="https://www.linkedin.com/company/kernesys/" aria-label="LinkedIn de Kernesys"><i class="fab fa-linkedin sc-icon"></i></a>
          </li>
          <li class="sc-item" title="instagram">
            <a class="sc-link" href="https://www.instagram.com/kernesys/" aria-label="Instagram de Kernesys"><i class="fab fa-instagram sc-icon"></i></a>
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
                <picture>
                  <source type="image/webp" media="(max-width: 768px)" srcset="img/slide1-mobile.webp" />
                  <source type="image/webp" srcset="img/slide1.webp" />
                  <img class="slider-bg-img" src="img/slide1.jpg" alt="Kernesys - Software a la medida para impulsar tu negocio en Monterrey" width="1920" height="1281" loading="eager" fetchpriority="high" decoding="async" />
                </picture>
              </div>
              <div class="container">
                <div class="hero-text-area">
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-8 mx-auto">
                      <h1 class="slide-title" data-splitting="words">
                        Software a la medida para  
                        <span class="hollow-text">impulsar</span> tu negocio.
                      </h1>
                    </div>
                    <div class="col-9 col-md-10 col-lg-8 mx-auto">
                      <p class="slide-subtitle narrow-centerd-text" data-splitting="words">
                        Desarrollamos soluciones personalizadas que se adaptan perfectamente a tus necesidades, optimizando tus procesos y potenciando tu eficiencia operativa.
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
                <picture>
                  <source type="image/webp" media="(max-width: 768px)" srcset="img/slide2-mobile.webp" />
                  <source type="image/webp" srcset="img/slide2.webp" />
                  <img class="slider-bg-img" src="img/slide2.jpg" alt="Kernesys - Migraciones de sistemas eficientes y sin interrupciones" width="1920" height="1281" loading="lazy" decoding="async" />
                </picture>
              </div>
              <div class="container">
                <div class="hero-text-area">
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-8 mx-auto">
                      <h1 class="slide-title" data-splitting="words">
                        Migraciones  
                        <span class="hollow-text">eficientes</span> y sin interrupciones
                      
                      </h1>
                    </div>
                    <div class="col-9 col-md-10 col-lg-8 mx-auto">
                      <p class="slide-subtitle narrow-centerd-text" data-splitting="words">
                        Actualiza tus sistemas a nuevas tecnologías. Nos encargamos de una migración tecnológica exitosa para tu negocio.
                      </p>
                    </div>
                    <div class="col-12">
                      <div class="cta-links-area wow fadeInUp" data-wow-delay="0.8s">
                        <div class="play-btn-row-dir">
                          <a class="video-link" href="https://www.youtube.com/watch?v=8cN7LWGO-gE" role="button"
                            data-fancybox="data-fancybox" aria-label="Ver video de Kernesys sobre migraciones de sistemas">
                            
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
                <picture>
                  <source type="image/webp" media="(max-width: 768px)" srcset="img/slide3-mobile.webp" />
                  <source type="image/webp" srcset="img/slide3.webp" />
                  <img class="slider-bg-img" src="img/slide3.jpg" alt="Kernesys - Manejo profesional y de calidad en proyectos de software" width="1920" height="1280" loading="lazy" decoding="async" />
                </picture>
              </div>
              <div class="container">
                <div class="hero-text-area">
                  <div class="row justify-content-center">
                    <div class="col-12 col-lg-8 mx-auto">
                      <h1 class="slide-title wow fadeInUp" data-splitting="words">
                        Manejo <span class="hollow-text">profesional</span> y de calidad en los proyectos
                      </h1>
                    </div>
                    <div class="col-9 col-md-10 col-lg-8 mx-auto">
                      <p class="slide-subtitle narrow-centerd-text" data-splitting="words">
                        Gestión integral de proyectos tecnológicos con metodologías ágiles, asegurando entregas puntuales y resultados de alto impacto.
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