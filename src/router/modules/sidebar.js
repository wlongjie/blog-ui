import Layout from '@/layout'

export const sidebarRoutes = [
  {
    path: '/',
    hidden: false,
    component: Layout,
    meta: {title: 'index'},
    children: [
      {
        path: '/index1',
        hidden: false,
        redirect: '/index1',
        component: () => import('@/views/index'),
        // affix不随全局滚动条滚动
        meta: {title: 'index1', icon: 'index', affix: true}
      },
      {
        path: '/index2',
        hidden: false,
        redirect: '/index2',
        component: () => import('@/views/index2'),
        // affix不随全局滚动条滚动
        meta: {title: 'index2', icon: 'index', affix: true}
      }
    ]
  }
]

export default { sidebarRoutes }
