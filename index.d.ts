interface chainmeetShare {
	title: string
	desc: string
	icon: string
}
// interface chainpal {
// 	appLanguage: string
// 	isApp: boolean
// 	isChainpalPc: boolean
// }

export function setChainmeetShare(chainmeetShare: chainmeetShare): void
export function callNativeMethods(methods: string, data: object): void
