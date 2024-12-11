import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'es-PE',

  title: 'FasterFacturas GOLD',
  description: 'Manual de usuario para el sistema FasterFacturas GOLD',

  theme: defaultTheme({
    logo: '/img/logobxb.png',
    lastUpdated: true, // Desactiva "Last Updated"
    contributors: false, // Desactiva "Contributors"

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
            '/guide/compras/a_nuevacompra.md',
            '/guide/compras/b_listadodeCompras.md',
            '/guide/compras/c_proveedores.md',
            '/guide/compras/d_ordendeCompra.md',

          ],
        },
        {
          text: 'Finanzas',
          collapsible: true,
          children: [
            '/guide/finanzas/a_cuentas.md',
            '/guide/finanzas/b_movimientos.md',
            '/guide/finanzas/c_cuentasCobrar.md',
            '/guide/finanzas/d_cuentasPagar.md',

          ],
        },
        {
          text: 'Configuraciones',
          collapsible: true,
          children: [
            '/guide/configuraciones/a_logo.md',
            '/guide/configuraciones/b_canalesVenta.md',
            '/guide/configuraciones/c_unidadesMed.md',
            '/guide/configuraciones/d_sucursales.md',
            '/guide/configuraciones/e_almacenes.md',
            '/guide/configuraciones/f_terminosPago.md',
            '/guide/configuraciones/g_metodosPago.md',
            '/guide/configuraciones/h_usuarios.md',
            '/guide/configuraciones/i_rolesPerm.md',
            '/guide/configuraciones/j_terminales.md',
            '/guide/configuraciones/k_configuraciones.md',
            '/guide/configuraciones/l_integrarSunat.md',
            '/guide/configuraciones/m_apiToken.md',


          ],
        },
        {
          text: 'Caja',
          collapsible: true,
          children: [
            '/guide/caja/a_cajaActual.md',
            '/guide/caja/b_cierreCaja.md',

          ],
        },
        {
          text: 'Movimientos',
          collapsible: true,
          children: [
            '/guide/movimientos/movimientos.md',

          ],
        },
        {
          text: 'Productos',
          collapsible: true,
          children: [
            '/guide/productos/a_miInventario.md',
            '/guide/productos/b_productos.md',
            '/guide/productos/c_categorias.md',
            '/guide/productos/d_marcas.md',
            '/guide/productos/e_codigoBarras.md',
            '/guide/productos/f_importar.md',
            '/guide/productos/g_actualizarProductos.md',
            '/guide/productos/h_actualizarStock.md',
            '/guide/productos/i_guiasRemision.md',
            '/guide/productos/j_transferencias.md',
            '/guide/productos/k_ajustes.md',

          ],
        },
        {
          text: 'Contactos',
          collapsible: true,
          children: [
            '/guide/contactos/a_clientes.md',
            '/guide/contactos/b_proveedores.md',

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
        {
          text: 'Reportes',
          collapsible: true,
          children: [
            {
              text: 'Ventas',
              collapsible: true,
              children: [
                '/guide/reportes/a_ventas/a_comprobantes.md',
                '/guide/reportes/a_ventas/b_ventasCliente.md',
                '/guide/reportes/a_ventas/c_ventasCanal.md',
                '/guide/reportes/a_ventas/d_ventasPago.md',
                '/guide/reportes/a_ventas/e_ventasProducto.md',
                '/guide/reportes/a_ventas/f_ventasDepartamento.md',
                '/guide/reportes/a_ventas/g_pedidoVentas.md',
                '/guide/reportes/a_ventas/h_devoluciones.md',
                '/guide/reportes/a_ventas/i_cuentasCobrar.md',
                '/guide/reportes/a_ventas/j_rentabilidadVentas.md',
    
              ],
            },
            {
              text: 'Gastos',
              collapsible: true,
              children: [
                '/guide/reportes/b_gastos/a_compras.md',
                '/guide/reportes/b_gastos/b_cuentasPagar.md',
                '/guide/reportes/b_gastos/c_ordenCompras.md',

              ],
            },            
            {
              text: 'Inventario',
              collapsible: true,
              children: [
                '/guide/reportes/c_inventario/a_stock.md',
                '/guide/reportes/c_inventario/b_kardex.md',
                '/guide/reportes/c_inventario/c_rentabilidadProducto.md',
                '/guide/reportes/c_inventario/d_resumenRentabilidad.md',

              ],
            },
            '/guide/reportes/d_sire.md',
            '/guide/reportes/e_docMasivos.md',


          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
})
