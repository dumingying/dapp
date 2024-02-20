declare interface Window {
	ReactNativeWebView?: any,
	[ChainPalJS: string]: any
}

interface ChainPalJS {
	isApp: boolean
	isChainpalPc: boolean
	appLanguage: string
	client: any
}

declare module 'chainpal-utils' {
	export = ChainPalJS
}

