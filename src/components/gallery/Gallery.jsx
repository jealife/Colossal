import { React, useState } from 'react'

export default function Gallery({ children }) {
  return (
    <div className="gallery">
      <div className="sm:px-[20px]">
        <div className="gallery-wrapper grid grid-cols-3 sm:grid-cols-2 sm:gap-2 gap-4 " >
          {children}
        </div>
      </div>
    </div>
  )
}
