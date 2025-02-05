import { useRef } from "react"
import Card from "./Card"

const Foreground = () => {
    const ref=useRef(null)
    const data=[
        {
            // ref =des filesize,closeordownload ,tagdetails
            desc:"ia fugiat cumque dolorem",
            fileSize:"0.9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        },
        {
            // ref =des filesize,closeordownload ,tagdetails
            desc:"ia fugiat cumque dolorem",
            fileSize:"0.9mb",
            close:false,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"blue"}
        },
        {
            // ref =des filesize,closeordownload ,tagdetails
            desc:"ia fugiat cumque dolorem",
            fileSize:"0.9mb",
            close:true,
            tag:{isOpen:true,tagTitle:"Download Now",tagColor:"green"}
        }
    ]
    
  return (
    <div>
      
      <div ref={ref} className=" relative fixed w-full h-screen  flex gap-10 ">
      {data.map((item,index)=>(
        <Card key={index} data={item} reference={ref}/>
      ))}
        
      </div>

      

    </div>
  )
}

export default Foreground
