import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

import {
  ElAlert,
  ElAside,
  ElButton,
  ElCalendar,
  ElCheckbox,
  ElContainer,
  ElForm,
  ElFormItem,
  ElHeader,
  ElIcon,
  ElInput,
  ElLink,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElRadio,
  ElSubmenu,
  ElTabPane,
  ElTabs,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar
} from 'element-plus'

const components = [
  ElAlert,
  ElAside,
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabPane,
  ElTabs,
  ElIcon,
  ElCalendar,
  ElCheckbox,
  ElLink,
  ElAside,
  ElContainer,
  ElHeader,
  ElMain,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
