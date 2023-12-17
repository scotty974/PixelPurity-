import {Folder} from 'lucide-react'
export default function CategoriesList(){

    return(
        <div className='mt-10 md:mt-0'>
        <h2 className='text-base font-Nunito text-neutral-700 font-bold'>Categories</h2>
        <ul className='mt-4 flex md:flex-col gap-6'>
         <li className='md:w-36'><a href="" className='flex text-neutral-700 font-Nunito items-center text-sm font-medium'> <Folder  size={24} className='md:mr-4 mr-2'/>React</a></li>
         <li className='md:w-36'><a href="" className='flex text-neutral-700 font-Nunito items-center text-sm font-medium'> <Folder  size={24} className='md:mr-4 mr-2'/>React</a></li>
        </ul>
        </div>
    )
}