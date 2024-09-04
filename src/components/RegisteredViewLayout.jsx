import React from 'react'
import { Outlet } from 'react-router-dom';
import Header from './Header';
const RegisteredViewLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
    <Header/>
      <main  className="flex-grow px-14">
        <Outlet /> {/* Nested routes render here */}
      </main>
    
    </div>
  )
}

export default RegisteredViewLayout