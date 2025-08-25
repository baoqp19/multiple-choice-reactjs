import React from 'react'
import { memo } from 'react'

const Content = () => {
  return (
    <div>
        <h2>This is content</h2>
    </div>
  )
}

export default memo(Content)

// HOC = higher order component ->> component cấp cao hơn bọc component hiện tại
// --> React.memo() -> dựa vào sự thay đổi của props
// BUild HOC : color --> Thay đổi màu ngẫu nhiêm của 1 component
// -- nhận component
// -- trả về componet mới -> trả về component ban đầu