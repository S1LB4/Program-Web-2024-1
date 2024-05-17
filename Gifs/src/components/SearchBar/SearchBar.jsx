import React from 'react'
export function InputSearch({handleInputChange}) {

    return (
      <>
        <div className='flex flex-col w-full py-10 items-center'>
            <span  className='flex w-full text-gray text-sm pl-12'>Use Key Words for Gifs</span>
            <div className='flex'>
                <input className=' rounded-l-lg'
                placeholder='Cars, Football, Sports, Ex...'
                onChange={handleInputChange}
                />
                <button className=' rounded-l-none'>Fetch</button>
            </div>
        </div>
      </>
    )
  }