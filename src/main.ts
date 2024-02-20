import './style.css'
import { isApp, appLanguage } from '../lib/main'
import ChainPalJS from '../lib/main'
console.log(isApp, appLanguage, ChainPalJS)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
  链上会app 插件管理 对外提供的接入方法
  </div>
`