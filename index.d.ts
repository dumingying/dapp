interface chainmeetShare {
	title: string
	desc: string
	icon: string
}

type appLanguage = string
type isApp = boolean
type isChainpalPc = boolean

export { appLanguage, isApp, isChainpalPc }
export function setChainmeetShare(chainmeetShare: chainmeetShare): void
export function callNativeMethods(methods: string, data: object): void
