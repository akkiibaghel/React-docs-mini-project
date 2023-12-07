import React, { useRef, useState } from 'react'
import Card from './Card'

function Foreground() {

  const ref = useRef(null)
  const data = [
    {
      desc: "Lorem,Akkii baghel ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      tag:{isOpen: true ,tagTitle: "Download Now", tagColor: "green"}
      
      
    },
    {
      desc: "Lorem,Akkii baghel ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      tag:{isOpen: true ,tagTitle: "Download Now", tagColor: "blue"}
      
      
    },
    {
      desc: "Lorem,Akkii baghel ipsum dolor sit amet consectetur adipisicing elit.",
      filesize: ".9mb",
      close: false,
      tag:{isOpen: true ,tagTitle: "Download Now", tagColor: "green"}
      
      
    },
    
  ];
  return (
    <div ref={ref} className="fixed top-0 left-0 w-full h-full z-[3] flex gap-10 flex-wrap p-4">
      {data.map((item , index) =>(
        <Card  data= {item} reference = {ref} />
      ))}
    </div>

  );
}

export default Foreground;
