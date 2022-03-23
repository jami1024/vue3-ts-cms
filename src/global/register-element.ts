import { App } from 'vue'
import 'element-plus/lib/theme-chalk/base.css'

import {
  ElAlert,
  ElAside,
  ElButton,
  ElCalendar,
  ElCheckbox,
  ElForm,
  ElFormItem,
  ElIcon,
  ElInput,
  ElLink,
  ElRadio,
  ElTabPane,
  ElTabs
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
  ElLink
]
export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
