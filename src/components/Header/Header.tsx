export default function Header() {
    return (
    <header className="mt-4 p-4 md:p-0 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-white text-2xl">Logo</h1>
        <ul className="flex text-white font-Nunito md:justify-between justify-around  w-96 mt-4 md:mt-0">
            <li className="hover:cursor-pointer hover:underline">Agents </li>
            <li className="hover:cursor-pointer hover:underline" >Weapons</li>
            <li className="hover:cursor-pointer hover:underline">Ranked Tiers</li>
        </ul>
    </header>
    );
  }
  