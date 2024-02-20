
import { isApp, isChainpalPc, appLanguage } from './common'
import * as client from "./client" // 客户端方法
// import * as server from "./server" // 服务端接口 

class ChainPalJS {
	static isApp = isApp//是否是app 包含pc端
	static isChainpalPc = isChainpalPc // 是否是PC端， 仅PC端 
	static appLanguage = appLanguage//获取App环境语言 , app 外部返回空
	static client = client
	//  server
}
export {
	isApp,
	isChainpalPc,
	appLanguage,
	client
}
window.ChainPal = ChainPalJS
export default ChainPalJS;