import React, { useCallback, useState } from 'react';
import { Editable, Slate } from "slate-react";
import Element from './Element';
import Leaf from './Leaf';
function AdminEditor(props) {
  // const editor = useMemo(() => withReact(createEditor()), [])
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem('content')) ||
    [{
      type: 'paragraph',
      children: [{ text: '段落中的一段文本' }],
    }
    ])

  const renderElement = useCallback(props => <Element {...props} />, [])

  const renderLeaf = useCallback(props => <Leaf {...props} />, [])

  return (
    <Slate
      editor={props.editor}
      value={value}
      onChange={value => {
        setValue(value)
        const content = JSON.stringify(value)
        localStorage.setItem('content', content)
      }}
    >
      <Editable
        style={props.style}
        renderElement={renderElement}
        renderLeaf={renderLeaf}
        spellCheck
        autoFocus
      />
    </Slate>
  )
}
export default AdminEditor