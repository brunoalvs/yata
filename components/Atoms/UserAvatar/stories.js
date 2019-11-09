export default {
  title: 'Design System|Atoms/User Avatar'
}

import UserAvatar from './index'

export const defaultAvatar = () => <UserAvatar />
export const loggedAvatar = () => (
  <UserAvatar url="https://avatars3.githubusercontent.com/u/221550?s=64&v=4" />
)
