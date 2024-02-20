/// <reference types="vite/client" />
declare interface Window {
	ReactNativeWebView?: any,
	[ChainPalJS: string]: any
}
declare module 'chainpal-utils' {
	export = ChainPalJS
}

