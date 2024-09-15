<template>
  <!-- Start  about Section-->
  <section class="about mega-section " id="tech-stack" >
    <div class="container">
      <div class="section-heading">
        <h4 class="section-title2">Nuestro Stack</h4>
        <p class="section-subtitle">
        </p>        
      </div>      
    </div>
    <div class="container">
      <div class="row justify-content-between" data-wow-delay="0.4s">
        <div class="col-lg-6 col-md-6">
          <img class="w-100 tech-stack-img" src="img/tech_stack_1.jpg" alt="Image">          
        </div>
        <div class="col-md-6 col-lg-5">

          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingOne">
                <button class="accordion-button accordion-button collapsed" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                  <strong>Front-end</strong>
                </button>
              </h2>
              <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Nuestra interfaz de usuario está diseñada para ofrecer una experiencia fluida y atractiva. Utilizamos tecnologías modernas como HTML5, CSS3 y JavaScript (con frameworks como <strong>Vue.js</strong>) para crear aplicaciones rápidas, interactivas y completamente responsivas. Nos enfocamos en la usabilidad y el diseño centrado en el usuario, asegurándonos de que nuestra plataforma se vea y funcione de manera impecable en cualquier dispositivo.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingTwo">
                <button class="accordion-button collapsed accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                  <strong>Back-end</strong>
                </button>
              </h2>
              <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Nuestro backend está construido sobre una arquitectura robusta y escalable, utilizando tecnologías como <strong>Laravel</strong>, <strong>FastApi</strong>, <strong>NestJS</strong> y <strong>Spring Boot</strong>. Estas herramientas nos permiten desarrollar APIs seguras, eficientes y altamente personalizables, garantizando un rendimiento óptimo y una rápida respuesta a las solicitudes del usuario. Nuestra infraestructura está diseñada para manejar grandes volúmenes de datos, con un enfoque en la escalabilidad y la seguridad, proporcionando una base sólida para el crecimiento continuo de la plataforma.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingThree">
                <button class="accordion-button collapsed accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                  <strong>Móvile</strong>
                </button>
              </h2>
              <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Desarrollamos aplicaciones móviles nativas con <strong>Flutter</strong>, lo que nos permite crear experiencias rápidas, fluidas y atractivas tanto en iOS como en Android. Gracias a su capacidad de desarrollo multiplataforma, aseguramos una experiencia de usuario consistente y de alta calidad en cualquier dispositivo móvil, reduciendo tiempos de desarrollo y manteniendo un código base único y eficiente
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFour">
                <button class="accordion-button collapsed accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                  <strong>Base de Datos</strong>
                </button>
              </h2>
              <div id="flush-collapseFour" class="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Implementamos una arquitectura de bases de datos flexible que combina lo mejor de los sistemas relacionales y no relacionales. 
                  Utilizamos <strong>MySQL</strong> y <strong>PostgreSQL</strong> para gestionar datos estructurados de manera eficiente, garantizando integridad y consistencia en nuestras transacciones. 
                  Para datos no estructurados, confiamos en <strong>MongoDB</strong>, que nos permite un almacenamiento ágil y escalable. 
                  Además, integramos <strong>Elasticsearch</strong> para ofrecer capacidades avanzadas de búsqueda full-text, brindando resultados rápidos y precisos en tiempo real, incluso sobre grandes volúmenes de datos.
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="flush-headingFive">
                <button class="accordion-button collapsed accordion-button" type="button" data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                  <strong>Cloud</strong>
                </button>
              </h2>
              <div id="flush-collapseFive" class="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                  Nuestra infraestructura está alojada en <strong>AWS</strong> (Amazon Web Services), lo que nos permite aprovechar una plataforma en la nube altamente confiable, escalable y segura. Utilizamos una variedad de servicios de AWS para garantizar alta disponibilidad, rendimiento optimizado y escalabilidad automática según las necesidades del proyecto. Desde bases de datos y almacenamiento hasta cómputo y seguridad, AWS nos proporciona las herramientas necesarias para entregar soluciones en la nube con eficiencia y flexibilidad.
                </div>
              </div>
            </div>
          </div>          
        </div>        
      </div>
      <!--end of row-->
    </div>
    <!--end of container-->

  </section>
  <!-- End  about Section-->
</template>

<style scoped>

  .accordion-button{
    border-radius: 6px !important;
    font-size: 1.3rem;
  }

  .accordion-button:not(.collapsed){
    background-color: #074d7e;
    color: white;
  }

  .accordion-button:focus{
    box-shadow: none;
  }

  .tech-stack-img{
    border-radius: 0.5rem;
  }
</style>