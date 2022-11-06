import React, { useState } from 'react'
import Login from './components/Login'
import MainPage from './components/MainPage'



const App = () => {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <div>
      {/* <Login setIsLogin={setIsLogin} /> */}
      <MainPage />
    </div>
  )
}

export default App
