/// <reference types="vite/client" />

/*
 * Window type extension to support ReactNativeWebView
 */

declare interface Window {
	ReactNativeWebView?: any,
	[ChainPalJS: string]: any
}

// declare namespace ChainPalJS {
// 	/**
// 	 * 生成数字范围内的随机数
// 	 * @param min 最小数字
// 	 * @param max 最大数字
// 	 * @returns number类型
// 	 */
// 	export function random(min: number, max: number): number
// }

declare module 'chainpal-js' {
	export = ChainPalJS
}

