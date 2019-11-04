<template>
  <div>
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
    ...mapState
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
</style>
