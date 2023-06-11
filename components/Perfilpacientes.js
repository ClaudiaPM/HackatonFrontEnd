import SvgCorreo from "../iconComponents/SvgCorreo";
import SvgTelefono from "../iconComponents/SvgTelefono";
import SvgDireccion from "../iconComponents/SvgDireccion";
import SvgNombre from "../iconComponents/SvgNombre";
import SvgParentesco from "../iconComponents/SvgParentesco";
import SvgGenero from "../iconComponents/SvgGenero";
import SvgEdad from "../iconComponents/SvgEdad";
import SvgSangre from "../iconComponents/SvgSangre";

export default function Perfilpacientes() {
    return(
        <>
            <div className="md:p-8 p-2 flex flex-col items-center sm:space-x-4 bg-white rounded-t-md">
                <div className=" mb-6 h-20 sm:h-20 sm:w-20 sm:mb-0">
                    <img src="https://source.unsplash.com/100x100/?portrait?1" alt="imagen paciente" className="object-cover object-center w-full h-full rounded-full bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4 justify-center">
                    <div>
                        <h2 className="text-2xl font-semibold">Juan Carlos Rodríguez López</h2>
                        <p className="text-lg dark:text-gray-700 text-center">Paciente Programador</p>
                    </div>
                </div>
            </div>
            
            <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0 md:pb-2">
                <div className=" col-span-1  mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgCorreo/>
                        Correo Electronico:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        correoelectronico@correo.com
                    </p>
                    <p className="flex gap-1 mt-2 items-center font-semibold">
                        <SvgGenero/>
                        Genero:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        Masculino
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgTelefono/>
                        Telefono:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        7000 9999
                    </p>
                    <p className="flex gap-1 mt-2 items-center font-semibold">
                        <SvgEdad/>
                        Edad:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        33 años
                    </p>
                </div>
                <div className="col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgDireccion/>
                        Direccion:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        San Salvador, San salvador
                    </p>
                    <p className="flex gap-1 mt-2 items-center font-semibold">
                        <SvgSangre/>
                        Tipo de Sangre:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        tipo A
                    </p>
                </div>
                
            </div>

            {/* Contacto de emercgencia */}
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
                        7000 0000
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
        </>
    )
}