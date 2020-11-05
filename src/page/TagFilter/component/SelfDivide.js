import React from 'react'
import { Row, Col } from 'antd'

const SelfDivide = ()=>{
  return(
    <Row>
      <Col span={24}>
        <div style={{padding: '3px 5px' }}><hr /></div>
      </Col>
    </Row>
  )
}

export default SelfDivide