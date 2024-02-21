
import {
	isApp,
	isChainpalPc,
	appLanguage,
} from './common'
import { callNativeMethods, setChainmeetShare } from "./client" // 客户端方法
// import * as server from "./server" // 服务端接口 
const ChainPal = {
	isApp,
	isChainpalPc,
	appLanguage,
	callNativeMethods,
	setChainmeetShare
}
window.ChainPal = ChainPal

export {
	isApp,
	isChainpalPc,
	appLanguage,
	callNativeMethods,
	setChainmeetShare
};
// export default ChainPal