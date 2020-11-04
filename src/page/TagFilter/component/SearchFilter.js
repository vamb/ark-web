import React from 'react'
import { observer } from 'mobx-react'
import { Row, Col, Button } from 'antd'
import AgentConstant from "../../AgentConstant";

const SearchFilter = observer(()=>{
  return(
    <div>
      <Row>
        <Col span={4}>
            <Button>资质</Button>
        </Col>
        <Col span={20}>
            {
              AgentConstant.EXP_LEVEL_LIST.map((item, idx)=>{
                return(
                  <Button
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
    </div>
  )
})

export default SearchFilter