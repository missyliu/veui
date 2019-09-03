import 'veui-theme-dls-icons/chevron-left'
import 'veui-theme-dls-icons/chevron-down'
import 'veui-theme-dls-icons/chevron-right'
import config from 'veui/managers/config'

config.defaults(
  {
    icons: {
      prev: 'chevron-left',
      next: 'chevron-right',
      expand: 'chevron-down'
    }
  },
  'calendar'
)
