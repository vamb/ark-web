import React from 'react'
import { observer } from 'mobx-react'
import { Row, Col, Button, Form, Select } from 'antd'
import AgentConstant from "../../../AgentConstant";
import SearchStore from '../Store/SearchStore'

const { searchStore } = SearchStore

const SearchGroup = observer(()=>{
  const checkVal = (val)=>{
    if(val === undefined || val === null){
      return null
    }else{
      return val
    }
  }
  return(
    <div>
      <Row>
        <Col span={6}>
          <Form.Item label='Job Type'>
            <Select
              allowClear={true}
              placeholder={'Job Type'}
              value={searchStore['jobType']}
              onChange={e => {
                SearchStore.updateJobType(e)
              }}
              style={{ width: '80%' }}
            >
              {AgentConstant &&
              AgentConstant.JOB_TYPE_LIST &&
              AgentConstant.JOB_TYPE_LIST.map((item, index) => {
                return (
                  <Select.Option value={item.value} key={index + item.value}>
                    {item.label}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item>
        </Col>
        <Col span={6}>
          <Form.Item label='Star Level'>
            <Select
              allowClear={true}
              placeholder={'Star Level'}
              value={searchStore['level']}
              onChange={e => {
                SearchStore.updateLevel(e)
              }}
              style={{ width: '80%' }}
            >
              {AgentConstant &&
              AgentConstant.STAR_LIST &&
              AgentConstant.STAR_LIST.map((item, index) => {
                return (
                  <Select.Option value={item.value} key={index + item.value}>
                    {item.label}
                  </Select.Option>
                )
              })}
            </Select>
          </Form.Item>
        </Col>
        <Col span={6} offset={6}>
          <Button
            type={'primary'}
            style={{marginRight: '10px'}}
            onClick={()=>{

            }}
          >Search</Button>
          <Button
            onClick={()=>{
              SearchStore.initSearchData()
            }}
          >Reset</Button>
        </Col>
      </Row>
    </div>
  )
})

export default SearchGroup