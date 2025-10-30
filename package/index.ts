import { App, Plugin } from 'vue'
import type { Tab } from './types'
import './theme-dark.less'
import { Vue3TabsChrome } from './vue3-tabs-chrome.vue'

const install = (app: App) => {
  app.component('Vue3TabsChrome', Vue3TabsChrome)
}

Vue3TabsChrome.install = install

export { Vue3TabsChrome, Tab }

export default Vue3TabsChrome as unknown as Plugin
