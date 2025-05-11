import React from 'react'
import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { MdOutlineFoodBank } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
const Categrey = ({onFilter}) => {
    const Cat=[
    {
        id:1,
        name:"All",
        Icon:<TiThSmallOutline className='w-[60px] h-[50px] text-green-500 '/>
    },
    {
        id:2,
        name:"breakfast",
        Icon:<MdOutlineFreeBreakfast className='w-[60px] h-[50px] text-green-500 '/>
    },
    {
        id:3,
        name:"soups",
        Icon:<TbSoup className='w-[60px] h-[50px] text-green-500 '/>
    },
    {
        id:4,
        name:"pasta",
        Icon:<CiBowlNoodles className='w-[60px] h-[50px] text-green-500  '/>
    },
    {
        id:5,
        name:"main_course",
        Icon:<MdOutlineFoodBank className='w-[60px] h-[50px] text-green-500 '/>
    },
    {
        id:6,
        name:"pizza",
        Icon:<GiFullPizza className='w-[60px] h-[50px] text-green-500  '/>
    },
    {
        id:7,
        name:"burger",
        Icon:<GiHamburger className='w-[70px] h-[50px] text-green-500  '/>
    },
]
  return (
    
    <div className='w-full h-40  p-5 gap-5  flex flex-wrap justify-center  cursor-pointer' >
    {Cat.map((items)=>{
     return <div onClick={()=> onFilter(items.name)} className='w-28 bg-white p-5 hover:bg-green-300 cursor-pointer rounded-md' >
        <h1>{items.Icon}</h1>
        <h1 className='mt-5'>{items.name.charAt(0).toUpperCase() + items.name.slice(1)}</h1>
     </div>
    })}
    
    </div>
    
)

}

export default Categrey