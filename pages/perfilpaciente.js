import Layout from "../layout/Layout";
import Perfilpacientes from "../components/Perfilpacientes";
import Historialpaciente from "../components/Historialpaciente";
import useSalud from "../hooks/useSalud";

export default function Perfilpaciente() {
    const { handleChangeModal } = useSalud()

    return(
        <Layout pagina='Perfil de Paciente'>
            <Perfilpacientes/>

            <div className="flex mt-5 justify-end">
                <button 
                    type="button"
                    className="justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
                    onClick={ () => {
                        handleChangeModal()
                    }}
                >
                    Crear Historial
                </button>
            </div>

            <h2 className="text-2xl font-bold text-center m-4">Historial de Consultas</h2>

            <Historialpaciente/>
            <Historialpaciente/>
        </Layout>
    )
}