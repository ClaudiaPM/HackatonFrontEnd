import SvgNivel from "../iconComponents/SvgNivel"
import SvgSangre from "../iconComponents/SvgSangre"
import SvgEnfermedad from "../iconComponents/SvgEnfermedad"

export default function SangEnfermedad() {

    return(
        <>
            <div className="bg-white p-0 md:p-3">
                <h2 className="text-lg text-center font-semibold mt-0">Tipo de Sangre y Enfermedades Cronicas</h2>
            </div>
            <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0">
                <div className=" col-span-1  mt-2 md:mt-0">
                    <p className="flex gap-0.5 items-center text-gray-600">
                        <SvgSangre/>
                        Tipo de Sangre:</p>
                    <p className="flex font-semibold gap-1 items-center">
                        No definido
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-0.5 items-center text-gray-600">
                        <SvgEnfermedad/>
                        Enfermedad:</p>
                    <p className="flex font-semibold gap-1 items-center">
                        No definido
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-0.5 items-center text-gray-600">
                        <SvgNivel/>
                        Nivel de Gravedad:</p>
                    <p className="flex font-semibold gap-1 items-center">
                        No definido
                    </p>
                </div>
            </div>   
        </>
    )
}