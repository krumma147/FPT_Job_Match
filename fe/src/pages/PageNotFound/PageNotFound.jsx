import React from 'react'

export default function PageNotFound(props) {
  return (
    <div>
      <h1>Không tìm thấy trang {props.match.url}</h1>
    </div>
  )
}
