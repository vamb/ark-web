import React from 'react'
import SearchFilter from "./component/SearchFilter";
import { Row, Col } from 'antd'

const TagFilter = ()=>{
  return(
    <div>
      <Row>
        <Col span={24}>TagFilter</Col>
      </Row>
      <SearchFilter />
    </div>
  )
}

export default TagFilter