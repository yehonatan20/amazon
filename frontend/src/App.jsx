import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import HomePage from './pages/HomePage'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'

function App() {

  return (
    <>
      <BrowserRouter>
        <div className='d-flex flex-column side-allPage'>
          <Header/>
          <main>
            <Container className='mt-3'>
              <Routes>
                <Route  path='/' element={<HomePage />} />
              </Routes>
            </Container>
          </main>
          <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
