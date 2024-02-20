const UA: string = window.navigator.userAgent

/** 
 * app including pc
 * @return {boolean}
 */

export const isApp: boolean = UA.indexOf('ChainMeet') > -1

/** 
 * only pc
 * @return {boolean}
 */
export const isChainpalPc: boolean = UA.indexOf('ChainPalForPC') > -1

/** 
 *  url value
 * @param value {string} 
 * @return {string}
 */
export const getQueryValue = (value: string): string => {
	let query: string = window.location.search.substring(1)
	let arr: string[] = query.split('&')
	for (let i: number = 0;i < arr.length;i++) {
		let pair = arr[i]?.split('=') || []
		if (pair[0] === value) {
			return pair[1] || ''
		}
	}
	return ''
}

/** 
 *  app current language
 * @return {boolean}
 */
export const appLanguage: string = isApp ? UA.indexOf('en-US') > -1 ? 'en-US' : UA.indexOf('zh-CH') > -1 ? 'zh-CH' : '' : ''