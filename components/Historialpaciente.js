export default function Historialpaciente() {
    return(
        <div className="bg-white rounded-lg space-y-3 p-2 md:p-8 mt-2">
            <div>
                <h3 className="text-lg font-bold text-sky-700">Consulta Medica 23 marzo 2023</h3>
            </div>
            <div className="md:flex gap-3">
                <p className="font-bold">Presion: <span className="font-semibold">presion.paciente</span></p>
                <p className="font-bold">Temperatura: <span className="font-semibold">temperatura.paciente</span></p>
                <p className="font-bold">Peso: <span className="font-semibold">peso.paciente</span></p>
                <p className="font-bold">Altura: <span className="font-semibold">altura.paciente</span></p>
            </div>
            <div className="block ">
                <p className="font-bold">motivo de consulta: <span className="font-semibold">motivo.paciente</span></p>
                <p className="font-bold">Notas Medico: <span className="font-semibold">notasmedico.paciente</span></p>
                <p className="font-bold">Diagnostico: <span className="font-semibold">diagnostico.paciente</span></p>
                <p className="font-bold">Medicina: <span className="font-semibold">Medicina.paciente</span></p>
            </div>
            <div className="md:flex gap-3">
                <p className="font-bold">Examenes: <span className="font-semibold">examenes.paciente</span></p>
                <p className="font-bold">Referencias: <span className="font-semibold">referencias.paciente</span></p>
                <p className="font-bold">Citas: <span className="font-semibold">Citas.paciente</span></p>
            </div>
            <div className="flex justify-end gap-4">
                <div className="flex mt-5 justify-end">
                    <button 
                        type="submit"
                        className="justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
                    >
                        Editar Incidente
                    </button>
                </div>
                <div className="flex mt-5 justify-end">
                    <button 
                        type="submit"
                        className="justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
                    >
                        Eliminar Incidente
                    </button>
                </div>
                </div>
            </div>
    )
}