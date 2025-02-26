import { BsArrowUpRight } from "react-icons/bs";



const LandingPage = () => {
  return (
    <div className='  w-full h-screen py-1 '>
 
     <div className='sturture  mt-32 px-10 py-5'>
            <div className='marker'> 
                <h1 className='text-semibold text-8xl leading-[5vw] tracking-tighter'>WE CREATE</h1>
            </div>
            <div className='marker  flex '>
                <div className="picture w-5 h-[3vw] py-10 px-16 rounded-md bg-red-800 -mt-[0.2vw]"></div> 
                <h1 className='text-semibold text-8xl leading-[4vw] tracking-tighter'>EYE-OPENING </h1>
            </div>
            <div className='marker'> 
                <h1 className='text-semibold text-8xl leading-[5vw] tracking-tighter'>PRESENTATION </h1>
            </div>
        </div>
     <div className=' w- full border-zinc-200   border-t-1 my-24 flex justify-between items-center  '>
        {["for publicz and private Compnies","From the first pitch to IPO "] .map((item,index)=>(
            <p key={index} className=' capitalize mx-20 py-5'>{item}</p>
        ))}
        <div className='start  '>
        <div className='py-2 mr-20 px-1 border-2 rounded-full mt-4'>START THE PROJECTS</div>
        </div> 
        <div className=' absolute border-2  mx-[97vw] mt-[1vw] py-2 px-2 rounded-full'><BsArrowUpRight/></div>
     </div>

    </div>
  )
}

export default LandingPage
