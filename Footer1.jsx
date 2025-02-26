
import React from 'react'

const Footer1 = () => {
  return (
    
    <div className='w-full '>
        <div className='w-full flex border-t-1 border-zinc-600'>
        <div className='w-1/2  p-10'>
        <h1 className='leading-none tracking-tighter uppercase text-7xl'>eye-</h1>
        <h1 className='leading-none tracking-tighter uppercase text-7xl'>opening</h1>        
        </div>
        <div className='w-1/2 h-[50vw] py-10'>
        <h1 className='leading-none tracking-tighter uppercase text-7xl '>PRESENTATION</h1>
        <div className='w-1/2 py-10'>
            <h1>S:</h1>
            <div className='flex flex-col'>
                <a className='cursor-pointer underline ' href="#" >Instagram</a>
                <a className='cursor-pointer underline ' href="#" >Facebook</a>
                <a className='cursor-pointer underline ' href="#" >Linkdin</a>
            </div>
            <div className='w-full py-5'>
            <h1 className=''>L:</h1>
            <div className='w-full flex justify-between items-center gap-[34vw]'>
            <div className='w-1/2 flex flex-col'>
                <a className='cursor-pointer whitespace-nowrap ' href="#" >202-1965 W 4th Ave</a>
                <a className='cursor-pointer underline' href="#" >vancover,Canadaa</a>
            </div>
            <div className='w-1/2 flex flex-col'>
                <a className='cursor-pointer underline ' href="#" >Home</a>
                <a className='cursor-pointer underline' href="#" >About</a>
                <a className='cursor-pointer underline' href="#" >Service</a>
                <a className='cursor-pointer underline' href="#" >Contact Us</a>
            </div>
            <div className='w-1/2'>
                <h1>E:</h1>
                <div className=''>
                    <a href="#">hello@ochi.design</a>
                </div>
            </div>
            </div>
        </div>        
        </div>
        </div>
        </div>
    </div>
  )
}

export default Footer1