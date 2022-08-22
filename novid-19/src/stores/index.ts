import { defineStore } from 'pinia'
import { getCovidList } from '../server'
import type { RootObject, Data, Child2, ChinaAdd, ChinaTotal, StatisGradeCityDetail } from '../types/covid'

export const useStore = defineStore({
	id: 'covid',
	state: () => ({
		list: <Data>{},
		selectedItem: <Child2[]>[],
		chinaAdd: <ChinaAdd>{},
		chinaTotal: <ChinaTotal>{},
		cityDetail: <StatisGradeCityDetail[]>{}
	}),
	getters: {},
	actions: {
		async getList() {
			const res: RootObject = await getCovidList()
			this.list = res.data
			this.chinaAdd = res.data.diseaseh5Shelf.chinaAdd
			this.chinaTotal = res.data.diseaseh5Shelf.chinaTotal
			this.cityDetail = res.data.statisGradeCityDetail.slice(0, 10)
		}
	}
})
