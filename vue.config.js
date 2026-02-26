const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  
  // SEO: Configuración para mejorar el rendimiento y la indexación
  chainWebpack: config => {
    // Preload de fuentes para mejor rendimiento (Core Web Vitals)
    config.plugin('html').tap(args => {
      args[0].title = 'Kernesys | Desarrollo de Software a la Medida en Monterrey, México | ERP, CRM, Apps Móviles'
      args[0].meta = {
        description: 'Kernesys es una consultora de software en Monterrey, Nuevo León, México. Desarrollo web, aplicaciones móviles, ERP, CRM, CMS, e-commerce, integraciones de sistemas y servicios en la nube desde 2019.'
      }
      return args
    })
  },

  // Optimización de producción
  productionSourceMap: false,
  
  // Configuración del dev server
  devServer: {
    historyApiFallback: true
  }
})
