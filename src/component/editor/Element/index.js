import React from 'react'
const Element = ({ attributes, children, element }) => {
  console.log(element)
  switch (element.type) {
    case 'quote':
      return <blockquote {...attributes}>{children}</blockquote>
    case 'bulleted-list':
      return <ul {...attributes}>{children}</ul>
    case 'heading-one':
      return <h1 {...attributes}>{children}</h1>
    case 'heading-two':
      return <h2 {...attributes}>{children}</h2>
    case 'list-item':
      return <li {...attributes}>{children}</li>
    case 'numbered-list':
      return <ol {...attributes}>{children}</ol>
    case 'link':
      return (
        <a {...attributes} href={element.url} target="_black" style={{ "cursor": "pointer" }}>
          {children}
        </a>
      )
    default:
      return <p {...attributes}>{children}</p>
  }
}
export default Element