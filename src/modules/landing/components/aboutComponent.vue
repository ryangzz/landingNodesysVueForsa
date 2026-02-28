<template> 
<!-- Start  about Section-->
<section class="about mega-section" id="about">
    <div class="container">
      <!-- Start first about div-->
      <div class="content-block">
        <div class="row">
          <div class="col-12 col-lg-6 d-flex align-items-center about-col wow fadeInUp" data-wow-delay="0.2s">
            <div class="img-area">
              <div class="photo-banner-end" v-if="true">
                <i class="fas fa-pen-nib icon"></i>
                <p class="banner-text">
                  Potenciamos negocios con soluciones tecnológicas innovadoras y personalizadas.

                </p>
              </div>
              <picture>
                <source type="image/webp" srcset="img/about-1_photo.webp" />
                <img class="about-img img-fluid" src="img/about-1_photo.png" alt="Kernesys - Empresa mexicana de desarrollo de software y transformación digital desde 2019" width="616" height="800" loading="lazy" decoding="async" />
              </picture>
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex align-items-center about-col wow fadeInUp" data-wow-delay="0.4s">
            <div class="text-area">
              <span class="tag-line">Sobre nosotros</span>
              <h2 class="about-title">
                Transformación tecnológica con sello mexicano
              </h2>
              <p class="about-text">
                Estamos orgullosos de ser una empresa 100% mexicana dedicada a impulsar la transformación digital de las empresas. Nuestro compromiso es ayudar a nuestros clientes a optimizar y automatizar sus procesos y reglas de negocio, llevándolos a alcanzar nuevos niveles de eficiencia y éxito.
              </p>

            <!--  <div class="about-stats stats-counter">
                <div class="row g-0">
                  <div class="col-4">
                    <div class="stat-box">
                      <p class="stat-num">
                        <span class="sign">+</span><span class="counter" data-from="10" data-to="60" data-speed="3000"
                          data-refresh-interval="50"></span>
                      </p>
                      <h5 class="stat-desc">Proyectos</h5>
                    </div>
                  </div>
                  
                  <div class="col-4">
                    <div class="stat-box">
                      <p class="stat-num">
                        <span class="sign">+</span><span class="counter" data-from="25" data-to="50" data-speed="3000"
                          data-refresh-interval="50"></span>
                      </p>
                      <h5 class="stat-desc">Clientes</h5>
                    </div>
                  </div>
                  <div class="col-4">
                    <div class="stat-box">
                      <p class="stat-num">
                        <span class="sign">+</span><span class="counter" data-from="0" data-to="15" data-speed="3000"
                          data-refresh-interval="50"></span>
                      </p>
                      <h5 class="stat-desc">Migraciones de software</h5>
                    </div>
                  </div>
                </div>
              </div> -->
              <a class="ma-btn-primary d-none" href="#0">Leer Mas</a>
            </div>
          </div>
        </div>
      </div>
      <!--End first about div-->
      <!-- Start Second about div-->
      <div class="content-block">
        <div class="row">
          <div class="col-12 col-lg-6 d-flex align-items-center order-2 order-lg-0 about-col wow fadeInUp"
            data-wow-delay="0.2s">
            <div class="text-area">
              <span class="tag-line">Nuestra Mision</span>
              <h2 class="about-title">
                Apoyar en el camino de los clientes para alcanzar el exito
              </h2>
              <div class="info-items">
                <div class="row g-0">
                  <div class="col-12">
                    <p class="about-text">
                      En Kernesys, nuestra misión es acompañarte en tu camino hacia el éxito empresarial, proporcionándote soluciones tecnológicas innovadoras que transformen y optimicen sus procesos. Nos comprometemos a ayudarte a alcanzar tus objetivos mediante la automatización y sistematización de sus operaciones, permitiéndote concentrarse en lo que realmente importa: hacer crecer tu negocio.
                    </p>
                  </div>
                  <div class="col-12">
                    <ul class="menu-items">
                      <li class="info-item">
                        <picture><source type="image/webp" srcset="img/icon-2.webp" /><img class="info-img-icon" src="img/icon-2.png" alt="Experiencias únicas en desarrollo de software - Kernesys" width="128" height="128" draggable="false" loading="lazy" decoding="async" /></picture>
                        <div class="info-content">
                          <h5 class="info-title">Experiencias unicas</h5>
                          <p class="info-text">
                            Nos dedicamos a crear experiencias únicas a través de nuestras soluciones de software a medida. Cada proyecto es una oportunidad para desarrollar aplicaciones que no solo cumplen con tus necesidades empresariales, sino que también mejoran la experiencia de usuario y fortalecen tu marca en el mercado.
                          </p>
                        </div>
                      </li>
                      <li class="info-item">
                        <picture><source type="image/webp" srcset="img/icon-3.webp" /><img class="info-img-icon" src="img/icon-3.png" alt="Valor empresarial con tecnología avanzada - Kernesys" width="128" height="128" draggable="false" loading="lazy" decoding="async" /></picture>
                        <div class="info-content">
                          <h5 class="info-title">Valor empresarial</h5>
                          <p class="info-text">
                            Agregamos valor a tu negocio mediante la implementación de tecnologías avanzadas y estrategias innovadoras. Nuestro enfoque en la excelencia en el desarrollo de software asegura que cada solución no solo resuelva problematicas, sino que también impulse el crecimiento y la eficiencia de tu empresa.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <a class="ma-btn-primary d-none" href="#0">Leer Mas</a>
            </div>
          </div>
          <div class="col-12 col-lg-6 d-flex align-items-center about-col order-0 order-lg-2 wow fadeInUp"
            data-wow-delay="0.4s">
            <div class="img-area">
              <div class="photo-banner-start">
                <i class="fas fa-code icon"></i>
                <p class="banner-text">
                  Innovamos para optimizar y potenciar tu éxito empresarial
                </p>
              </div>
              <picture>
                <source type="image/webp" srcset="img/about-2_photo.webp" />
                <img class="img-fluid about-img" src="img/about-2_photo.png" alt="Kernesys - Misión de acompañar a clientes hacia el éxito con soluciones tecnológicas" width="600" height="800" loading="lazy" decoding="async" />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <!--End Second about div-->
    </div>
  </section>
<!-- End  about Section-->
</template>