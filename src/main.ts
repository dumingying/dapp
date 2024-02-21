import './style.css'
import ChainPal, { appLanguage, setChainmeetShare } from '../lib/main'
console.log(ChainPal, appLanguage, setChainmeetShare)
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
  链上会app 插件管理 对外提供的接入方法
  </div>
`