<template>
  <header-menu></header-menu>
  <slider-component></slider-component>
  <services-component></services-component>
  <about-component></about-component>
  <ourclients-component></ourclients-component>
  <contact-us-component/>
  <footer-component></footer-component>
  <loading-component></loading-component>
  <back-top-component></back-top-component>
  
</template>
<script>
import { defineAsyncComponent } from 'vue';

import contactUsComponent from '../components/ContactUsComponent.vue';

export default{
  name:"navBarDayBook",
  components:{
    'contact-us-component': contactUsComponent,
    'header-menu':defineAsyncComponent(()=> import('../components/headerComponent.vue')),
    'slider-component':defineAsyncComponent(()=> import('../components/sliderComponent.vue')),
    'services-component':defineAsyncComponent(()=> import('../components/servicesComponent.vue')),
    'about-component':defineAsyncComponent(()=> import('../components/aboutComponent.vue')),
    'ourclients-component': defineAsyncComponent(()=> import('../components/ourClientsComponent.vue')),
    'footer-component':defineAsyncComponent(()=> import('../components/footerComponent.vue')),
    'loading-component':defineAsyncComponent(()=> import('../components/loadingComponent.vue')),
    'back-top-component':defineAsyncComponent(()=> import('../components/backTopComponent.vue')),
  },
  mounted() {
  },
}

</script>