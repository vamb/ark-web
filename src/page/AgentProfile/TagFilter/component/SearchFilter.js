import React from 'react'
import { observer } from 'mobx-react'
import { Row, Col, Button } from 'antd'
import AgentConstant from "../../../AgentConstant";
import SelfDivide from "./SelfDivide";
import SearchStore from "../Store/SearchStore";

const { searchStore } = SearchStore

const SearchFilter = observer(()=>{
  return(
    <div style={{padding: '8px 0'}}>
      <Row>
        <Col span={6}>
          <Button
            type={searchStore.star.length === AgentConstant.STAR_LIST.length? 'primary': ''}
            onClick={()=>{
              SearchStore.rootBtnClick(AgentConstant.ROOT.STAR)
            }}
          >ALL</Button>
        </Col>
        <Col span={18}>
          {
            AgentConstant.STAR_LIST.map((item, idx)=>{
              let isCurrentChosen =  searchStore.star.includes(item.value)
              return(
                <Button
                  style={{margin: '0 5px 5px 0'}}
                  key={'STAR_LIST'+idx}
                  type={isCurrentChosen? 'primary': null}
                  onClick={()=>{
                    SearchStore.updateChosen('star', item['value'], !isCurrentChosen)
                  }}
                >{item.label}</Button>
              )
            })
          }
        </Col>
      </Row>
      <SelfDivide />
      <Row>
        <Col span={6}>
          <Button
            type={searchStore.expLevel.length === AgentConstant.EXP_LEVEL_LIST.length? 'primary': null}
            onClick={()=>{
              SearchStore.rootBtnClick(AgentConstant.ROOT.EXP_LEVEL)
            }}
          >资质</Button>
        </Col>
        <Col span={18}>
          {
            AgentConstant.EXP_LEVEL_LIST.map((item, idx)=>{
              let isCurrentChosen =  searchStore.expLevel.includes(item.value)
              return(
                <Button
                  style={{margin: '0 5px 5px 0'}}
                  key={'EXP_LEVEL_LIST'+idx}
                  type={isCurrentChosen? 'primary': null}
                  onClick={()=>{
                    SearchStore.updateChosen('expLevel', item['value'], !isCurrentChosen)
                    // console.log('EXP_LEVEL_LIST item', item)
                  }}
                >{item.label}</Button>
              )
            })
          }
        </Col>
      </Row>
      <SelfDivide />
      <Row>
        <Col span={6}>
          <Button
            type={searchStore.battlePosition.length === AgentConstant.BATTLE_POSITION_LIST.length? 'primary': null}
            onClick={()=>{
              SearchStore.rootBtnClick(AgentConstant.ROOT.BATTLE_POSITION)
            }}
          >位置</Button>
        </Col>
        <Col span={18}>
          {
            AgentConstant.BATTLE_POSITION_LIST.map((item, idx)=>{
              let isCurrentChosen =  searchStore.battlePosition.includes(item.value)
              return(
                <Button
                  style={{margin: '0 5px 5px 0'}}
                  key={'BATTLE_POSITION_LIST'+idx}
                  type={isCurrentChosen? 'primary': null}
                  onClick={()=>{
                    SearchStore.updateChosen('battlePosition', item['value'], !isCurrentChosen)
                    // console.log('BATTLE_POSITION_LIST item', item)
                  }}
                >{item.label}</Button>
              )
            })
          }
        </Col>
      </Row>
      <SelfDivide />
      <Row>
        <Col span={6}>
          <Button
            type={searchStore.jobType.length === AgentConstant.JOB_TYPE_LIST.length? 'primary': null}
            onClick={()=>{
              SearchStore.rootBtnClick(AgentConstant.ROOT.JOB_TYPE)
            }}
          >种类</Button>
        </Col>
        <Col span={18}>
          {
            AgentConstant.JOB_TYPE_LIST.map((item, idx)=>{
              let isCurrentChosen =  searchStore.jobType.includes(item.value)
              return(
                <Button
                  style={{margin: '0 5px 5px 0'}}
                  key={'JOB_TYPE_LIST'+idx}
                  type={isCurrentChosen? 'primary': null}
                  onClick={()=>{
                    SearchStore.updateChosen('jobType', item['value'], !isCurrentChosen)
                    // console.log('JOB_TYPE_LIST item', item)
                  }}
                >{item.label}</Button>
              )
            })
          }
        </Col>
      </Row>
      <SelfDivide />
      <Row>
        <Col span={6}>
          <Button
            type={searchStore.tagList.length === AgentConstant.TAG_LIST.length? 'primary': null}
            onClick={()=>{
              SearchStore.rootBtnClick(AgentConstant.ROOT.TAG)
            }}
          >词缀</Button>
        </Col>
        <Col span={18}>
          {
            AgentConstant.TAG_LIST.map((item, idx)=>{
              let isCurrentChosen =  searchStore.tagList.includes(item.value)
              return(
                <Button
                  style={{margin: '0 5px 5px 0'}}
                  key={'TAG_LIST'+idx}
                  type={isCurrentChosen? 'primary': null}
                  onClick={()=>{
                    SearchStore.updateChosen('tagList', item['value'], !isCurrentChosen)
                    // console.log('TAG_LIST item', item)
                  }}
                >{item.label}</Button>
              )
            })
          }
        </Col>
      </Row>
    </div>
  )
})

export default SearchFilter