<template>
  <!-- Start Tech Stack Section -->
  <section class="tech-stack-section mega-section" id="tech-stack">
    <div class="container">

      <!-- Section Heading -->
      <div class="section-heading center-heading">
        <h2 class="section-title2 wow" data-splitting="chars">
          Nuestro Stack Tecnológico
        </h2>
        <p class="section-subtitle wow fadeInUp" data-wow-delay=".5s">
          Combinamos las tecnologías más potentes y modernas del mercado para construir soluciones robustas, escalables y de alto rendimiento.
        </p>
        <div class="line line-solid-main-color wow fadeIn" data-wow-delay="1s"></div>
      </div>

      <!-- Category Filter Tabs -->
      <div class="tech-tabs wow fadeInUp" data-wow-delay="0.3s">
        <button
          v-for="cat in categories"
          :key="cat.id"
          class="tech-tab-btn"
          :class="{ active: activeCategory === cat.id }"
          @click="activeCategory = cat.id"
        >
          <i :class="cat.icon"></i>
          <span>{{ cat.label }}</span>
        </button>
      </div>

      <!-- Tech Grid -->
      <div class="tech-grid wow fadeInUp" data-wow-delay="0.4s">
        <transition-group name="tech-card-anim" tag="div" class="tech-grid-inner">
          <div
            v-for="tech in filteredTechs"
            :key="tech.name"
            class="tech-card"
            :style="{ '--accent': tech.color }"
          >
            <div class="tech-card-glow"></div>
            <div class="tech-card-content">
              <div class="tech-icon-wrapper">
                <i :class="tech.icon" :style="{ color: tech.color }"></i>
              </div>
              <h4 class="tech-name">{{ tech.name }}</h4>
              <span class="tech-category-badge">{{ tech.categoryLabel }}</span>
            </div>
          </div>
        </transition-group>
      </div>

      <!-- Description Cards por Categoría -->
      <div class="tech-descriptions wow fadeInUp" data-wow-delay="0.5s">
        <div class="row g-4">
          <div class="col-12 col-md-6 col-lg-4" v-for="cat in categories.filter(c => c.id !== 'all')" :key="cat.id">
            <div class="tech-desc-card" :style="{ '--cat-color': cat.color }">
              <div class="tech-desc-icon">
                <i :class="cat.icon"></i>
              </div>
              <h5 class="tech-desc-title">{{ cat.label }}</h5>
              <p class="tech-desc-text">{{ cat.description }}</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <!-- End Tech Stack Section -->
</template>

<script>
import { ref, computed } from 'vue';

export default {
  name: 'TechStackComponent',
  setup() {
    const activeCategory = ref('all');

    const categories = [
      {
        id: 'all',
        label: 'Todos',
        icon: 'fas fa-th',
        color: '#074d7e',
        description: ''
      },
      {
        id: 'frontend',
        label: 'Frontend',
        icon: 'fas fa-palette',
        color: '#42b883',
        description: 'Creamos interfaces modernas, interactivas y completamente responsivas con las mejores tecnologías del ecosistema JavaScript, garantizando experiencias de usuario excepcionales en cualquier dispositivo.'
      },
      {
        id: 'backend',
        label: 'Backend',
        icon: 'fas fa-server',
        color: '#FF2D20',
        description: 'Arquitecturas robustas y escalables con APIs seguras y de alto rendimiento. Nuestro backend maneja grandes volúmenes de datos con eficiencia y brinda una base sólida para el crecimiento continuo.'
      },
      {
        id: 'mobile',
        label: 'Móvil',
        icon: 'fas fa-mobile-alt',
        color: '#027DFD',
        description: 'Desarrollamos aplicaciones móviles multiplataforma para iOS y Android con experiencias rápidas, fluidas y de alta calidad, reduciendo tiempos de desarrollo con un código base único.'
      },
      {
        id: 'database',
        label: 'Bases de Datos',
        icon: 'fas fa-database',
        color: '#336791',
        description: 'Arquitectura flexible que combina bases de datos relacionales y no relacionales, con capacidades avanzadas de búsqueda full-text para resultados rápidos y precisos en tiempo real.'
      },
      {
        id: 'devops',
        label: 'Cloud & DevOps',
        icon: 'fas fa-cloud',
        color: '#FF9900',
        description: 'Infraestructura en la nube altamente confiable, escalable y segura con contenedorización y despliegue automatizado para garantizar alta disponibilidad y rendimiento optimizado.'
      }
    ];

    const techs = [
      // Frontend
      { name: 'Vue.js', icon: 'fab fa-vuejs', color: '#42b883', category: 'frontend', categoryLabel: 'Frontend' },
      { name: 'JavaScript', icon: 'fab fa-js-square', color: '#F7DF1E', category: 'frontend', categoryLabel: 'Frontend' },
      { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26', category: 'frontend', categoryLabel: 'Frontend' },
      { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6', category: 'frontend', categoryLabel: 'Frontend' },
      { name: 'Inertia.js', icon: 'fas fa-bolt', color: '#9553E9', category: 'frontend', categoryLabel: 'Frontend' },

      // Backend
      { name: 'Laravel', icon: 'fab fa-laravel', color: '#FF2D20', category: 'backend', categoryLabel: 'Backend' },
      { name: 'PHP', icon: 'fab fa-php', color: '#777BB4', category: 'backend', categoryLabel: 'Backend' },
      { name: 'NestJS', icon: 'fab fa-node-js', color: '#E0234E', category: 'backend', categoryLabel: 'Backend' },
      { name: 'Python', icon: 'fab fa-python', color: '#3776AB', category: 'backend', categoryLabel: 'Backend' },
      { name: 'Django', icon: 'fab fa-python', color: '#092E20', category: 'backend', categoryLabel: 'Backend' },
      { name: 'FastAPI', icon: 'fab fa-python', color: '#009688', category: 'backend', categoryLabel: 'Backend' },
      { name: 'Java', icon: 'fab fa-java', color: '#ED8B00', category: 'backend', categoryLabel: 'Backend' },
      { name: 'Spring Boot', icon: 'fab fa-java', color: '#6DB33F', category: 'backend', categoryLabel: 'Backend' },
      { name: 'C#', icon: 'fas fa-code', color: '#68217A', category: 'backend', categoryLabel: 'Backend' },
      { name: 'C++', icon: 'fas fa-code', color: '#00599C', category: 'backend', categoryLabel: 'Backend' },

      // Mobile
      { name: 'Flutter', icon: 'fas fa-mobile-alt', color: '#027DFD', category: 'mobile', categoryLabel: 'Móvil' },
      { name: 'Android', icon: 'fab fa-android', color: '#3DDC84', category: 'mobile', categoryLabel: 'Móvil' },
      { name: 'iOS', icon: 'fab fa-apple', color: '#999999', category: 'mobile', categoryLabel: 'Móvil' },

      // Databases
      { name: 'MySQL', icon: 'fas fa-database', color: '#4479A1', category: 'database', categoryLabel: 'Base de Datos' },
      { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791', category: 'database', categoryLabel: 'Base de Datos' },
      { name: 'MongoDB', icon: 'fas fa-leaf', color: '#47A248', category: 'database', categoryLabel: 'Base de Datos' },
      { name: 'Elasticsearch', icon: 'fas fa-search', color: '#FEC514', category: 'database', categoryLabel: 'Base de Datos' },

      // Cloud & DevOps
      { name: 'AWS', icon: 'fab fa-aws', color: '#FF9900', category: 'devops', categoryLabel: 'Cloud & DevOps' },
      { name: 'Docker', icon: 'fab fa-docker', color: '#2496ED', category: 'devops', categoryLabel: 'Cloud & DevOps' },
      { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032', category: 'devops', categoryLabel: 'Cloud & DevOps' },
      { name: 'Linux', icon: 'fab fa-linux', color: '#FCC624', category: 'devops', categoryLabel: 'Cloud & DevOps' },
    ];

    const filteredTechs = computed(() => {
      if (activeCategory.value === 'all') return techs;
      return techs.filter(t => t.category === activeCategory.value);
    });

    return { activeCategory, categories, techs, filteredTechs };
  }
};
</script>

<style scoped>

/* ===== Section Base ===== */
.tech-stack-section {
  background: linear-gradient(180deg, #f8fafc 0%, #eef2f7 100%);
  padding: 100px 0;
  overflow: hidden;
}

/* ===== Category Tabs ===== */
.tech-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 50px;
}

.tech-tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 22px;
  border: 2px solid #d5dce6;
  border-radius: 50px;
  background: white;
  color: #4a5568;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-family: 'Nunito', sans-serif;
}

.tech-tab-btn i {
  font-size: 1rem;
  transition: transform 0.3s ease;
}

.tech-tab-btn:hover {
  border-color: #074d7e;
  color: #074d7e;
  transform: translateY(-2px);
  box-shadow: 0 4px 15px rgba(7, 77, 126, 0.15);
}

.tech-tab-btn.active {
  background: linear-gradient(135deg, #074d7e 0%, #0a6bab 100%);
  border-color: #074d7e;
  color: white;
  box-shadow: 0 6px 20px rgba(7, 77, 126, 0.3);
}

.tech-tab-btn.active i {
  transform: scale(1.15);
}

/* ===== Tech Grid ===== */
.tech-grid {
  margin-bottom: 60px;
}

.tech-grid-inner {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 20px;
}

/* ===== Tech Card ===== */
.tech-card {
  position: relative;
  border-radius: 16px;
  background: white;
  padding: 28px 16px;
  text-align: center;
  cursor: default;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: hidden;
  border: 1px solid #e8edf2;
}

.tech-card-glow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--accent, #074d7e);
  opacity: 0;
  transition: all 0.4s ease;
}

.tech-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.tech-card:hover .tech-card-glow {
  opacity: 1;
  height: 4px;
}

.tech-card-content {
  position: relative;
  z-index: 1;
}

.tech-icon-wrapper {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #f0f4f8 0%, #e2e8f0 100%);
  transition: all 0.4s ease;
}

.tech-card:hover .tech-icon-wrapper {
  transform: scale(1.1);
  background: linear-gradient(135deg, #e8f4fd 0%, #dbeafe 100%);
}

.tech-icon-wrapper i {
  font-size: 1.8rem;
  transition: all 0.3s ease;
}

.tech-card:hover .tech-icon-wrapper i {
  transform: scale(1.1);
}

.tech-name {
  font-size: 0.95rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 6px;
  letter-spacing: -0.01em;
}

.tech-category-badge {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  color: #718096;
  background: #f1f5f9;
  padding: 3px 10px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

/* ===== Description Cards ===== */
.tech-desc-card {
  background: white;
  border-radius: 20px;
  padding: 32px 28px;
  height: 100%;
  position: relative;
  overflow: hidden;
  border: 1px solid #e8edf2;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-desc-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--cat-color, #074d7e);
  opacity: 0.8;
}

.tech-desc-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  border-color: transparent;
}

.tech-desc-icon {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  background: linear-gradient(135deg, #074d7e 0%, #0a6bab 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
}

.tech-desc-icon i {
  font-size: 1.3rem;
  color: white;
}

.tech-desc-title {
  font-size: 1.15rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 12px;
}

.tech-desc-text {
  font-size: 0.9rem;
  line-height: 1.7;
  color: #64748b;
  margin-bottom: 0;
}

/* ===== Animations ===== */
.tech-card-anim-enter-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.tech-card-anim-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
}

.tech-card-anim-enter-from {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

.tech-card-anim-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(-20px);
}

.tech-card-anim-move {
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

/* ===== Responsive ===== */
@media (max-width: 991px) {
  .tech-grid-inner {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 16px;
  }
}

@media (max-width: 767px) {
  .tech-stack-section {
    padding: 70px 0;
  }

  .tech-tabs {
    gap: 8px;
    margin-bottom: 36px;
  }

  .tech-tab-btn {
    padding: 8px 16px;
    font-size: 0.82rem;
  }

  .tech-tab-btn span {
    display: none;
  }

  .tech-tab-btn i {
    font-size: 1.1rem;
  }

  .tech-grid-inner {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .tech-card {
    padding: 20px 10px;
    border-radius: 12px;
  }

  .tech-icon-wrapper {
    width: 50px;
    height: 50px;
    border-radius: 12px;
  }

  .tech-icon-wrapper i {
    font-size: 1.4rem;
  }

  .tech-name {
    font-size: 0.82rem;
  }

  .tech-category-badge {
    display: none;
  }
}

@media (max-width: 420px) {
  .tech-grid-inner {
    grid-template-columns: repeat(2, 1fr);
  }
}

</style>