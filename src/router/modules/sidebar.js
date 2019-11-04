import Layout from '@/layout'

export const sidebarRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/index',
    hidden: true,
    children: [
      {
        path: '/index',
        hidden: true,
        component: () => import('@/views/index'),
        meta: {title: 'index', icon: 'index', affix: true}
      }
    ]
  }
]

export default { sidebarRoutes }
