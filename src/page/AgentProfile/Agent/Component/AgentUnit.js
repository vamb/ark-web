import React from 'react'
import { observer } from 'mobx-react'
import AgentConstant from "../../../AgentConstant";
import imgUrl from '../../../../source/img/146-amiyafashu.jpg'
import styled from 'styled-components'

const getColor = (start)=>{
  let param6 = {
    cardColor: '#dc3545',
    textColor: '#fff'
  }
  let param5 = {
    cardColor: '#ffc107',
    textColor: '#212529'
  }
  let param4 = {
    cardColor: '#17a2b8',
    textColor: '#fff'
  }
  let param3 = {
    cardColor: '#28a745',
    textColor: '#fff'
  }
  let param2And1 = {
    cardColor: '#f8f9fa',
    textColor: '#212529'
  }
  if(!start){
   start = 0
  }
  switch (start) {
    case 6:
      return param6
    case 5:
      return param5
    case 4:
      return param4
    case 3:
      return param3
    default:
      return param2And1
  }
}

const AgentUnit = observer((props)=>{
  let agentName = AgentConstant.SAMPLE_AGENT.agentName
  let avatar = AgentConstant.SAMPLE_AGENT.avatar
  let start = AgentConstant.SAMPLE_AGENT.start

  if(props){
    if(props['userName']){
      agentName = props['userName']
    }
    if(props['avatar']){
      avatar = require(props['avatar'])
    }
    if(props['start']){
      start = props['start']
    }
  }
  let returnParam = getColor(start)
  let cardColor = returnParam.cardColor
  let textColor = returnParam.textColor

  const Container = styled('div')`
    width: 126px;
    height: 155px;
    .card-radius {
      border-radius: 25px;
    }
    .card-style {
      width: 100%;
      padding: 3px 3px 2px 3px;
    }
    .card-img {
      width: 120px;
      height: 121px;
    }
    .card-text {
      width: 100%;
      height: 9px;
      text-align: center;
    }
  `

  return(
    <Container className={'card-radius'} style={{background: cardColor, borderRadius: "4px"}}>
      <div className={'card-style'} >
        <img src={imgUrl} className={'card-img'} />
      </div>
      <div className={'card-text'}>
        <span style={{color: textColor}}>
          {agentName}
        </span>
      </div>
    </Container>
  )
})



export default AgentUnit