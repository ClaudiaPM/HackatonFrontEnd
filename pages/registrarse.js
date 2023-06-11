import Head from "next/head"

export default function Example() {
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
            <form className="space-y-4 " action="#" method="POST">
                    <div className="flex gap-2">
                        <div className="w-full">
                            <label htmlFor="nombre" className="block text-base font-medium leading-6 text-white">
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
                            <label htmlFor="apellidos" className="block text-base font-medium leading-6 text-white">
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
                        <label htmlFor="email" className="block text-base font-medium leading-6 text-white">
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
                            <label htmlFor="edad" className="block text-base font-medium leading-6 text-white">
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
                            <label htmlFor="genero" className="block text-base font-medium leading-6 text-white">
                            Genero
                            </label>
                            <div className="mt-2">
                                <select 
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                    id="genero"
                                    required
                                >
                                    <option value="0">-- Seleccione --</option>
                                    <option value="1">Masculino</option>
                                    <option value="2">Femenino</option>
                                    <option value="3">Otros</option>
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
                                {/* AQUI SE CARGAN TODOS LOS DEPARTAMENTOS */}
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
                                {/* AQUI SE CARGAN LOS MUNICIPIOS SEGUN EL ID DEL DEPARTAMENTO */}
                                <option value="0">-- Seleccione --</option>
                            </select>
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="comunidad" className="block text-base font-medium leading-6 text-white">
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
                            <label htmlFor="telefono" className="block text-base font-medium leading-6 text-white">
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
                            <label htmlFor="tiposangre" className="block text-base font-medium leading-6 text-white">
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
                        <label htmlFor="nombreencargado" className="block text-base font-medium leading-6 text-white">
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
                        <label htmlFor="padecimientos" className="block text-base font-medium leading-6 text-white">
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

                    <div >
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
          {/* finaliza contenido de registro */}
          </div>    
        </div>
        </div>
      </>
    )

    function register(){
        const data = {
            nombre,
            apellidos,
            email,
            edad,
            genero,
            departamento,
            municipio,
            comunidad,
            telefono,
            tiposangre,
            nombreencargado,
            parentezco,
            telefonoencargado,
            padecimientos
        }
    }
  }
  