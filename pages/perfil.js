import Layout from "../layout/Layout";
import SvgCorreo from "../iconComponents/SvgCorreo";
import SvgTelefono from "../iconComponents/SvgTelefono";
import SvgDireccion from "../iconComponents/SvgDireccion";
import SvgNombre from "../iconComponents/SvgNombre";
import SvgParentesco from "../iconComponents/SvgParentesco";


export default function Perfil() {
    return(
        <Layout pagina='Mi Perfil'>
            
            <div className="md:p-8 p-2 flex flex-col items-center sm:space-x-6 bg-white rounded-t-md">
                <div className=" mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://i.pravatar.cc/150?img=8" alt="" className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4 justify-center">
                    <div>
                        <h2 className="text-2xl font-semibold">Juan Carlos Rodríguez López</h2>
                        <p className="text-lg dark:text-gray-700 text-center">Doctor general</p>
                    </div>
                </div>
                
            </div>
            
            <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0 md:pb-2">
                <div className=" col-span-1  mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgCorreo />
                        Correo Electronico:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        correoelectronico@correo.com
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgTelefono/>
                        Telefono:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        7000 000
                    </p>
                </div>
                <div className="col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgDireccion/>
                        Direccion:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        San Salvador, San salvador
                    </p>
                </div>
            </div>
            <div className="bg-white p-0 md:p-3">
                <h2 className="text-xl text-center font-semibold mt-0">Contacto de Emergencia</h2>
            </div>
            <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0">
                <div className=" col-span-1  mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgNombre/>
                        Nombre:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        Laura Valentina González Sánchez
                    </p>
                    <p className="flex gap-1 mt-2 items-center font-semibold">
                        <SvgParentesco/>
                        Parentesco:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        Esposa
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgTelefono/>
                        Telefono:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        7000 000
                    </p>
                </div>
                <div className="col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgDireccion/>
                        Direccion:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        San Salvador, San salvador, 
                    </p>
                </div>
            </div>

            <div className="flex mt-5 justify-end">
                <button 
                    type="submit"
                    className="justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
                >
                    cerrar Sesion
                </button>
            </div>
        </Layout> 
    )
}