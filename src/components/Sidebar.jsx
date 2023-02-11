import React from 'react'

const Sidebar = ({message}) => {
  const asideStyle = {
    background: "Azure",
    width: "calc(100% - 10px)",
    marginLeft: "10px"
  }
  return (
    <aside style={asideStyle} className="sidebar-component">
     <h2>sidebar component</h2>
     <p>{message}</p>
    </aside>
  )
}

export default Sidebar