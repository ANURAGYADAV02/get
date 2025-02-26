import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

const Foooter = () => {
  return (
    <>
    <div className="w-full h-screen bg-zinc-200 text-zinc-900 flex  justify-between p-3 ">
      <div className="w-full ">
        <h1 className="font-semibold py-3" >Product</h1>
        <div className="item">
        <h2 className="cursor-pointer">Milk</h2>
        <h2 className="cursor-pointer">Ghee</h2>
        <h2 className="cursor-pointer">Paneer</h2>
        <h2 className="cursor-pointer">Curd</h2>
        <h2 className="cursor-pointer">ButterMilk</h2>
        </div>
      </div> 
      <div className="w-full ">
        <h1 className="font-semibold py-3" >Policy</h1>
        <div className="item">
        <h2 className="cursor-pointer">PrivacyPolicy</h2>
        <h2 className="cursor-pointer">Term&Condition</h2>
        <h2 className="cursor-pointer">Cancellation</h2>
        <h2 className="cursor-pointer">ShippingPolicy</h2>
        </div>
      </div>
      <div className="w-full ">
        <h1 className="font-semibold py-3" >Contact Us</h1>
        <p className="item mr-20 gap-5 ">
        <h3 className="cursor-pointer">Vill- Allahpur Krishnarpan Teh- Mashli Shahar Distt- Jaunpur, Jaunpur HO, Jaunpur - 222001 (Near Janjhai Railway Station)</h3>
        </p>
      </div>
      <div className="w-1/4 text-center ">
        <h1 className="font-semibold py-2">Download App</h1>
        <div className="space-y-2 flex">
          <button className="bg-black text-white px-3 py-1 mt-3 rounded">iOS</button>
          <button className="bg-black text-white px-3 py-1 rounded ml-2">Android</button>
        </div>
        <h2 className="mt-4 font-semibold">Follow us on:</h2>
        <div className="flex justify-center space-x-3 mt-2">
          <FaInstagram size={24} className="text-pink-500" />
          <FaFacebook size={24} className="text-blue-600" />
          <FaLinkedin size={24} className="text-blue-800" />
        </div>
       
      </div>
      
    </div>
    <div className="w-full text-center py-4 bg-zinc-300 absolute top-1/3 left-1/2 -translate-x-[50%] -translate-y-[50%]">
        <p className="text-sm">© Copyright 2025. All Rights Reserved.</p>
      </div>
   
    </>
  )
}

export default Foooter
