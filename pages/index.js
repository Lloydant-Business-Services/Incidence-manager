import Image from 'next/image'
import { FaArrowUpFromBracket } from "react-icons/fa6";


export default function Home() {
  return (
  <>
       <div className='pt-20 mx-auto'>
            
            <div className=''>
            <label htmlFor="message" className='mt-5 text-sm font-bold text-gray-700 text-center flex justify-center' >Your Message</label>
            
            <div className="flex  gap-2 px-4 justify-center mt-5 ">
                <textarea className="  shadow-md  p-8 border  border-slate-300 w-1/2" style={{height: "200px"}} id="message" placeholder="Type your message here..."></textarea>
            </div>
            </div>
            <div className='box-border m-0 p-0 flex flex-row justify-center'>
              <input type='file' id='uploadBtn' className='hidden' />
              
              <div className=' bg-blue-500 shadow-md p-2  mt-7 ml-4 flex justify-content-around'>
              <FaArrowUpFromBracket className='font-normal text-white mt-1 mr-2'/> 
              <label htmlFor='uploadBtn' className='inline-block uppercase text-white text-center text-md'>Upload file</label>
              </div>
             
              
            </div>
          </div>
  </>
  )
}
