import Layout from "../layout/Layout";

export default function Nuevopaciente() {

    return(
        <Layout pagina='Nuevo Paciente'>
                {/* Inicia Contenido de registro */}
            <div className="flex min-h-full flex-1 flex-col justify-center lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Regístro de Nuevo Pacientes
                    </h2>
                </div>
            <div className="bg-white md:p-8 rounded-lg mt-5">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-dm">
                    <form className="space-y-6" action="#" method="POST">
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
                            <label htmlFor="sexo" className="block text-base font-medium leading-6 text-black">
                            Sexo
                            </label>
                            <div className="mt-2">
                                <select 
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                    id="sexo"
                                    required
                                >
                                    <option value="0">-- Seleccione --</option>
                                    <option value="masculino">Masculino</option>
                                    <option value="femenino">Femenino</option>
                                    <option value="otros">Otros</option>
                                </select>
                            </div>
                        </div>
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
                                    <option value="ahuachapan">Ahuachapán</option>
                                    <option value="santaana">Santa Ana</option>
                                    <option value="sonsonate">Sonsonate</option>
                                    <option value="lalibertad">La Libertad</option>
                                    <option value="chalatenango">Chalatenango</option>
                                    <option value="cuscatlan">Cuscatlán</option>
                                    <option value="sansalvador">San Salvador</option>
                                    <option value="lapaz">La Paz</option>
                                    <option value="cabañas">Cabañas</option>
                                    <option value="sanvicente">San Vicente</option>
                                    <option value="usulutan">Usulután</option>
                                    <option value="sanmiguel">San Miguel</option>
                                    <option value="morazan">Morazán</option>
                                    <option value="launion">La Unión</option>
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
        
                    <div>
                        <div>
                        <label htmlFor="password" className="block text-base font-medium leading-6 text-black">
                            Contraseña
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="Escribe tu Contraseña"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>
                    <div>
                        <div>
                        <label htmlFor="confirmacion" className="block text-base font-medium leading-6 text-black">
                            Confirme Contraseña
                        </label>
                        </div>
                        <div className="mt-2">
                        <input
                            id="confirmacion"
                            name="confirmacion"
                            type="password"
                            autoComplete="current-password"
                            required
                            placeholder="Confirme su Contraseña"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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