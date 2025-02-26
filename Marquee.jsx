import React from 'react'
import { motion } from "framer-motion"

const Marquee = () => {
  return (
    <div className='mark w-full   py-20 bg-green-950   '>
      <div className='text w-full border-t-2 border-b-2 border-zinc-200'>
      <motion.div className=' flex whitespace-nowrap'
       animate={{ x: ["0%", "-100%"] }}
                transition={{ ease: "linear", duration: 10, repeat: Infinity }}>
        
        <h1 className='text-[15vw] font-semibold leading-none tracking-tighter uppercase'>we are ochi</h1>
        <h1 className='text-[15vw] font-semibold leading-none tracking-tighter uppercase'>we are ochi</h1>
      </motion.div>
      </div>
      </div>
  )
}

export default Marquee
// import React from "react";
// import { motion } from "framer-motion";

// const Marquee = () => {
//   return (
//     <div className="mark w-full py-10 bg-green-950 overflow-hidden">
//       {/* ✅ Borders are now on the full width */}
//       <div className="w-full border-t-2 border-b-2 border-zinc-200">
//         <motion.div
//           className="flex whitespace-nowrap"
//           animate={{ x: ["0%", "-100%"] }}
//           transition={{ ease: "linear", duration: 10, repeat: Infinity }}
//         >
//           <h1 className="text-[10vw] md:text-[15vw] font-semibold leading-none tracking-tighter uppercase px-10">
//             we are ochi
//           </h1>
//           <h1 className="text-[10vw] md:text-[15vw] font-semibold leading-none tracking-tighter uppercase px-10">
//             we are ochi
//           </h1>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default Marquee;

