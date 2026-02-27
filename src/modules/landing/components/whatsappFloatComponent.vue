<template>
  <a
    class="whatsapp-float"
    href="https://wa.me/528123686540?text=Hola%20Kernesys,%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Enviar mensaje por WhatsApp a Kernesys"
    title="Escríbenos por WhatsApp"
  >
    <i class="fab fa-whatsapp"></i>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  right: 22px;
  bottom: 95px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  z-index: 9999;
  box-shadow: 0 10px 24px rgba(37, 211, 102, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  text-decoration: none !important;
  border: 0;
  outline: 0;
  line-height: 1;
}

.whatsapp-float:hover {
  color: #fff;
  transform: translateY(-2px) scale(1.03);
  box-shadow: 0 12px 28px rgba(37, 211, 102, 0.45);
  text-decoration: none !important;
}

.whatsapp-float:focus,
.whatsapp-float:active,
.whatsapp-float:visited {
  color: #fff;
  text-decoration: none !important;
}

.whatsapp-float i {
  display: block;
  line-height: 1;
}

@media (max-width: 768px) {
  .whatsapp-float {
    right: 16px;
    bottom: 88px;
    width: 52px;
    height: 52px;
    font-size: 1.8rem;
  }
}
</style>