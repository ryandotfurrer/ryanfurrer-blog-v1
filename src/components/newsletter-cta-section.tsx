// src/components/sections/AlertSection.tsx
import React from 'react'

const AlertSection = ({ text }) => {
  return (
    <div className="py-6 bg-primary">
      <div className="container mx-auto">
        <p className="text-center text-xl text-white">{text}</p>
      </div>
    </div>
  )
}

export default AlertSection