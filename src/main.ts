import './style.css'
import a from '../lib/main'
console.log(a)
// console.log(isApp, appLanguage)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
  链上会app 插件管理 对外提供的接入方法
  </div>
`