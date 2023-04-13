import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'
import api from '@/api'

export const globalStore =  defineStore('global', () => {
    const packagesList = reactive([])
    const searchString = ref('vu')
    const pageCount = ref(0)
    const currPage = ref(1)
    const viewLength = 10
    
    function calcAmountPages(size){
        pageCount.value = Math.ceil(size / viewLength)
    }

    async function getSearch() {
        const response = await api.getSearch(searchString.value, currPage.value)
        calcAmountPages(response.total)
        packagesList.splice(0, packagesList.length, ...response.results)
        console.log(response.results[0].package)
    }

    return { searchString, packagesList, getSearch, pageCount, currPage}
  })