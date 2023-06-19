import SvgCorreo from "../iconComponents/SvgCorreo";
import SvgTelefono from "../iconComponents/SvgTelefono";
import SvgDireccion from "../iconComponents/SvgDireccion";
import SvgEdad from "../iconComponents/SvgEdad";
import useSalud from "../hooks/useSalud";

export default function DatosPerfil() {
    const { datos } = useSalud()
    const {email, telefono, direccion, edad,} = datos

    return(
        <>
        
            <div className="mt-2">
            <p className="flex gap-0.5 items-center text-gray-600">
                <SvgCorreo className="w-6 h-6 mr-2" />
                Correo Electrónico:
            </p>
            <p className="flex font-semibold gap-1 items-center">{email}</p>
            </div>

            <div className="mt-2">
            <p className="flex gap-0.5 items-center text-gray-600">
                <SvgTelefono className="w-6 h-6 mr-2" />
                Teléfono:
            </p>
            <p className="flex font-semibold gap-1 items-center">
                {telefono}
            </p>

            <p className="mt-2 flex gap-0.5 items-center text-gray-600">
                <SvgEdad className="w-6 h-6 mr-2" />
                Edad:
            </p>
            <p className="flex font-semibold gap-1 items-center">{edad}</p>
            </div>

            <div className="mt-2">
            <p className="flex gap-0.5 items-center text-gray-600">
                <SvgDireccion className="w-6 h-6 mr-2" />
                Dirección:
            </p>
            <p className="flex font-semibold gap-1 items-center">
                {direccion}
            </p>
            </div>
            
        </>
    )
}