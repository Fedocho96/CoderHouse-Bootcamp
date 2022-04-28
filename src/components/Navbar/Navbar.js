import { GiAbstract065 } from 'react-icons/gi';

export default function Navbar() {

    const categorias = [{titulo:"categorias", id:"1"}, {titulo:"ofertas", id:"2"}, {titulo:"Populares", id:"3"}, {titulo:"Combos", id:"4"}]

    return(
        <div className="bg-purple-500 shadow-md w-full h-16 flex flex-row items-center justify-between">

            <div className="px-20 text-3xl flex flex-row cursor-pointer">
                <GiAbstract065/>
                Store
            </div>

            <div className="flex flex-grow justify-evenly px-10 text-xl text-white">
                {categorias.map(({titulo, id})=>(
                    <h2 key={id} className="cursor-pointer hover:text-slate-900 px-10">{{titulo}.titulo}</h2>
                ))}
            </div>

            <div className="text-white hover:text-slate-900 cursor-pointer px-10 text-xl pr-5">Mi Perfil</div>

        </div>
    );
}

