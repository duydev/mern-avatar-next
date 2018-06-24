import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import Header from '../Header'
import Main from '../Main'
import Footer from '../Footer'

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
