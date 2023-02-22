import React from 'react'

const Loading = () => {
  return (
    <div className='text-center'>
      <div className="spinner-grow text-center my-5" style={{width: '4rem', height: '4rem', color:"#3A77FF"}} role="status">
        <span className="visually-hidden text-center">Loading...</span>
      </div>
    </div>
  )
}

export default Loading;
