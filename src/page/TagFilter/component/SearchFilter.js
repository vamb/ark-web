import React from 'react'
import { observer } from 'mobx-react'
import { Row, Col, Button } from 'antd'
import AgentConstant from "../../AgentConstant";

const SearchFilter = observer(()=>{
  return(
    <Row>
      <Col span={2}>
        <Button>资质</Button>
      </Col>
      <Col span={22}>
        {
          AgentConstant.EXP_LEVEL_LIST.map((item, idx)=>{
            return(
              <Button
                style={{marginRight: '5px'}}
                key={'EXP_LEVEL_LIST'+idx}
                onClick={()=>{
                  console.log('EXP_LEVEL_LIST item', item)
                }}
              >{item.label}</Button>
            )
          })
        }
      </Col>
    </Row>
  )
})

export default SearchFilter