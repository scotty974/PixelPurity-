import { Menu,Home, X,BookCopy,Presentation,Webhook   } from 'lucide-react';
import { useState } from 'react';
export default function Header(){
    const [open,setOpen] = useState(false)


    function handleOpenMenu(){
        setOpen(true)
        if(open){
            setOpen(false)
        }
    }

    return (
        <header className="p-4 flex justify-between items-start  ">
            <h1 className="text-white font-Nunito text-lg font-bold">PixelPurity</h1>
            <div className='flex flex-col  items-end'>
                {open ?  <X color='white' className='hover:cursor-pointer ' onClick={handleOpenMenu}/> :<Menu color='white' className='hover:cursor-pointer ' onClick={handleOpenMenu}/>}
                  <ul className={`mt-2 absolute top-10 transition ease-in-out delay-300 bg-white bg-opacity-5 p-4 rounded-lg backdrop-blur-md ${open ? 'visible' : 'hidden'}`} >
                    <li className='text-gray-500 font-Nunito py-2 '><a href="" className='flex items-center text-white'><Home  className='text-white mr-2 ' size={16}/>Home</a></li>
                    <li className='text-gray-500 font-Nunito py-2 '><a href="" className='flex items-center'><BookCopy   className='text-gray-500 mr-2' size={16}/>About</a></li>
                    <li className='text-gray-500 font-Nunito py-2 '><a href="" className='flex items-center'><Presentation   className='text-gray-500 mr-2' size={16}/>Work</a></li>
                    <li className='text-gray-500 font-Nunito py-2 '><a href="" className='flex items-center'><Webhook   className='text-gray-500 mr-2' size={16}/>Contact</a></li>
                </ul> 
               
            </div>
            
        </header>
    )
}