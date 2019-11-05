<template>
<!-- v-if="!item.hidden" -->
  <div class="menu-wrapper">
    <el-submenu v-if="!isNest" index="item.path" popper-append-to-body>
      <template slot="title">
        <el-badge value="" >
          <span size="small">菜单</span>
        </el-badge>
      </template>
      <sidebar-item v-for="route in item.children" :key="route.path" :isNext="true" :item="route" class="nest-menu"/>
    </el-submenu>
    <el-menu-item v-else index="item.path">菜单</el-menu-item>
  </div>
</template>

<script>

export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    console.log(this.item)
    console.log(this.item.children)
  }
}
</script>
