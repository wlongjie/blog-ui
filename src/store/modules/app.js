import Cookies from 'js-cookie'

const state = {
  // 左边栏
  sidebar: {
    // 是否打开
    opened: Cookies.get('sidebarStatus') ? Cookies.get('sidebarStatus') : true,
    // 简单模式
    isSimple: Cookies.get('sidebarMode') ? Cookies.get('sidebarMode') : true
  },
  // 设备选择
  DEVICES: {
    DESKTOP: 'desktop',
    TABLET: 'tablet',
    MOBILE: 'mobile'
  },
  // 适应设备
  device: 'desktop'
}

const mutations = {
  // 打开左边栏
  openSidebar() {
    state.sidebar.opened = true
    Cookies.set('sidebarStatus', state.sidebar.opened)
  },
  // 关闭左边栏
  closeSidebar() {
    state.sidebar.opened = false
    Cookies.set('sidebarStatus', state.sidebar.opened)
  },
  // 切换左边栏模式
  switchSidebarMode() {
    state.sidebar.isSimple = !state.sidebar.isSimple
    Cookies.set('sidebarMode', state.sidebar.isSimple)
  },
  // 切换设备
  switchDevice(device) {
    state.device = device
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
