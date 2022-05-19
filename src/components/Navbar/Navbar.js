import { NavLink } from 'react-router-dom';

import { GiAbstract065 } from 'react-icons/gi';
import Cartwidget from '../cartwidget/Cartwidget';

export default function Navbar({cartCounter}) {

    return(
        <NavLink to={"/"} className="bg-purple-500 shadow-md w-full h-16 flex flex-row items-center justify-between">

            <div className="px-20 text-3xl flex flex-row cursor-pointer">
                <GiAbstract065/>
                Store
            </div>

 

            <div className="flex gap-5 text-white px-10 text-xl pr-5">
                <Cartwidget cartCounter={cartCounter}/>
                <button className='cursor-pointer hover:text-slate-900'>
                    Mi Perfil
                </button>
            </div>

        </NavLink>
    );
}

