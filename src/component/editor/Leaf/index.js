import React from 'react'

const Leaf = ({ attributes, children, leaf }) => {
  if (leaf.bold) {
    children = <strong>{children}</strong>
  }
  if (leaf.code) {
    console.log(children)
    children = (<div style={{ "background": "#e7e7e7" }}><code style={{ "background": "#e7e7e7" }}>{children}</code></div>)
  }

  if (leaf.italic) {
    children = <em>{children}</em>
  }
  if (leaf.strike) {
    children = <del>{children}</del>
  }
  if (leaf.underline) {
    children = <u>{children}</u>
  }

  return <span {...attributes}>{children}</span>
}

export default Leaf