import { observable, action } from 'mobx'

const SearchStore = {}

SearchStore.searchStore = observable({
  jobType: null,
  level: null,
  page: {
    pageNo: 1,
    pageSize: 10
  }
})

const { searchStore } = SearchStore

SearchStore.updateJobType = action(val=>{
  searchStore.jobType = val
})

SearchStore.updateLevel = action(val=>{
  searchStore.level = val
})

SearchStore.initSearchData = action(()=>{
  searchStore.jobType = null
  searchStore.level = null
  searchStore.page.pageNo = 1
  searchStore.page.pageSize = 10
})

export default SearchStore