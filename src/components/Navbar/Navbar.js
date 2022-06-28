import { NavLink } from 'react-router-dom';

import { GiAbstract065 } from 'react-icons/gi';
import Cartwidget from '../cartwidget/Cartwidget';

export default function Navbar({cartCounter}) {

    return(
        <NavLink to={"/"} className=" bg-color1 shadow-md w-full h-16 flex flex-row items-center justify-center">

            <div className="px-20 text-3xl flex flex-row cursor-pointer text-color3 xl:mr-80">
                <GiAbstract065/>
                Store
            </div>

 

            <div className="flex gap-5 text-white px-10 text-xl text-color3 pr-5 xl:ml-80">
                <Cartwidget cartCounter={cartCounter}/>
                <button className='cursor-pointer hover:text-slate-900'>
                    Mi Perfil
                </button>
            </div>

        </NavLink>
    );
}

