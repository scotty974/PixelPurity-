import { Menu,Home } from 'lucide-react';
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
        <div className="p-4 flex justify-between items-start">
            <h1 className="text-white font-Nunito text-lg font-bold">PixelPurity</h1>
            <div className='flex flex-col items-end'>
            <Menu color='white' className='hover:cursor-pointer md:hidden' onClick={handleOpenMenu}/>
                {open ?  <ul className='mt-2 relative transition ease-in-out delay-300'>
                    <li className='text-gray-500 font-Nunito py-2 '><a href="" className='flex items-center'><Home  className='text-gray-500 mr-2' size={16}/>Accueil</a></li>
                    <li className='text-gray-500 font-Nunito py-2 '><a href="" className='flex items-center'><Home  className='text-gray-500 mr-2' size={16}/>Accueil</a></li>
                    <li className='text-gray-500 font-Nunito py-2 '><a href="" className='flex items-center'><Home  className='text-gray-500 mr-2' size={16}/>Accueil</a></li>
                    <li className='text-gray-500 font-Nunito py-2 '><a href="" className='flex items-center'><Home  className='text-gray-500 mr-2' size={16}/>Accueil</a></li>
                </ul> : null}
               
            </div>
            
        </div>
    )
}