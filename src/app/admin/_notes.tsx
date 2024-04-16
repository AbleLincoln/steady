import { useState } from 'react'
import Quill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

const toolbar = [
  ['bold', 'italic', 'underline'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  ['link', 'image'],
]

export default function Notes() {
  const [value, setValue] = useState('')

  return (
    <div className="basis-1/4 px-3 py-3">
      <h2 className="mb-2">Notes</h2>
      <Quill
        theme="snow"
        value={value}
        onChange={setValue}
        modules={{ toolbar }}
      />
    </div>
  )
}
