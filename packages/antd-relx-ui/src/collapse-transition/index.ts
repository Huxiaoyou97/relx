import CollapseTransition from './CollapseTransition.vue'
import type { App } from 'vue'

CollapseTransition.install = function(app: App) {
  app.component(CollapseTransition.name, CollapseTransition)
}

export const _CollapseTransitionComponent = CollapseTransition

export default CollapseTransition
