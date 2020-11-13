import React from 'react'
import { Row, Col } from "antd";
import AgentPage from "./Agent/AgentPage";
import TagFilter from "./TagFilter/TagFilter";

const AgentProfile = ()=>{
  return(
    <div>
      <Row style={{width: '1500px', minWidth: '1000px', maxWidth: '1500px', margin: '0 auto'}}>
        <Col span={8}>
          <TagFilter />
        </Col>
        <Col span={15} offset={1}>
          <AgentPage />
        </Col>
      </Row>
    </div>
  )
}

export default AgentProfile