import React from 'react'

const Ochi = () => {
  return (
    <div className='w-full h-screen  p-5 '>
        <div className='w-full  border-t-1 flex gap-5 py-20'>
            <div className=' w-1/2 h-[30vw] bg-green-900 '>
            <div className='flex justify-center items-center mt-48 '>
           <img className='w-48 ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"  alt="" />
           </div>
            <button className=' py-2 px-2 border-1 rounded-full mt-[10vw] m-18'>&copy;2019–2022</button>
            </div>
            <div className='w-1/3 h-[30vw] bg-zinc-900' >
            <div className='flex justify-center items-center mt-48'>
           <img className='w-48 h-24' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"  alt="" />
           </div>
            <button className='mt-[10vw] ml-28 uppercase text-2xl text-white border-1 rounded-full'>rating 5.0 on clutch</button>
            </div>
           <div className='w-1/3 h-[30vw] bg-zinc-900 '>
           <div className='flex justify-center items-center mt-40'>
           <img className='' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"  alt="" />
           </div>
           <button className='py-2 px-2 border-2 text-2xl text-white leading-none tracking-tighter rounded-full mt-28 ml-18 uppercase items-center'>businesses bootcamp alumini</button>

           </div>
        </div>  
        
    </div>
  )
}

export default Ochi