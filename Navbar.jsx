import React from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import { useContext } from 'react';
import { Context_U } from '../Context/UserC';

const Navbar = ({searchTerm,onSearchChange}) => {
  const {showCard,setshowCard} =useContext(Context_U)
  return (
    <div className='w-full h-14 flex justify-between items-center p-2 rounded-md '>
        <div className=' w-[60px] h-[50px] bg-white flex justify-center items-center md:p-2 rounded-md text-green-600 hover:bg-green-300 cursor-pointer' >
            <MdFastfood className="text-2xl " />
        </div>
        <form className='w-[40%] h-[40px] flex  items-center gap-5 px-2 bg-white md:w-[70%]'>
        <FaSearch className='text-green-500 flex justify-center items-center '/>
        <input type="text" placeholder='Search items....' className=' w-full outline-none'value={searchTerm}
              onChange={onSearchChange} />
        </form>
        <div onClick={()=>{
          setshowCard(true)
        }} className=' w-[60px] h-[50px] bg-white flex justify-center items-center md:p-2 rounded-md text-green-600 hover:bg-green-300 cursor-pointer'>
            <FaBagShopping className="text-2xl"/>
        </div>
        <div className={`w-[40%] h-full fixed top-0 right-0 bg-white transition-all duration-1000 ${showCard?"translate-x-0":"translate-x-full"}`}> 
        <header className=' flex justify-between items-start p-6 text-green-500 font-semibold cursor-pointer'>
          <span>Order Items</span>
        <RxCross2 onClick={()=>{
          setshowCard(false)
        }} className='w-[30px] h-[30px]'/>
        </header>
        </div>
    </div>
  )
}

export default Navbar