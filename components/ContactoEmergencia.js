import SvgNombre from "../iconComponents/SvgNombre";
import SvgParentesco from "../iconComponents/SvgParentesco";
import SvgTelefono from "../iconComponents/SvgTelefono";

export default function ContactoEmergencia() {

    return(
        <>
            <div className="bg-white p-0 md:p-3">
                <h2 className="text-lg text-center font-semibold mt-0">Contacto de Emergencia</h2>
            </div>
            <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0">
                <div className=" col-span-1  mt-2 md:mt-0">
                    <p className="flex gap-0.5 items-center text-gray-600">
                        <SvgNombre/>
                        Nombre:</p>
                    <p className="flex font-semibold gap-1 items-center">
                        No definido
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-0.5 items-center text-gray-600">
                        <SvgParentesco/>
                        Parentesco:</p>
                    <p className="flex font-semibold gap-1 items-center">
                        No definido
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-0.5 items-center text-gray-600">
                        <SvgTelefono/>
                        Telefono:</p>
                    <p className="flex font-semibold gap-1 items-center">
                        No definido
                    </p>
                </div>
            </div>   
        </>
    )
}