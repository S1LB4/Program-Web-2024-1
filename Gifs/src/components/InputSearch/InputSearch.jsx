import React from 'react'
export function InputSearch({handleInputChange}) {

    return (
      <>
        <div className='flex flex-col w-full py-8 items-center'>
            <span  className='flex w-full text-gray-400 text-sm pl-12'>Key Words Gifs</span>
            <div className='flex'>
                <input className=' rounded-l-lg'
                placeholder='Football, Cars, Sports, Ex...'
                onChange={handleInputChange}
                />
                <button className=' rounded-l-none'>Fetch</button>
            </div>
        </div>
      </>
    )
  }