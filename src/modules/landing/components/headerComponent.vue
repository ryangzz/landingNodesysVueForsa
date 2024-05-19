<script setup>
import { inject,onMounted } from 'vue';

const appjs = inject('appjs')
onMounted(() => {
  appjs()
  // Tu lógica adicional aquí
})
</script>
<template>
  <header class="page-header menu-on-end" id="page-header">
    <div class="container">
      <nav class="main-navbar" id="main-nav">
        <a class="navbar-brand" href="#">
          <img class="brand-logo light-logo img-fluid" src="img/logo-light.png" alt="" />
          <img class="brand-logo dark-logo img-fluid" src="img/logo-dark.png" alt="" />
        </a>
        <div class="menu-toggler-btn">
          <span></span><span></span><span></span>
        </div>
        <div class="navbar-menu-wraper" id="navbar-menu-wraper">
          <ul class="navbar-nav mobile-menu">
            <li class="nav-item has-sub-menu">
              <a class="nav-link" href="#page-hero"><i class="fas fa-home icon"></i>Inicio<i
                  class="fas fa-chevron-down down-Arrow-icon">
                </i></a>
              <ul class="sub-menu d-none">
                <li class="nav-item sub-menu-item">
                  <a class="nav-link sub-menu-link" href="index-dark.html"><i
                      class="fas fa-home icon"></i>index-dark</a>
                </li>
                <li class="nav-item sub-menu-item">
                  <a class="nav-link sub-menu-link" href="index-rtl.html"><i
                      class="fas fa-home icon"></i>index-light-RTL</a>
                </li>
                <li class="nav-item sub-menu-item">
                  <a class="nav-link sub-menu-link" href="index-dark-rtl.html"><i
                      class="fas fa-home icon"></i>index-dark-RTL</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#services"><i class="fas fa-address-card icon"></i>Servicios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about"><i class="fas fa-cogs icon"></i>Nosotros</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#portfolio"><i class="fas fa-camera-retro icon"></i>Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#pricing"><i class="fas fa-file-invoice-dollar icon"></i>Precios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#testimonials"><i class="fas fa-comments icon"></i>Testimmonios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#faq"><i class="fas fa-question-circle icon"></i>Preguntas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#contact-us"><i class="fas fa-mobile-alt icon"></i>Contactanos</a>
            </li>
          </ul>
        </div>
        <a class="header-cta ma-btn-primary" href="#0">Suscribete</a>
      </nav>
    </div>
  </header>
</template>