<template>
<!-- Start  page-footer Section-->
  <footer class="page-footer dark-color-footer" id="page-footer">
    <div class="container">
      <div class="row justify-content-center footer-cols">
        <div class="col-12 col-md-8 col-lg-5 footer-col wow fadeInUp" data-wow-delay="0.3s">
          <h6 class="footer-col-title">Sobre Kernesys</h6>
          <div class="footer-col-content-wrapper">
            <p class="footer-text-about-us">
              Nuestro enfoque se centra en desarrollar software a medida que automatiza procesos, optimiza operaciones y permite a nuestros clientes alcanzar nuevos niveles de eficiencia y éxito empresarial.

            </p>
            <div class="social-icons" v-if="false">
              <div class="sc-wraper dir-row sc-size-32">
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
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3 footer-col wow fadeInUp" data-wow-delay="0.5s">
          <h6 class="footer-col-title">Redes sociales</h6>
          <div class="footer-col-content-wrapper">
            <ul class="footer-menu">
              <li class="footer-menu-item">
                <a class="footer-menu-link" href="https://www.facebook.com/Kernesys/">Facebook</a>
              </li>
              <li class="footer-menu-item">
                <a class="footer-menu-link" href="https://www.instagram.com/kernesys/">Instagram</a>
              </li>
              <li class="footer-menu-item">
                <a class="footer-menu-link" href="https://www.linkedin.com/company/kernesys/">linkedIn</a>
              </li>
            </ul>
          </div>
        </div>
<!--        <div class="col-12 col-md-6 col-lg-2 footer-col wow fadeInUp" data-wow-delay=".7s">
          <h6 class="footer-col-title">Recursos</h6>
          <div class="footer-col-content-wrapper">
            <ul class="footer-menu">
              <li class="footer-menu-item">
                <a class="footer-menu-link" href="#0">Soporte</a>
              </li>
              <li class="footer-menu-item">
                <a class="footer-menu-link" href="#0">Panel</a>
              </li>
              <li class="footer-menu-item">
                <a class="footer-menu-link" href="#0">Conductores</a>
              </li>
              <li class="footer-menu-item">
                <a class="footer-menu-link" href="#0">Proyectos</a>
              </li>
            </ul>
          </div>
        </div> -->
        <div class="col-12 col-md-8 col-lg-4 footer-col wow fadeInUp" data-wow-delay=".9s">
          <h6 class="footer-col-title">Informaci&oacute;n De Contacto</h6>
          <div class="footer-col-content-wrapper">
            <div class="contact-info-card">
              <i class="fas fa-envelope icon" style="color:white"></i><a class="text-lowercase info"
                href="mailto:contacto@kernesys.com">contacto@kernesys.com</a>
            </div>
            <div class="contact-info-card">
              <i class="fas fa-globe-africa icon" style="color:white"></i><a class="text-lowercase info" href="#0">www.kernesys.com</a>
            </div>
            <div class="contact-info-card">
              <i class="fas fa-map-marker-alt icon" style="color:white"></i><span class="info">Monterrey, Nuevo Le&oacute;n, M&eacute;xico </span>
            </div>
            <div class="contact-info-card">
              <i class="fas fa-mobile-alt icon" style="color:white"></i><a class="info" href="tel:8132471163">+52 8132471163 </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyrights">
      <div class="container">
        <div class="row ">
          <div class="col-12 col-md-6">
            <p class="creadits">
              &copy; 2019 Creado Por: Kernesys
            </p>
          </div>
          <div class="col-12 col-md-6" >
            <div class="terms-links">
              <a href="#0" @click.prevent="showTerminos">Terminos de uso</a> | <a href="#0" @click.prevent="showPrivacidad">Politica de Privacidad</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
<!-- End  page-footer Section-->
</template>

<script setup>
import Swal from 'sweetalert2';

const logoUrl = 'img/logokernesys.png';

const showTerminos = () => {
  Swal.fire({
    title: '<strong>Términos de Uso</strong>',
    imageUrl: logoUrl,
    imageWidth: 200,
    imageAlt: 'Kernesys Logo',
    html: `
      <div style="text-align: left; max-height: 400px; overflow-y: auto; font-size: 14px; line-height: 1.6; padding: 0 10px;">
        <p><strong>Última actualización:</strong> 28 de febrero de 2026</p>

        <p>Bienvenido a <strong>kernesys.com</strong>. Al acceder y utilizar este sitio web, aceptas cumplir con los siguientes términos y condiciones de uso.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">1. Uso del Sitio</h4>
        <p>Este sitio web es propiedad y está operado por <strong>Kernesys</strong>. El contenido proporcionado es únicamente con fines informativos sobre nuestros servicios de desarrollo de software, consultoría tecnológica y soluciones empresariales.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">2. Propiedad Intelectual</h4>
        <p>Todo el contenido de este sitio, incluyendo pero no limitado a textos, gráficos, logotipos, imágenes, código fuente y diseño, es propiedad de Kernesys y está protegido por las leyes de propiedad intelectual de México y tratados internacionales.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">3. Servicios</h4>
        <p>Kernesys ofrece servicios de desarrollo de software a la medida, automatización de procesos, integración de sistemas, servicios en la nube, desarrollo de aplicaciones móviles, ERP, CRM, CMS y e-commerce. Las especificaciones y alcances de cada proyecto se definen mediante acuerdos individuales con cada cliente.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">4. Limitación de Responsabilidad</h4>
        <p>Kernesys no será responsable por daños directos, indirectos, incidentales o consecuentes que resulten del uso o la imposibilidad de uso de este sitio web. La información se proporciona "tal cual" sin garantías de ningún tipo.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">5. Enlaces a Terceros</h4>
        <p>Este sitio puede contener enlaces a sitios web de terceros. Kernesys no se hace responsable del contenido, políticas de privacidad o prácticas de dichos sitios.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">6. Modificaciones</h4>
        <p>Kernesys se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en este sitio.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">7. Legislación Aplicable</h4>
        <p>Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa será resuelta ante los tribunales competentes de Monterrey, Nuevo León, México.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">8. Contacto</h4>
        <p>Para cualquier consulta sobre estos términos, puedes contactarnos en: <a href="mailto:contacto@kernesys.com" style="color: #074d7e;">contacto@kernesys.com</a></p>
      </div>
    `,
    width: 700,
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#074d7e',
    showCloseButton: true,
  });
};

const showPrivacidad = () => {
  Swal.fire({
    title: '<strong>Política de Privacidad</strong>',
    imageUrl: logoUrl,
    imageWidth: 200,
    imageAlt: 'Kernesys Logo',
    html: `
      <div style="text-align: left; max-height: 400px; overflow-y: auto; font-size: 14px; line-height: 1.6; padding: 0 10px;">
        <p><strong>Última actualización:</strong> 28 de febrero de 2026</p>

        <p>En <strong>Kernesys</strong>, respetamos tu privacidad y nos comprometemos a proteger la información personal que compartas con nosotros a través de este sitio web.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">1. Información que Recopilamos</h4>
        <p>Recopilamos información personal únicamente cuando nos la proporcionas voluntariamente a través de nuestro formulario de contacto:</p>
        <ul style="padding-left: 20px;">
          <li>Nombre completo</li>
          <li>Correo electrónico</li>
          <li>Asunto y mensaje</li>
        </ul>

        <h4 style="margin-top: 16px; color: #074d7e;">2. Uso de la Información</h4>
        <p>La información recopilada se utiliza exclusivamente para:</p>
        <ul style="padding-left: 20px;">
          <li>Responder a consultas y solicitudes de cotización</li>
          <li>Proporcionar información sobre nuestros servicios</li>
          <li>Dar seguimiento a proyectos potenciales</li>
        </ul>

        <h4 style="margin-top: 16px; color: #074d7e;">3. Protección de Datos</h4>
        <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción. Los datos del formulario se envían de forma segura mediante HTTPS.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">4. Cookies y Tecnologías de Rastreo</h4>
        <p>Este sitio utiliza Google Analytics para analizar el tráfico web. Google Analytics recopila información anónima sobre las visitas, incluyendo páginas visitadas, tiempo de permanencia y tipo de dispositivo. No se recopilan datos personales identificables a través de cookies.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">5. Compartición de Datos</h4>
        <p>Kernesys <strong>no vende, alquila ni comparte</strong> tu información personal con terceros, salvo cuando sea requerido por ley o autoridad competente.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">6. Derechos ARCO</h4>
        <p>De acuerdo con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP), tienes derecho a:</p>
        <ul style="padding-left: 20px;">
          <li><strong>Acceder</strong> a tus datos personales</li>
          <li><strong>Rectificar</strong> datos inexactos o incompletos</li>
          <li><strong>Cancelar</strong> el tratamiento de tus datos</li>
          <li><strong>Oponerte</strong> al uso de tus datos para ciertos fines</li>
        </ul>
        <p>Para ejercer tus derechos ARCO, envía un correo a <a href="mailto:contacto@kernesys.com" style="color: #074d7e;">contacto@kernesys.com</a>.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">7. Retención de Datos</h4>
        <p>Conservamos tu información personal solo durante el tiempo necesario para cumplir con los fines para los cuales fue recopilada, o según lo requieran las leyes aplicables.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">8. Cambios a esta Política</h4>
        <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Te notificaremos de cambios significativos publicando la nueva política en este sitio web.</p>

        <h4 style="margin-top: 16px; color: #074d7e;">9. Contacto</h4>
        <p>Si tienes preguntas sobre esta política de privacidad, contáctanos en:<br>
        <strong>Email:</strong> <a href="mailto:contacto@kernesys.com" style="color: #074d7e;">contacto@kernesys.com</a><br>
        <strong>Teléfono:</strong> +52 813 247 1163<br>
        <strong>Ubicación:</strong> Monterrey, Nuevo León, México</p>
      </div>
    `,
    width: 700,
    confirmButtonText: 'Entendido',
    confirmButtonColor: '#074d7e',
    showCloseButton: true,
  });
};
</script>