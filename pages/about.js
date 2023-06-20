import Link from "next/link"

export default function About() {

    return(
        <div className="pagina2">
            <div className="block items-center justify-center md:w-2/3 lg:w-3/4 mx-auto">
                <div className="justify-center">
                    <h2 className="text-4xl font-bold text-sky-600 text-center pt-10">JEBCA, Salud Comunitaria</h2>
                    <p className="text-xl text-center font-semibold mt-2">Hackathon - Proyecto Upskilling and Reskilling Challange 2023</p>
                </div>
                <div className="grid grid-cols-2 gap-3 m-1 md:m-10">
                    <div className="bg-white p-2 rounded-md">
                        <p className="text-xl font-semibold">Problematica</p>
                        <p>Buscar una herramienta que promueva/restree la salud y el bienestar comunitario</p>
                    </div>
                    <div className="bg-white p-2 rounded-md">
                        <p className="text-xl font-semibold">JEBCA, Salud Comunitaria</p>
                        <p>Herramienta de apoyo que brinda  distintos procesos de manera centralizada</p>
                    </div>
                    <div className="bg-white p-2 rounded-md">
                        <p className="text-xl font-semibold">Estrutura Modelo Empresarial</p>
                        <p>B2C (Business To Consumer)</p>
                        <p>G2C (Goverment To Consumer)</p>
                    </div>
                    <div className="bg-white p-2 rounded-md">
                        <p className="text-xl font-semibold">Porque elegir JEBCA</p>
                        <p>Sistema Innovador</p>
                        <p>Procesos medicos integrados</p>
                        <p>Actualizacion a lo digital</p>
                        <p>Recursos de Vigilancia de Salud</p>
                    </div>
                </div>
                <div className="flex justify-center">
                <Link legacyBehavior href='/'>
                      <a 
                        className="bg-sky-600 hover:bg-sky-700 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-md"
                      >
                          Demostracion
                      </a>
                  </Link>
                </div>
            </div>
        </div>
    )
}