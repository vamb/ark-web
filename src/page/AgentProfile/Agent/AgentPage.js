import React from 'react'
import { observer } from 'mobx-react'
import { Row, Col, Table } from 'antd'
import TagsStore from "./Store/TagsStore";
import CustomerTag from "./Component/CustomerTag";
import AgentConstant from "../../AgentConstant";
import AgentUnit from "./Component/AgentUnit";

const { tagsStore } = TagsStore

const AgentPage = observer(() =>{
  const columns = [
    {
      title: '#',
      width: 10,
      render: (text, record, index) => (
        <span>{index}</span>
      )
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      width: 150,
      render: text => <span>{text}</span>
    },
    {
      title: '可能出现',
      dataIndex: 'agents',
      width: 400,
      render: text => {
        return(
          <AgentUnit />
        )
      }
    },
  ]
  const tempData = {
    tags: null,
    agents: AgentConstant.SAMPLE_AGENT
  }
  return(
    <div>
      <Table
        rowKey={record => record.key+'agentList'}
        pagination={false}
        columns={columns}
        dataSource={null}
        scroll={{x: 900}}
      />
    </div>
  )
})

export default AgentPage