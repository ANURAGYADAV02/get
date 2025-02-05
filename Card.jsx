import { FaRegFileAlt } from "react-icons/fa"
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

function Card ({data,reference}) {

  return ( 
    <motion.div drag  dragConstraints={reference} whileDrag={{scale:1.2}} dragElastic={1.2} dragTransition={{bounceStiffness:100,bounceDamping:20}} className="relative card w-50 h-55 bg-zinc-900 text-white rounded-[50px] p-5 overflow-hidden">
    <FaRegFileAlt/>
    <p className="w-full tracking-tight leading-none p-5">{data.desc} </p>
    
    <div className="footer absolute w-full left-0 bg-zinc-900 bottom-0 rounded-md"> 
        <div className="flex justify-between mb-10 pl-1 pr-3">
        <h5>{data.fileSize} </h5>
        <span  className="bg-zinc-700 rounded-full flex jstify-center w-5 h-5 ">
        {data.close ? <IoClose/> : <LuDownload size="1em" color="#fff "/>}
        </span>
        </div>
        {data.tag.isOpen ?(
                    <div className={`tag w-full ${data.tag.tagColor==="blue" ? "bg-blue-600":"bg-green-600"} flex justify-center py-3`}>{data.tag.tagTitle}</div>

        ) :null }
        
       
    </div>
    

    </motion.div>

  )
}

export default Card
