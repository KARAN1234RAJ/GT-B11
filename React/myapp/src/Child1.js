import React from 'react'

const Child1 = (props) => {
  return (
    <div>
      <h2 style={{color:"red"}}>Child Component 1</h2>
      {/* <h3>This is a child component 1. {props.message}</h3> */}
      <h3>This is a child component 1. {props.children}</h3>
    </div>
  )
}

export default Child1