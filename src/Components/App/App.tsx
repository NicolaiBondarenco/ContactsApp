import './App.css'
import { Routes, Route } from 'react-router-dom'
import ContactsList from '../ContactsList/ContactsList'
import Authorization from '../Authorization/Authorization'
import React from 'react'

const App: React.FC = () => {
  return (
    <div className="app container-sm w-50 p-3">
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="/contactsList" element={<ContactsList />} />
      </Routes>
    </div>
  )
}

export default App
