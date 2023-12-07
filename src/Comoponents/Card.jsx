import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion"




function Card({data ,reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={0.2} className=' relative flex-shrink-0 overflow-hidden w-60 h-72 bg-zinc-800 rounded-[40px] text-white p-5'>
        <FaRegFileAlt />
        <p className='text-sm mt-5 font-semibold '>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full    left-0 '>
            <div className=' flex items-center justify-between px-9 py-3 mb-3'>
                <h5>{data.filesize}</h5>
                <span className=' w-7 h-7 rounded-full flex items-center  justify-center'>
                    {data.close ? <IoIosCloseCircleOutline /> : <MdDownloadForOffline color='#fff' />}
                </span>

            </div>
            {
                data.tag.isOpen && (

                    <div className= {`tag w-full p-4 ${data.tag.tagColor == "blue" ? "bg-blue-500" : "bg-green-600"} flex items-center justify-center`}>

                       <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                    </div>
                )
            }
            
        </div>
      </motion.div>

    
      
  )
}

export default Card
