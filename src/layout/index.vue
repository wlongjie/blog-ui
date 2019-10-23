<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" />
    <div :class="{hasTagsView:needTagsView}" class="main-container" >
      <div :class="{'fixed-header':fixedHeader}">
        <navbar />
      </div>
      <!-- <app-main /> -->
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain, Sidebar } from './components'
import { mapState } from 'vuex'

export default {
  path: '/redirect',
  components: {
    Navbar,
    AppMain,
    Sidebar
  },
  computed: {
    ...mapState({
      sidebar: this.$store.state.app.sidebar,
      device: this.$store.state.app.device,
      showSettings: this.$store.state.settings.showSettings,
      needTagsView: this.$store.state.settings.tagsView,
      fixedHeader: this.$store.state.settings.fixedHeader
    }),
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  .app-wrapper {
    position: relative;
    height: 100%;
    width: 100%;

    &.mobile.openSidebar {
      position: fixed;
      top: 0;
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
