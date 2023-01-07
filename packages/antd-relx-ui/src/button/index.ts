import Button from './Button'
import type { App } from 'vue'

Button.install = function(app: App) {
  app.component(Button.name, Button)
}

export const _ButtonComponent = Button

export default Button
