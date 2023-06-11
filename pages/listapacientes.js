import Layout from "../layout/Layout"
import Link from "next/link"

export default function Listapacientes() {
    return(
        <Layout pagina='Listado Pacientes'>
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