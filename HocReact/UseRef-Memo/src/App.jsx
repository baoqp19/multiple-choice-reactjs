import React from 'react'
import Counter from './components/Counter'
import ImageBox from './components/ImageBox/ImageBox'
import Input from './components/Input'
import MoneyTransfer from './components/MoneyTransfer'
import Counter2 from './components/Counter2'
import Students from './components/Students'

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <ImageBox /> */}
      {/* <Input label="Họ tên" />
      <Input type="email" label="Email" />
      <Input type="number" label="Tuổi" /> */}

      {/* <MoneyTransfer /> */}
        <Students />
    </div>
  )
}

export default App