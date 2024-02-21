
import { isApp } from '../common'
import type { chainmeetShare } from '../types'

/** 设置当前页面分享的文案 title 设置
 * @param {Object} param0 
 * @param {*} param0.title 
 * @param {*} param0.desc 
 * @param {*} param0.icon 
*/
const setChainmeetShare: (chainmeetShare: chainmeetShare) => void = (chainmeetShare: chainmeetShare): void => {
	if (isApp) {
		const shareStr = window.btoa(unescape(window.encodeURIComponent(JSON.stringify(chainmeetShare))))
		const reg = new RegExp('chainmeetShare=[^&]*', 'gi')
		const url =
			window.location.search.indexOf('chainmeetShare') > -1
				? window.location.search.replace(reg, `chainmeetShare=${shareStr}`)
				: `${window.location.search}${!window.location.search ? '?' : '&'
				}chainmeetShare=${shareStr}`

		window.history.replaceState(null, '', url)
	}
}

/**H5 调用 app 方法
* @param method {String} 方法名称
* @param data {Object} 对应参数
*/
const callNativeMethods: (method: string, data: object) => void = (method: string, data: object): void => {
	if (isApp) {
		try {
			const json = {
				name: method,
				...data
			}
			window?.ReactNativeWebView?.postMessage(JSON.stringify(json))
		} catch (error) { console.error(error) }
	}
}

export default {
	setChainmeetShare,
	callNativeMethods
}