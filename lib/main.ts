
import { isApp, isChainpalPc, appLanguage } from './common'
import client from "./client" // 客户端方法
// import * as server from "./server" // 服务端接口 
// const ChainPalJS = {
// 	isApp,
// 	isChainpalPc,
// 	appLanguage,
// 	client
// }
// window.ChainPal = ChainPalJS
export default {
	isApp,
	isChainpalPc,
	appLanguage,
	...client
};