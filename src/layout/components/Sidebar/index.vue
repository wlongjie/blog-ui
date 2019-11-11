<template>
  <div>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        router
        :collapse="isCollapse"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
        :unique-opened="false"
        :active-text-color="variables.menuActiveText"
        :collapse-transition="false"
        style="height:100vh;width:230px;float:left;overflow-y:auto;"
        mode="vertical" >
        <sidebar-item v-for="route in sidebarRoutes" :key="route.path" :item="route" :isNext="false" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import variables from '@/styles/variables.scss'
import SidebarItem from './SidebarItem'

export default {
  components: { SidebarItem },
  computed: {
    // 这里还需要看看是否用mapGetter代替
    ...mapGetters([
      'sidebar',
      'sidebarRoutes'
    ]),
    variables() {
      return variables
    },
    isCollapse() {
      return !this.sidebar.opened
    }
  }
}

</script>
