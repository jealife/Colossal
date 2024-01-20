import React from 'react'

export default function Gallery(props) {
  return (
    <div className="gallery">
      <div className="sm:px-[20px]">
        <div className="gallery-wrapper grid grid-cols-3 sm:grid-cols-2 sm:gap-2 gap-4 " >
          <div className="item">
            <img src={props.imageUrl}
              alt={props.imageAlt} className='w-full max-w-sm rounded-md h-56 sm:h-40 object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}
