import { action, observable } from "mobx";
import AxiosCall from "../../../../component/Call/AxiosCall";

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
  console.log('TagsStore.setTags param', JSON.parse(JSON.stringify(param)))
  AxiosCall.postFun();
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