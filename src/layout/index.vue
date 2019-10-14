<template>
  <div class="app-wrapper">
    <div class="main-container" >
      <div>
        <navbar />
      </div>
      <!-- <app-main /> -->
    </div>
  </div>
</template>

<script>
import { Navbar, AppMain } from './components'
import { mapState } from 'vuex'

export default {
  path: '/redirect',
  components: {
    Navbar,
    AppMain
  },
  computed: {
    ...mapState({
      sidebar: this.$store.state.app.sidebar,
      device: this.$store.state.app.device
      // showSettings: state => state.settings.showSettings,
      // needTagsView: state => state.settings.tagsView,
      // fixedHeader: state => state.settings.fixedHeader
    })
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
</style>
