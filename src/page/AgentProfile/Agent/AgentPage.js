import React from 'react'
import { observer } from 'mobx-react'
import { Row, Col } from 'antd'
import TagsStore from "./Store/SearchStore";
import CustomerTag from "./Component/CustomerTag";

const { tagsStore } = TagsStore

const AgentPage = observer(() =>{
  return(
    <div>
      <Row>
        <Col span={4}>
          <span>Tags</span>
        </Col>
        <Col span={20}>
          <span>可能出现</span>
        </Col>
      </Row>
      <Row>
        <Col span={4}>
          {

          }
        </Col>
        <Col span={20}>

        </Col>
      </Row>
    </div>
  )
})

export default AgentPage