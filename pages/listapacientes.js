import Layout from "../layout/Layout"
import Link from "next/link"

export default function Listapacientes() {
    return(
        <Layout pagina='Listado Pacientes'>

            <form class="flex items-center mb-4">   
                <label for="simple-search" class="sr-only">Buscar Paciente</label>
                <div class="relative w-full">
                    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                    </div>
                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 " placeholder="Buscar Paciente" required />
                </div>
                <button type="submit" class="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <span class="sr-only">Buscar Paciente</span>
                </button>
            </form>

            <div className="bg-white sm:p-2 p-8">
                <h2 className="text-2xl font-bold">Listado de Pacientes</h2>
                
                {/* Tabla de Pacientes */}
                
                <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5">
                    <table className="w-full text-sm text-left text-gray-500 ">
                        <thead className="text-xs bg-slate-100 text-sky-700 uppercase text-center ">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left">
                                    Nombre
                                </th>
                                <th scope="col" className="px-6 py-3 text-left">
                                    Apellido
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Edad
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Ultima Consulta
                                </th>
                                <th scope="col" className="px-6 py-3">
                                    Opcion
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-white border-b text-gray-700 text-center">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-left">
                                    Juan Carlos
                                </th>
                                <td className="px-6 py-4 text-left">
                                    Rodríguez López
                                </td>
                                <td className="px-6 py-4">
                                    33
                                </td>
                                <td className="px-6 py-4">
                                    29 marzo 2023
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link legacyBehavior href='/perfilpaciente'>
                                        <a className="font-medium text-blue-600 lihover:underline">
                                            Ver Paciente
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                            <tr className="bg-white border-b text-gray-700 text-center">
                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap text-left">
                                    Laura Valentina
                                </th>
                                <td className="px-6 py-4 text-left">
                                    González Sánchez
                                </td>
                                <td className="px-6 py-4">
                                    31
                                </td>
                                <td className="px-6 py-4">
                                    10 febrero 2023
                                </td>
                                <td className="px-6 py-4">
                                    <Link legacyBehavior href='/perfilpaciente'>
                                        <a className="font-medium text-blue-600 lihover:underline">
                                            Ver Paciente
                                        </a>
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </Layout>
    )
}