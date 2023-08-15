<template>
  <section class="page-hero hero-swiper-slider d-flex align-items-center" id="page-hero">
    <div class="social-icons">
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
                        create the business youooo
                        <span class="hollow-text">dreamed</span> about
                      </h1>
                    </div>
                    <div class="col-9 col-md-10 col-lg-8 mx-auto">
                      <p class="slide-subtitle narrow-centerd-text" data-splitting="words">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Autem recusandae reiciendis esse? Corporis, quo
                        eum.
                      </p>
                    </div>
                    <div class="col-12">
                      <div class="cta-links-area wow fadeInUp" data-wow-delay="0.8s">
                        <a class="ma-btn-primary cta-link cta-link-primary wow fadeInUp" href="#0"
                          data-wow-delay="0.8s">Mensaje</a><a class="ma-btn-primary cta-link wow fadeInUp" href="#0"
                          data-wow-delay="1s">Contactanos</a>
                      </div>
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
                        get another
                        <span class="hollow-text">sucsses</span> with our
                        awesome team
                      </h1>
                    </div>
                    <div class="col-9 col-md-10 col-lg-8 mx-auto">
                      <p class="slide-subtitle narrow-centerd-text" data-splitting="words">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Autem recusandae reiciendis esse? Corporis, quo
                        eum.
                      </p>
                    </div>
                    <div class="col-12">
                      <div class="cta-links-area wow fadeInUp" data-wow-delay="0.8s">
                        <div class="play-btn-row-dir">
                          <a class="video-link" href="https://www.youtube.com/watch?v=8cN7LWGO-gE" role="button"
                            data-fancybox="data-fancybox">
                            <div class="play-video-btn">
                              <div class="play-btn">
                                <img class="img-fluid play-icon" src="img/play-icon.svg" alt="" />
                              </div>
                              <div class="play-btn-text">Nuestro Video</div>
                            </div>
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
                        <span class="hollow-text">download</span> our app to
                        start your journy
                      </h1>
                    </div>
                    <div class="col-9 col-md-10 col-lg-8 mx-auto">
                      <p class="slide-subtitle narrow-centerd-text" data-splitting="words">
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Autem recusandae reiciendis esse? Corporis, quo
                        eum.
                      </p>
                    </div>
                    <div class="col-12">
                      <div class="cta-links-area wow fadeInUp" data-wow-delay="0.8s">
                        <a class="ma-btn-primary cta-link cta-link-primary wow fadeInUp" href="#0"
                          data-wow-delay="0.8s">download now</a>
                      </div>
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