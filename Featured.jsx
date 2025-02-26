import React from 'react'

const Featured = () => {
  return (
    <div className='w-full py-10 '>
        <div className=' text-6xl tracking-tighter leading-none mt-18 '>
            <h1 className='h1 p-10 '>Featured project</h1>
            <div className='w-full py-20  border-t-1 px-40  flex '>
                <div className=' w-1/2 h-[30vw]  '>
                <img className='rounded-lg' src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png" alt="" />
                <div className='w-full  text-2xl mt-5 flex gap-5'>
                     <button className='px-2 py-2 border-1 rounded-full uppercase'>brand identify</button>
                    <button className='px-2 py-2 border-1 rounded-full uppercase'>pitch desk</button>
                </div>

                
                </div>
              
                <div className='w-1/2 h-[35vw] '>
                <img className='rounded-lg' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
                <div className='w-full  text-2xl mt-5 flex gap-5'>
                     <button className='px-2 py-2 border-1 rounded-full uppercase'>Branded template</button>
                    <button className='px-2 py-2 border-1 rounded-full uppercase'>sales deck</button>
                    <button className='px-2 py-2 border-1 rounded-full uppercase'>social media template</button>

                </div>
                </div>
            </div>
        </div>
    

    </div>
  )
}

export default Featured