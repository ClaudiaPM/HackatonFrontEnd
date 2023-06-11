import Layout from "../layout/Layout";

export default function Nuevopaciente() {

    return(
        <Layout pagina='Nuevo Paciente'>
                {/* Inicia Contenido de registro */}
            <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Regístro de Nuevos Pacientes
                    </h2>
                </div>
            <div className="bg-white md:p-8 rounded-lg mt-5">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-dm">
                <form className="space-y-4" action="#" method="POST">
                    <div className="flex gap-2">
                        <div className="w-full">
                            <label htmlFor="nombre" className="block text-base font-medium leading-6 text-black">
                            Nombre
                            </label>
                            <div className="mt-2">
                            <input
                                id="nombre"
                                name="nombre"
                                type="text"
                                autoComplete="nombre"
                                required
                                placeholder="Su nombre"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="apellidos" className="block text-base font-medium leading-6 text-black">
                            Apellidos
                            </label>
                            <div className="mt-2">
                            <input
                                id="apellidos"
                                name="apellidos"
                                type="text"
                                autoComplete="apellidos"
                                required
                                placeholder="Sus apellidos"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-base font-medium leading-6 text-black">
                        Correo Electronico
                        </label>
                        <div className="mt-2">
                        <input
                            id="email"
                            name="email"
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
                            <label htmlFor="edad" className="block text-base font-medium leading-6 text-black">
                            Edad
                            </label>
                            <div className="mt-2">
                            <input
                                id="edad"
                                name="edad"
                                type="number"
                                autoComplete="edad"
                                required
                                placeholder="Escriba su edad"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="genero" className="block text-base font-medium leading-6 text-black">
                            Genero
                            </label>
                            <div className="mt-2">
                                <select 
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                    id="genero"
                                    required
                                >
                                    <option value="0">-- Seleccione --</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="otros">Otros</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                    <div className="w-full">
                        <label htmlFor="departamento" className="block text-base font-medium leading-6 text-black">
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
                            <label htmlFor="municipio" className="block text-base font-medium leading-6 text-black">
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
                        <label htmlFor="comunidad" className="block text-base font-medium leading-6 text-black">
                        Direccion
                        </label>
                        <div className="mt-2">
                        <input
                            id="comunidad"
                            name="comunidad"
                            type="text"
                            required
                            placeholder="Escriba su Direccion"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label htmlFor="telefono" className="block text-base font-medium leading-6 text-black">
                            Telefono
                            </label>
                            <div className="mt-2">
                            <input
                                id="telefono"
                                name="telefono"
                                type="number"
                                autoComplete="telefono"
                                required
                                placeholder="Escriba su Telefono"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="tiposangre" className="block text-base font-medium leading-6 text-black">
                            Tipo de Sangre
                            </label>
                            <div className="mt-2">
                            <select 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                id="tiposangre"
                                required
                            >
                                <option value="0">-- Seleccione --</option>
                            </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="nombreencargado" className="block text-base font-medium leading-6 text-black">
                        Nombre Encargado
                        </label>
                        <div className="mt-2">
                        <input
                            id="nombreencargado"
                            name="nombreencargado"
                            type="text"
                            required
                            placeholder="Escriba nombre completo encargado"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label htmlFor="parentesco" className="block text-base font-medium leading-6 text-black">
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
                            <label htmlFor="telefonoencargado" className="block text-base font-medium leading-6 text-black">
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
                        <label htmlFor="padecimientos" className="block text-base font-medium leading-6 text-black">
                        Padecimientos
                        </label>
                        <div className="mt-2">
                        <input
                            id="padecimientos"
                            name="padecimientos"
                            type="text"
                            required
                            placeholder="Escriba sus padecimientos"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase"
                        >
                        Registrar Usuario
                        </button>
                    </div>
                    </form>
                </div>
            </div>
                
            </div>
            {/* finaliza contenido de registro */}
        </Layout> 
    )
}