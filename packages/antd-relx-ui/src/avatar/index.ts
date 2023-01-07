import Avatar from './Avatar'
import type { App } from 'vue'

Avatar.install = function(app: App) {
  app.component(Avatar.name, Avatar)
}

export const _AvatarComponent = Avatar

export default Avatar
