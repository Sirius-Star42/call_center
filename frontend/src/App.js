import React, { useState } from 'react'
import Login from './components/Login'


const App = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div>
      <Login setIsLogin={setIsLogin} />
    </div>
  )
}

export default App
