import {action, observable} from "mobx";

const TagsStore = {}

TagsStore.tagsStore = observable({
  star: [],
  expLevel: [],
  battlePosition: [],
  jobType: [],
  tagList: []
})

const { tagsStore } = TagsStore

TagsStore.setTags = action((param)=>{
  if(param){
    if(param['star']){
      tagsStore.star = param['star']
    }
    if(param['expLevel']){
      tagsStore.expLevel = param['expLevel']
    }
    if(param['battlePosition']){
      tagsStore.battlePosition = param['battlePosition']
    }
    if(param['jobType']){
      tagsStore.jobType = param['jobType']
    }
    if(param['tagList']){
      tagsStore.tagList = param['tagList']
    }
  }
})

export default TagsStore