import React from 'react'
import { Tag } from 'antd'

const CustomerTag = (props)=>{
  let text = props && props['text']? props['text']: null
  let color = props && props['color']? props['color']: '#6c757d'
  let textColor = props && props['textColor']? props['textColor']: '#fff'
  return(
    <Tag color={color}>
      <span style={{color: textColor}}>{text}</span>
    </Tag>
  )
}

export default CustomerTag