<template>
  <div v-if="!item.hidden" class="menu-wrapper">
    <el-submenu v-if="!isNext" index="item.path" popper-append-to-body>
      <template slot="title">
        <el-badge value="" >
          <span size="small">{{ item.meta.title }}</span>
        </el-badge>
      </template>
      <sidebar-item v-for="route in item.children" :key="route.path" :isNext="true" :item="route" class="nest-menu"/>
    </el-submenu>
    <el-menu-item v-else @click="addTag" >{{ item.meta.title }}</el-menu-item>
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
    isNext: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    addTag() {
      console.log(this.item.meta.title)
    }
  }
}
</script>
