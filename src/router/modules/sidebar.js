import Layout from '@/layout'

export const sidebarRoutes = [
  {
    path: '/',
    hidden: false,
    component: Layout,
    children: [
      {
        path: '/index',
        hidden: false,
        redirect: '/index',
        component: () => import('@/views/index'),
        // affix不随全局滚动条滚动
        meta: {title: 'index', icon: 'index', affix: true}
      }
    ]
  }
]

export default { sidebarRoutes }
