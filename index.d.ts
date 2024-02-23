interface chainmeetShare {
	title: string
	desc: string
	icon: string
}
export const appLanguage: string
export const isApp: boolean
export const isChainpalPc: boolean
export declare function setChainmeetShare(chainmeetShare: chainmeetShare): void
export declare function callNativeMethods(methods: string, data: object): void
