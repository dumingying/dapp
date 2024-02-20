declare interface Window {
	ReactNativeWebView?: any,
	[ChainPalJS: string]: any
}

interface ChainPalType {
	isApp: boolean
	isChainpalPc: boolean
	appLanguage: string
	client: any
}

declare module 'chainpal-utils' {
	export = ChainPalType
}
