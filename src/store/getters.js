const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  showSettings: state => state.settings.showSettings,
  tagsView: state => state.settings.tagsView,
  fixedHeader: state => state.settings.fixedHeader
}
export default getters
