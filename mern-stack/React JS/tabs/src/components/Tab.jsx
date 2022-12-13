import React from 'react'

const Tab = (props) => {

  const handleTab = () => {
    props.changeContent(props.index)
  }
  return (
    <div onClick={handleTab}>{props.title}</div>
  )
}

export default Tab