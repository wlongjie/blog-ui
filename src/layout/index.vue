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

export default {
  path: '/redirect',
  components: {
    Navbar,
    AppMain
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
