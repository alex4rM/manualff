import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'es-PE',

  title: 'FasterFacturas',
  description: 'Manual de usuario para el sistema FasterFacturas',

  theme: defaultTheme({
    logo: '/img/logo.png',

    navbar: [
      {text: 'Bienvenido', link: '/'},
      {
        text: 'Manual de Usuario',
        link:'/guide/get-started.md'
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: 'Introducción',
          link: '/guide/get-started.md',
        },
        {
          text: 'Ventas',
          collapsible: true,
          children: [
            '/guide/ventas/a_nuevaventa.md',
            '/guide/ventas/b_listadodeventas.md',
            '/guide/ventas/c_notas_credito.md',
            '/guide/ventas/d_anulaciones.md',
            '/guide/ventas/e_resumenes.md',
            '/guide/ventas/f_pedidos.md',
            '/guide/ventas/g_cotizacion.md',
            '/guide/ventas/h_historial_ventas.md',
          ],
        },
        {
          text: 'Compras',
          collapsible: true,
          children: [
            '/guide/compras/compras.md',

          ],
        },
        {
          text: 'Guias de Remision',
          collapsible: true,
          children: [
            '/guide/guiasremision/guiasremision.md',
            '/guide/guiasremision/crearguia.md',
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
})
