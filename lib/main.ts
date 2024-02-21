
import * as common from './common'
import * as client from "./client" // 客户端方法
// import * as server from "./server" // 服务端接口 
console.log(common)
console.log(client)
// const ChainPalJS = {
// 	isApp,
// 	isChainpalPc,
// 	appLanguage,
// 	client
// }
// window.ChainPal = ChainPalJS
// export default {
// 	isApp,
// 	isChainpalPc,
// 	appLanguage,
// 	...client
// };


// class ChainpalJs {
// 	public isApp = common.isApp
// }
// window.ChainPal = ChainPalJS
export default { ...common, ...client }
// module.exports = { common, client }