export interface ChinaTotal {
	importedCase: number
	noInfectH5: number
	localConfirmH5: number
	deadAdd: number
	mediumRiskAreaNum: number
	localConfirm: number
	heal: number
	dead: number
	mRiskTime: string
	nowSevere: number
	localWzzAdd: number
	nowLocalWzz: number
	mtime: string
	confirm: number
	suspect: number
	local_acc_confirm: number
	confirmAdd: number
	localConfirmAdd: number
	highRiskAreaNum: number
	nowConfirm: number
	showLocalConfirm: number
	showlocalinfeciton: number
	noInfect: number
}

export interface ChinaAdd {
	confirm: number
	nowConfirm: number
	nowSevere: number
	noInfect: number
	localConfirm: number
	noInfectH5: number
	heal: number
	dead: number
	suspect: number
	importedCase: number
	localConfirmH5: number
}

export interface ShowAddSwitch {
	confirm: boolean
	nowSevere: boolean
	importedCase: boolean
	localinfeciton: boolean
	noInfect: boolean
	localConfirm: boolean
	all: boolean
	suspect: boolean
	dead: boolean
	heal: boolean
	nowConfirm: boolean
}

export interface Total {
	highRiskAreaNum: number
	continueDayZeroLocalConfirmAdd: number
	continueDayZeroLocalConfirm: number
	confirm: number
	dead: number
	showRate: boolean
	wzz: number
	mediumRiskAreaNum: number
	showHeal: boolean
	adcode: string
	heal: number
	mtime: string
	nowConfirm: number
	provinceLocalConfirm: number
}

export interface Total2 {
	highRiskAreaNum: number
	mtime: string
	adcode: string
	provinceLocalConfirm: number
	mediumRiskAreaNum: number
	wzz: number
	showHeal: boolean
	continueDayZeroConfirm: number
	continueDayZeroLocalConfirmAdd: number
	heal: number
	confirm: number
	dead: number
	showRate: boolean
	continueDayZeroConfirmAdd: number
	nowConfirm: number
}

export interface Today {
	confirm: number
	confirmCuts: number
	isUpdated: boolean
	wzz_add: string
	local_confirm_add: number
}

export interface Total3 {
	confirm: number
	heal: number
	adcode: string
	nowConfirm: number
	mediumRiskAreaNum: number
	continueDayZeroLocalConfirm: number
	wzz: number
	showRate: boolean
	showHeal: boolean
	provinceLocalConfirm: number
	highRiskAreaNum: number
	continueDayZeroLocalConfirmAdd: number
	mtime: string
	dead: number
	grade: string
}

export interface Child2 {
	name: string
	adcode: string
	date: string
	today: Today
	total: Total3
}

export interface Today2 {
	abroad_confirm_add: number
	dead_add: number
	confirm: number
	confirmCuts: number
	isUpdated: boolean
	tip: string
	wzz_add: number
	local_confirm_add: number
}

export interface Child {
	total: Total2
	children: Child2[]
	name: string
	adcode: string
	date: string
	today: Today2
}

export interface Today3 {
	confirm: number
	isUpdated: boolean
}

export interface AreaTree {
	total: Total
	children: Child[]
	name: string
	today: Today3
}

export interface Diseaseh5Shelf {
	lastUpdateTime: string
	chinaTotal: ChinaTotal
	chinaAdd: ChinaAdd
	isShowAdd: boolean
	showAddSwitch: ShowAddSwitch
	areaTree: AreaTree[]
}

export interface StatisGradeCityDetail {
	confirm: number
	dead: number
	heal: number
	date: string
	mtime: string
	province: string
	city: string
	confirmAdd: number
	sdate: string
	syear: number
	nowConfirm: number
	grade: string
	wzz_add: string
}

export interface Data {
	diseaseh5Shelf: Diseaseh5Shelf
	statisGradeCityDetail: StatisGradeCityDetail[]
}

export interface RootObject {
	ret: number
	info: string
	data: Data
}
