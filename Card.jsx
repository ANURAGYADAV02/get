import React from 'react'
import image1 from "../assets/image1.avif"
import { GiChickenOven } from "react-icons/gi";
import { LuLeafyGreen } from "react-icons/lu";



const Card = ({name,image,price,id, type}) => {
  return (
    <div className='w-[250px] h-[400px] bg-white mt-20 rounded-3xl m-2 flex flex-col justify-between  shadow-lg hover: border-2 border-green-400 transition-all '>
        <div className=' hover:bg-green-300 cursor-pointer'> 
        <img src={image} alt="" className=' p-5 rounded-3xl ' />
        </div>
      <div className='m-2'>
        <b>{name}</b>
      </div>
      <div className='flex justify-between items-center m-2 text-green-500 hover:bg-green-300 cursor-pointer'>
        <div>RS {price}/</div>
        <div className='ml-20'>{type==="veg"?<LuLeafyGreen className='ml-'/>:<GiChickenOven/>}</div>
        <div className=''>{type}</div>
      </div>
        <button className='w-[85%] m-3 rounded-md  p-2 bg-green-800 text-white hover:bg-green-300 cursor-pointer'>Add to dish</button> 
        
    </div>
  )
}

export default Card