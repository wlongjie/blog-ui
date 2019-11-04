<template>
  <div :class="classObj" class="app-wrapper clearfix">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" />
    <sidebar class="sidebar-container" />
  </div>
</template>

<script>
import { Navbar, Sidebar } from './components'
import { mapState } from 'vuex'

export default {
  path: '/redirect',
  components: {
    Navbar,
    Sidebar
  },
  computed: {
    ...mapState({
      sidebar: state => state.app.sidebar,
      device: state => state.app.device,
      DEVICES: state => state.app.DEVICES
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.isSimple,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/variables.scss";
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }
  .clearfix {
    &:after {
      visibility: hidden;
      display: block;
      font-size: 0;
      content: " ";
      clear: both;
      height: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
</style>
