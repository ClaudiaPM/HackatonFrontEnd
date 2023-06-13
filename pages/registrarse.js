import { useState, useEffect } from "react";
import Head from "next/head"
import axios from "axios";
import Link from "next/link";    

export default function Registrarse() {
    const [formData, setFormData] = useState({
        idtipoSangre: 0,
        idgenero: 0,
        padecimientos_general: '',
        nombre: '',
        apellido: '',
        edad: 0,
        email: '',
        telefono: '',
        url_foto: '',
        direccion_detalle: '',
        medico_encargado: 0,
        observaciones: '',
        idconsultorio: 0,
        idmedico: 0
      });

      const [selectedGenero, setSelectedGenero] = useState(''); 
      const [selectedSangre, setSelectedSangre] = useState(''); 

        // Función para manejar cambios en el campo "género"
        const handleGeneroChange = (event) => {
            setSelectedGenero(event.target.value);
        };

        // Función para manejar cambios en el campo "género"
        const handleSangreChange = (event) => {
            setSelectedSangre(event.target.value);
        };
            
      // Función para manejar cambios en los campos del formulario
      const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };
    
      // Función para enviar los datos del formulario
      const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
          const response = await axios.post('https://api-backend.techvisionaryx.com/api/register/paciente', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log(response.data); // Hacer algo con la respuesta de la API
          // Restablecer los valores del formulario
          setFormData({
            idtipoSangre: 0,
            idgenero: 0,
            padecimientos_general: '',
            nombre: '',
            apellido: '',
            edad: 0,
            email: '',
            telefono: '',
            url_foto: '',
            direccion_detalle: '',
            medico_encargado: 0,
            observaciones: '',
            idconsultorio: 0,
            idmedico: 0
          });
        } catch (error) {
          console.error(error);
          // Manejar el error
        }
      };

    return (
        <>
            <Head>
                <title>Regístrate</title>
            </Head>


            <div className="flex min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 via-indigo-400 to-blue-500">
                <div className="flex flex-1 flex-col md:mx-20 lg:mx-72 justify-center px-1 py-12 "  >
                    <div className="bg-black bg-opacity-30 py-14 px-2 md:px-20 rounded-lg">
                        {/* Inicia Contenido de registro */}
                        <div className="">
                            <div className="">
                                <img
                                    className="mx-auto h-20 w-auto"
                                    src="/assets/img/logo.png"
                                    alt="logo salud comunitaria"
                                />
                                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                                    Regístrate
                                </h2>
                            </div>

                            <div className="mt-10 ">


                                 <form className="space-y-4 " action="#" method="POST"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="flex gap-2">
                                        <div className="w-full">
                                            <label htmlFor="nombre" className="block text-base font-medium leading-6 text-white">
                                                Nombre
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="nombre"
                                                    name="nombre" 
                                                    value={formData.nombre} 
                                                    onChange={handleChange}
                                                    type="text"
                                                    autoComplete="nombre"
                                                    required
                                                    placeholder="Su nombre"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="apellido" className="block text-base font-medium leading-6 text-white">
                                                Apellidos
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="apellidos"
                                                    name="apellido" 
                                                    value={formData.apellido} 
                                                    onChange={handleChange}
                                                    type="text"
                                                    autoComplete="apellido"
                                                    required
                                                    placeholder="Sus apellidos"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-base font-medium leading-6 text-white">
                                            Correo Electronico
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email" 
                                                value={formData.email} 
                                                onChange={handleChange}
                                                type="email"
                                                autoComplete="email"
                                                required
                                                placeholder="Escriba su correo electronico"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="w-full">
                                            <label htmlFor="edad" className="block text-base font-medium leading-6 text-white">
                                                Edad
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="edad"
                                                    name="edad" 
                                                    value={formData.edad} 
                                                    onChange={handleChange} 
                                                    type="number"
                                                    autoComplete="edad"
                                                    required
                                                    placeholder="Escriba su edad"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="genero" className="block text-base font-medium leading-6 text-white">
                                                Genero
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                                    id="genero"
                                                    name="genero"
                                                    value={selectedGenero} 
                                                    onChange={handleGeneroChange}
                                                >
                                                    <option value="">-- Seleccione --</option>
                                                    <option value="masculino">Masculino</option>
                                                    <option value="femenino">Femenino</option>
                                                    <option value="otros">Otros</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="w-full">
                                            <label htmlFor="departamento" className="block text-base font-medium leading-6 text-white">
                                                Departamento
                                            </label>
                                            <div className="mt-2">

                                                <select
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                                    id="departamento"
                                                    required
                                                >
                                                    <option value="0">-- Seleccione --</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="municipio" className="block text-base font-medium leading-6 text-white">
                                                Municipio
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                                    id="municipio"
                                                    required
                                                >
                                                    
                                                    <option value="0">-- Seleccione --</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="direccion" className="block text-base font-medium leading-6 text-white">
                                            Direccion
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="direccion"
                                                name="direccion_detalle" 
                                                value={formData.direccion_detalle} 
                                                onChange={handleChange}
                                                type="text"
                                                required
                                                placeholder="Escriba su Direccion"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="w-full">
                                            <label htmlFor="telefono" className="block text-base font-medium leading-6 text-white">
                                                Telefono
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="telefono"
                                                    type="text" 
                                                    name="telefono" 
                                                    value={formData.telefono} 
                                                    onChange={handleChange} 
                                                    autoComplete="telefono"
                                                    required
                                                    placeholder="Escriba su Telefono"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="contraseña" className="block text-base font-medium leading-6 text-white">
                                            Contraseña
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="contraseña"
                                                name="direccion_detalle" 
                                                value={formData.direccion_detalle} 
                                                onChange={handleChange}
                                                type="text"
                                                required
                                                placeholder="Escriba su Direccion"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                        {/* asasaadsad 
                                        <div className="w-full">
                                            <label htmlFor="idtipoSangre" className="block text-base font-medium leading-6 text-white">
                                                Tipo de Sangre
                                            </label>
                                            <div className="mt-2">
                                                <select
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                                    id="idtipoSangre"
                                                    required
                                                    type='number'
                                                    name="idtipoSangre"
                                                    value={formData.idtipoSangre} 
                                                    onChange={handleChange}
                                                >
                                                    <option value="0">-- Seleccione --</option>
                                                    <option value="1">-- A Positivo --</option>
                                                    <option value="2">-- A Negativo --</option>
                                                    <option value="3">-- B Positivo --</option>
                                                    <option value="4">-- B Negativo --</option>
                                                    <option value="5">-- O Positivo --</option>
                                                    <option value="6">-- O Negativo --</option>
                                                </select>
                                            </div>
                                        </div>
                                    

                                    <div>
                                        <label htmlFor="medico_encargado" className="block text-base font-medium leading-6 text-white">
                                            Nombre Encargado
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="medico_encargado"
                                                name="medico_encargado" 
                                                value={formData.medico_encargado} 
                                                onChange={handleChange}
                                                type="number"
                                                required
                                                placeholder="Escriba nombre completo encargado"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div className="flex gap-2">
                                        <div className="w-full">
                                            <label htmlFor="parentesco" className="block text-base font-medium leading-6 text-white">
                                                Parentesco de Encargado
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="parentesco"
                                                    name="parentesco"
                                                    type="text"
                                                    required
                                                    placeholder="Escriba su parentesco"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label htmlFor="telefonoencargado" className="block text-base font-medium leading-6 text-white">
                                                Telefono de Encargado
                                            </label>
                                            <div className="mt-2">
                                                <input
                                                    id="telefonoencargado"
                                                    name="telefonoencargado"
                                                    type="number"
                                                    autoComplete="telefonoencargado"
                                                    required
                                                    placeholder="Escriba su Telefono"
                                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="padecimientos_general" className="block text-base font-medium leading-6 text-white">
                                            Padecimientos
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="padecimientos_general"
                                                name="padecimientos_general" 
                                                value={formData.padecimientos_general} 
                                                onChange={handleChange}
                                                type="text"
                                                required
                                                placeholder="Escriba sus padecimientos"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>
                                    */}

                                    <div >
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase"
                                            >
                                            Registrar Usuario
                                        </button>
                                    </div>
                                </form>
                                
                                <div className="text-sm mt-4 text-center">
                                    <Link legacyBehavior href='/registrarse'>
                                        <a href="#" className="text-xs text-white hover:text-sky-200">
                                        No tienes una cuenta? Registrate
                                        </a>
                                    </Link>
                                </div>
                                
                            </div>
                            
                        </div>
                        {/* finaliza contenido de registro */}
                    </div>
                </div>
            </div>
        </>
    )
}
