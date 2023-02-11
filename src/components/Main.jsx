import React from 'react'

const Main = ({userName, num}) => {
  const clickHandler = () => {
    console.log("clicked")
  }
  return (
    <div>
      <h2>{userName}</h2>
      <p>{num}</p>
      <button onClick={clickHandler}>Click me</button>
    </div>
  )
}

export default Main