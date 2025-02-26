import { useEffect, useState } from "react"

const Eyes1 = () => {
    const [rotate, setrotate] = useState("")
useEffect(()=>{
    window.addEventListener("mousemove" ,(e)=>{
        let mouseX= e.clientX;
        let mouseY= e.clientY

        let deltaX = mouseX - window.innerWidth/2
       let deltaY = mouseY - window.innerHeight/2


     var angle = Math.atan2(deltaY,deltaX) * (180/Math.PI)
     setrotate(angle-180)


    })
})
    
  return (
    <div className='w-full h-screen bg-zinc-950 '>
        <div className=" relative full h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className=" flex gap-12 items-center justify-center absolute   top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] " >
            <div className="w-50 h-50 bg-zinc-100 rounded-full flex   items-center justify-center">
                <div className=" relative w-30 h-30 bg-zinc-950 rounded-full ">
                    <div style={{transform: `translate(-0%,-0%) rotate(${rotate}deg)`}} className=" absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%]   line w-[5.8vw]  h-[2vw]">
                        <div className="w-4 h-4 bg-zinc-100 rounded-full"></div>
                    </div>
                </div>
            </div>
            <div className="w-50 h-50 bg-zinc-100 rounded-full flex  items-center justify-center">
                <div className=" relative  w-30 h-30 bg-zinc-950 rounded-full flex items-center justify-center">
                     <div style={{transform: `translate(-0%,-0%) rotate(${rotate}deg)`}} className=" absolute top-1/2 left-1/2 -translate-x-[50%]  -translate-y-[50%] line w-[5.8vw]  h-[2vw]">
                        <div className="w-4 h-4 bg-zinc-100 rounded-full"></div>
                    </div>
                </div>
            </div>

        </div>
        </div>
    </div>
  )
}

export default Eyes1