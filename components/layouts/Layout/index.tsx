import React from 'react'

function Layout(props) {
  return (
    <div>
      <div className="wrap">{props.children}</div>
    </div>
  )
}

export default Layout
