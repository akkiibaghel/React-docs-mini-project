import React from 'react'

function Background() {
  return (
    <>
    <div className=' w-screen h-screen fixed z-[2]'>
        <div className='w-screen py-10  flex justify-center text-xl font-semibold text-zinc-500'>Document</div>
        <h1 className=' absolute text-[15vw] top-1/2 left-1/2 text-zinc-900 -translate-x-[50%] 
        -translate-y-[50%]  leading-none tracking-tighter'>Docs.</h1>
    </div>
    </>
  )
}

export default Background
