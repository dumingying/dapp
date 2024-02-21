interface ChainPalType {
	isApp: boolean
	isChainpalPc: boolean
	appLanguage: string
	[key: string]: any
}

declare module 'chainpal-utils' { }
export = ChainPalType

