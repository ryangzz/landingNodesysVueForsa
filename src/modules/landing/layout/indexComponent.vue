<template>
  <header-menu></header-menu>
  <slider-component></slider-component>
  <services-component></services-component>
  <about-component></about-component>
  <portafolio-component></portafolio-component>
  <video-component></video-component>
  <our-team-component></our-team-component>
  <our-clients-component></our-clients-component>
  <testimonials-component></testimonials-component>
  <faq-component></faq-component>
  <footer-component></footer-component>
  <loading-component></loading-component>
  <back-top-component></back-top-component>
</template>
<script>
import { defineAsyncComponent } from 'vue';
export default{
  name:"navBarDayBook",
  components:{
    'header-menu':defineAsyncComponent(()=> import('../components/headerComponent.vue')),
    'slider-component':defineAsyncComponent(()=> import('../components/sliderComponent.vue')),
    'services-component':defineAsyncComponent(()=> import('../components/servicesComponent.vue')),
    'about-component':defineAsyncComponent(()=> import('../components/aboutComponent.vue')),
    'portafolio-component':defineAsyncComponent(()=> import('../components/portafolioComponent.vue')),
    'video-component':defineAsyncComponent(()=> import('../components/videoComponent.vue')),
    'our-team-component':defineAsyncComponent(()=> import('../components/ourTeamComponent.vue')),
    'our-clients-component':defineAsyncComponent(()=> import('../components/ourClientsComponent.vue')),
    'testimonials-component':defineAsyncComponent(()=> import('../components/testimonialsComponent.vue')),
    'faq-component':defineAsyncComponent(()=> import('../components/faqComponent.vue')),
    'footer-component':defineAsyncComponent(()=> import('../components/footerComponent.vue')),
    'loading-component':defineAsyncComponent(()=> import('../components/loadingComponent.vue')),
    'back-top-component':defineAsyncComponent(()=> import('../components/backTopComponent.vue')),
  }
}

</script>