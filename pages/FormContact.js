import Layout from "../layout/Layout"
import ProgressBar from "../components/ProgressBar"
import Link from "next/link";

export default function FormContacto() {
    const customPercentage = 60;

    return(
        <Layout>
            <div className="w-full bg-white p-8 ">
                
                <ProgressBar progressPercentage={customPercentage} />

                <h2 className="font-semibold text-2xl text-center mt-10"> Formulario Contacto de emergencia</h2>

                <form
                  className="space-y-4 mt-10"
                  action="#"
                  method="POST"
                >
                  <div className="flex gap-2">
                    <div className="w-full">
                      <label
                        htmlFor="nombre"
                        className="block text-base font-medium leading-6 text-black"
                      >
                        Nombre
                      </label>
                      <div className="mt-2">
                        <input
                          id="nombre"
                          name="nombre"
                        //   value={formData.nombre}
                        //  onChange={handleChange}
                          type="text"
                          autoComplete="nombre"
                          required
                          placeholder="Su nombre"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="apellido"
                        className="block text-base font-medium leading-6 text-black"
                      >
                        Apellidos
                      </label>
                      <div className="mt-2">
                        <input
                          id="apellido"
                          name="apellido"
                        //   value={formData.apellido}
                        //  onChange={handleChange}
                          type="text"
                          autoComplete="apellido"
                          required
                          placeholder="Sus apellidos"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-full">
                      <label
                        htmlFor="genero_id"
                        className="block text-base font-medium leading-6 text-black"
                      >
                        Parentesco
                      </label>
                      <div className="mt-2">
                        <select
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                          id="genero_id"
                          name="genero_id"
                        >
                          <option value="0">-- Seleccione --</option>
                            <option>
                              parentesco.nombre
                            </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-full">
                      <label
                        htmlFor="telefono"
                        className="block text-base font-medium leading-6 text-black"
                      >
                        Telefono
                      </label>
                      <div className="mt-2">
                        <input
                          id="telefono"
                          type="number"
                          name="telefono"
                        //   value={formData.telefono}
                        //   onChange={handleChange}
                          autoComplete="telefono"
                          required
                          placeholder="Escriba su Telefono"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Link legacyBehavior href='/tiposangre'>
                        <a 
                            className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase"
                        >
                            Cancelar
                        </a>
                    </Link>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase"
                        >
                            Guardar 
                    </button>
                    <Link legacyBehavior href='/regEnfermedad'>
                        <a 
                            className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase"
                        >
                            Siguiente
                    </a>
                    </Link>
                  </div>
                </form>
            </div>
           
        </Layout>
        
    )
}