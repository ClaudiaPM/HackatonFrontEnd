import useSalud from "../hooks/useSalud"

export default function ModalIncidente() {
    const { handleChangeModal } = useSalud()

    return(
        <>  
            <div className="flex justify-end">
                <button
                    onClick={ handleChangeModal }
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="w-6 h-6">
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
            <div className="flex min-h-full flex-1 flex-col justify-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                    <h2 className=" text-center text-2xl font-bold leading-9 tracking-tight text-black">
                        Nuevo Historial de Paciente
                    </h2>
                </div>
            <div className="bg-white  rounded-lg">
            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-dm">
                <form className="space-y-1" action="#" method="POST">
                    <div className="flex gap-2">
                        <div className="w-full">
                            <label htmlFor="presion" className="block text-base font-medium leading-6 text-black">
                            Presion
                            </label>
                            <div className="mt-2">
                            <input
                                id="presion"
                                name="presion"
                                type="text"
                                autoComplete="presion"
                                required
                                placeholder="Su presion"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="temperatura" className="block text-base font-medium leading-6 text-black">
                            Temperatura
                            </label>
                            <div className="mt-2">
                            <input
                                id="temperatura"
                                name="temperatura"
                                type="text"
                                autoComplete="temperatura"
                                required
                                placeholder="Su temperatura"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="peso" className="block text-base font-medium leading-6 text-black">
                            Peso
                            </label>
                            <div className="mt-2">
                            <input
                                id="peso"
                                name="peso"
                                type="text"
                                autoComplete="peso"
                                required
                                placeholder="Su peso"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="Altura" className="block text-base font-medium leading-6 text-black">
                            Altura
                            </label>
                            <div className="mt-2">
                            <input
                                id="Altura"
                                name="Altura"
                                type="text"
                                autoComplete="Altura"
                                required
                                placeholder="Su Altura"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label htmlFor="procedimientos" className="block text-base font-medium leading-6 text-black">
                            Procedimientos
                            </label>
                            <div className="mt-2">
                            <input
                                id="procedimientos"
                                name="procedimientos"
                                type="text"
                                required
                                placeholder="Escriba los procedimientos"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="motivoconsulta" className="block text-base font-medium leading-6 text-black">
                            Motivo de Consulta
                            </label>
                            <div className="mt-2">
                            <input
                                id="motivoconsulta"
                                name="motivoconsulta"
                                type="text"
                                required
                                placeholder="Escriba Motivo de su consulta"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="diagnostico" className="block text-base font-medium leading-6 text-black">
                        Diagnostico
                        </label>
                        <div className="mt-2">
                        <input
                            id="diagnostico"
                            name="diagnostico"
                            type="text"
                            required
                            placeholder="Escriba el diagnostico"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="medicamentos" className="block text-base font-medium leading-6 text-black">
                        Medicamentos Recetados
                        </label>
                        <div className="mt-2">
                        <input
                            id="medicamentos"
                            name="medicamentos"
                            type="text"
                            required
                            placeholder="Escriba los medicamentos"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-full">
                            <label htmlFor="tiposangre" className="block text-base font-medium leading-6 text-black">
                            Tipo de Sangre
                            </label>
                            <div className="mt-2">
                            <select 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                id="tiposangre"
                            >
                                <option value="0">-- Seleccione --</option>
                            </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="tiposangre" className="block text-base font-medium leading-6 text-black">
                            Enfermedad
                            </label>
                            <div className="mt-2">
                            <select 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                id="tiposangre"
                            >
                                <option value="0">-- Seleccione --</option>
                            </select>
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="tiposangre" className="block text-base font-medium leading-6 text-black">
                            Nivel
                            </label>
                            <div className="mt-2">
                            <select 
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                id="tiposangre"
                            >
                                <option value="0">-- Seleccione --</option>
                            </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div className="w-full">
                            <label htmlFor="referencia" className="block text-base font-medium leading-6 text-black">
                            Referencias 
                            </label>
                            <div className="mt-2">
                            <input
                                id="referencia"
                                name="referencia"
                                type="text"
                                autoComplete="referencia"
                                required
                                placeholder="Escriba su referencia por cita"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="examen" className="block text-base font-medium leading-6 text-black">
                            Examen por cita
                            </label>
                            <div className="mt-2">
                            <input
                                id="examen"
                                name="examen"
                                type="text"
                                autoComplete="examen"
                                required
                                placeholder="Escriba su examen por cita"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                        <div className="w-full">
                            <label htmlFor="nuevacita" className="block text-base font-medium leading-6 text-black">
                            Nueva cita 
                            </label>
                            <div className="mt-2">
                            <input
                                id="nuevacita"
                                name="nuevacita"
                                type="date"
                                autoComplete="nuevacita"
                                required
                                placeholder="Escriba su referencia por cita"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                            </div>
                        </div>
                    </div>


                    <div>
                        <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase"
                        >
                        Registrar Historial
                        </button>
                    </div>
                    </form>
                </div>
            </div>
                
            </div>
        </>
    )
}