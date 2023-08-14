<template>
<!-- Start  portfolio Section-->
<section class="portfolio portfolio-squared-with-gaps mega-section section-bg-shade" id="portfolio">
    <div class="container">
      <div class="section-heading center-heading">
        <h2 class="section-title wow" data-splitting="chars">
          a portfolio of our work
        </h2>
        <p class="section-subtitle wow fadeInUp" data-wow-delay=".5s">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt,
          architecto cupiditate odio rerum est
        </p>
        <div class="line line-solid-main-color wow fadeIn" data-wow-delay="1s"></div>
      </div>
      <div class="portfolio-wraper wow fadeIn" data-wow-delay="0s">
        <!--a menu of links to show the photos users needs   -->
        <ul class="portfolio-btn-list">
          <li class="portfolio-btn active" data-filter="*">all</li>
          <li class="portfolio-btn" data-filter=".programming">
            programming
          </li>
          <li class="portfolio-btn" data-filter=".consulting">consulting</li>
          <li class="portfolio-btn" data-filter=".mobile">mobile app</li>
          <li class="portfolio-btn" data-filter=".blog">blog</li>
        </ul>
        <div class="portfolio-group">
          <div class="row g-0">
            <div class="col-12 col-sm-6 col-lg-4 portfolio-item programming">
              <div class="item">
                <a class="portfolio-img-link" href="img/1-portfolio.jpg" data-fancybox=".filter">
                  <div class="overlay overlay-color"></div>
                  <img class="portfolio-img img-fluid" src="img/1-portfolio.jpg"
                    alt="portfolio item photo" /><i class="fas fa-search icon"></i>
                </a>
                <div class="item-info">
                  <span class="info-title">programming </span>
                  <ul class="tags-list">
                    <li class="tag-item">
                      <a class="tag-link" href="#">c#</a>
                    </li>
                    <li class="tag-item">
                      <a class="tag-link" href="#">Java </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 portfolio-item blog">
              <div class="item">
                <a class="portfolio-img-link" href="img/2-portfolio.jpg" data-fancybox=".filter">
                  <div class="overlay overlay-color"></div>
                  <img class="portfolio-img img-fluid" src="img/2-portfolio.jpg"
                    alt="portfolio item photo" /><i class="fas fa-search icon"></i>
                </a>
                <div class="item-info">
                  <span class="info-title">blog </span>
                  <ul class="tags-list">
                    <li class="tag-item">
                      <a class="tag-link" href="#">wordpress</a>
                    </li>
                    <li class="tag-item">
                      <a class="tag-link" href="#">bloger </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 portfolio-item programming">
              <div class="item">
                <a class="portfolio-img-link" href="img/3-portfolio.jpg" data-fancybox=".filter">
                  <div class="overlay overlay-color"></div>
                  <img class="portfolio-img img-fluid" src="img/3-portfolio.jpg"
                    alt="portfolio item photo" /><i class="fas fa-search icon"></i>
                </a>
                <div class="item-info">
                  <span class="info-title">programming </span>
                  <ul class="tags-list">
                    <li class="tag-item">
                      <a class="tag-link" href="#">c++</a>
                    </li>
                    <li class="tag-item">
                      <a class="tag-link" href="#">ruby </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 portfolio-item consulting">
              <div class="item">
                <a class="portfolio-img-link" href="img/4-portfolio.jpg" data-fancybox=".filter">
                  <div class="overlay overlay-color"></div>
                  <img class="portfolio-img img-fluid" src="img/4-portfolio.jpg"
                    alt="portfolio item photo" /><i class="fas fa-search icon"></i>
                </a>
                <div class="item-info">
                  <span class="info-title">consulting</span>
                  <ul class="tags-list">
                    <li class="tag-item">
                      <a class="tag-link" href="#">law</a>
                    </li>
                    <li class="tag-item">
                      <a class="tag-link" href="#">finance</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-12 col-sm-6 col-lg-4 portfolio-item blog">
              <div class="item">
                <a class="portfolio-img-link" href="img/5-portfolio.jpg" data-fancybox=".filter">
                  <div class="overlay overlay-color"></div>
                  <img class="portfolio-img img-fluid" src="img/5-portfolio.jpg"
                    alt="portfolio item photo" /><i class="fas fa-search icon"></i>
                </a>
                <div class="item-info">
                  <span class="info-title">blog</span>
                  <ul class="tags-list">
                    <li class="tag-item">
                      <a class="tag-link" href="#">wordpress</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="col-12 col-sm-6 col-lg-4 portfolio-item mobile">
              <div class="item">
                <a class="portfolio-img-link" href="img/6-portfolio.jpg" data-fancybox=".filter">
                  <div class="overlay overlay-color"></div>
                  <img class="portfolio-img img-fluid" src="img/6-portfolio.jpg"
                    alt="portfolio item photo" /><i class="fas fa-search icon"></i>
                </a>
                <div class="item-info">
                  <span class="info-title">mobile</span>
                  <ul class="tags-list">
                    <li class="tag-item">
                      <a class="tag-link" href="#">samsung</a>
                    </li>
                    <li class="tag-item">
                      <a class="tag-link" href="#">oppo </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Start .see-more-area-->
      <div class="see-more-area wow fadeInUp" data-wow-delay="0s">
        <a class="ma-btn-primary" href="#0">see our portfolio</a>
      </div>
      <!--End .see-more-area-->
    </div>
</section>
<!-- End  portfolio Section-->
</template>