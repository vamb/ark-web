import { observable, action } from 'mobx'
import AgentConstant from "../../../AgentConstant";
import TagsStore from "../../Agent/Store/TagsStore";

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
  TagsStore.setTags(searchStore)
})

SearchStore.rootBtnClick = action(typeName=>{
  switch (typeName) {
    case AgentConstant.ROOT.STAR:
      if(!searchStore.star || 6 !== searchStore.star.length){
        searchStore.star = [1, 2, 3, 4, 5, 6]
      }else{
        searchStore.start = []
      }
      break
    case AgentConstant.ROOT.EXP_LEVEL:
      if(!searchStore.expLevel || 3 !== searchStore.expLevel.length){
        searchStore.expLevel = [0, 1, 2]
      }else{
        searchStore.expLevel = []
      }
      break;
    case AgentConstant.ROOT.BATTLE_POSITION:
      if(!searchStore.battlePosition || 2 !== searchStore.battlePosition.length){
        searchStore.battlePosition = [0, 1]
      }else {
        searchStore.battlePosition = []
      }
      break;
    case  AgentConstant.ROOT.JOB_TYPE:
      if(!searchStore.jobType || 8 !== searchStore.jobType.length){
        searchStore.jobType = [0, 1, 2, 3, 4 ,5 ,6, 7]
      }else{
        searchStore.jobType = []
      }
      break
    case AgentConstant.ROOT.TAG:
      if(!searchStore.tagList || 15 !== searchStore.tagList.length){
        searchStore.tagList = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
      }else{
        searchStore.tagList = []
      }
      break
  }
  TagsStore.setTags(searchStore)
})


export default SearchStore