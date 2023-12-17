import { Home,Inbox,File,PlusCircle  } from 'lucide-react';
import CategoriesList from '../CategoriesList/CategoriesList';
export default function Header() {
    return (
    <aside className="  md-p-0 h-full">
       <h1 className='text-4xl font-Nunito text-neutral-700 font-bold'>Mail box</h1>
       <ul className='mt-10 flex  md:flex-col  md:h-72 gap-6'>
        <li className='md:w-36'><a href="" className='flex text-neutral-700 font-Nunito items-center text-sm font-medium'>  <Home size={24} className='md:mr-4 mr-2' /> Home</a></li>
        <li className='md:w-36'><a href="" className='flex text-neutral-700 font-Nunito items-center text-sm font-medium'>  <Inbox size={24} className='md:mr-4 mr-2'/> Inbox</a></li>
        <li className='md:w-36'><a href="" className='flex text-neutral-700 font-Nunito items-center text-sm font-medium'>  <File size={24} className='md:mr-4 mr-2'/> Saved</a></li>
        <li className='md:w-36'><a href="" className='flex text-neutral-700 font-Nunito items-center text-sm font-medium'>  <PlusCircle  size={24} className='md:mr-4 mr-2'/> New</a></li>
       </ul>
       <CategoriesList />
      
    </aside>
    );
  }
  