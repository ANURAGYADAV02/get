import React from 'react'
// import { BsArrowUpRight } from "react-icons/bs";

const About1 = () => {
  return (
    <div className='w-full  bg-amber-900 py-1 rounded-tl-2xl rounded-tr-2xl' >
      <div className='w-full text-4xl font-semibold tracking-tighter leading-none mt-14'>
        <h1 className=''>Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple</h1>
      </div>
      <div className='w-full border-t-1 border-zinc-200 my-32 bg-amber-900 p-5 flex gap-[35vw]'>
      
        {["What you can expect:",
        "We partner with the companies and startup"
      ].map((item,index)=>(
            <p key={index} className='text-2xl leading-none tracking-tighter py-6'>{item}</p>
        ))}
        <div className='font-semibold -mx-[17vw] mt-3'>
            <h1>S:</h1>
            <div className='flex flex-col '>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Linkdin</a>
            </div> 
          </div>
      </div>
      <div className=' flex w-full border-t-1 border-zinc-200  py-20'>
      <div className='w-1/2  p-10'>
      <h1 className='text-5xl my-10'>Our apporoach</h1>
      <button className=' flex gap-3 items-center uppercase py-2 px-2 border-2 bg-zinc-950 text-white rounded-full'> read more
        <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
      </button>
        </div>
        <div className=' w-1/2  '>
        / <img className=' h-[33vw] rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /> 
        </div>
      </div>
    </div>
  ) 
}

export default About1

