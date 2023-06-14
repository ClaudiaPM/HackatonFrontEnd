import Layout from "../layout/Layout";
import SvgCorreo from "../iconComponents/SvgCorreo";
import SvgTelefono from "../iconComponents/SvgTelefono";
import SvgDireccion from "../iconComponents/SvgDireccion";
import SvgNombre from "../iconComponents/SvgNombre";
import SvgParentesco from "../iconComponents/SvgParentesco";
import SvgEdad from "../iconComponents/SvgEdad";
import AxiosInstance from "../src/config/axios";
import { useState, useEffect } from "react";



export default function Perfil() {

    
    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        direccion: '',
        edad: '',
        genero: '',
        municipio: '',
        tipo_sangre: '',
    });

    const perfil = async () => {
        try {
            const headers = {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            };
            const response = await AxiosInstance.get("usuario/profile", { headers });
            const datos = response.data;
            console.log(datos);
            setDatos(datos.datos);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        perfil();
    }, []);


    return(
        <Layout pagina='Mi Perfil'>
            
            <div className="md:p-8 p-2 flex flex-col items-center sm:space-x-6 bg-white rounded-t-md">
                <div className=" mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://i.pravatar.cc/150?img=8" alt="image usuario" className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4 justify-center">
                    <div>
                        <p className="text-2xl font-semibold text-gray-900 text-center">{datos.nombre} {datos.apellido}</p>
                        {/* <p className="text-lg dark:text-gray-700 text-center">Doctor general</p> */}
                    </div>
                </div>
                
            </div>
            
            <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0 md:pb-2">
                <div className=" col-span-1  mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgCorreo />
                        Correo Electronico:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        {datos.email}
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgTelefono/>
                        Telefono:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        {datos.telefono}
                    </p>
                    <p className="flex mt-2 gap-1 items-center font-semibold">
                        <SvgEdad/>
                        Edad:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        {datos.edad}
                    </p>
                </div>
                <div className="col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgDireccion/>
                        Direccion:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        {datos.direccion}
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
                        no definido
                    </p>
                    <p className="flex gap-1 mt-2 items-center font-semibold">
                        <SvgParentesco/>
                        Parentesco:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        NO definido
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgTelefono/>
                        Telefono:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        No definido
                    </p>
                </div>
                <div className="col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <SvgDireccion/>
                        Direccion:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        No difinido 
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