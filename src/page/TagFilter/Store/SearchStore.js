import { observable, action } from 'mobx'

const SearchStore = {}

SearchStore.searchStore = observable({
  star: [1, 2, 3, 4, 5, 6],
  expLevel: [],
  battlePosition: [],
  jobType: [],
  tagList: []
})

const { searchStore } = SearchStore

SearchStore.updateChosen = action((typeName, value, flag)=>{
  if(flag){
    searchStore[typeName].push(value)
  }else{
    let temp = []
    searchStore[typeName].map(item =>{
      if(item !== value){
        temp.push(item)
      }
    })
    searchStore[typeName] = temp
  }
})

SearchStore.rootBtnClick = action(typeName=>{

})

export default SearchStore