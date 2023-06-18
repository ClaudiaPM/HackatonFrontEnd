import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import SvgNuevoPaciente from "../iconComponents/SvgNuevopaciente"
import SvgEvento from "../iconComponents/SvgEvento"
import SvgListapaciente from "../iconComponents/SvgListapaciente"
import SvgPerfil from "../iconComponents/SvgPerfil"
import SvgSignoff from "../iconComponents/SvgSignoff"
import Modal from 'react-modal'
import ModalIncidente from "../components/ModalIncidente"
import useSalud from "../hooks/useSalud"


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#__next');

export default function Layout({children, pagina}) {
    const router = useRouter()
    const {modal} = useSalud()

    return(
        <>
            <Head>
                <title>SaludComunitaria - {pagina}</title>
                <meta name='description' content='Salud comunitaria' />
            </Head>

            <div className="md:flex md:min-h-screen bg-slate-100">
                <aside className="md:w-3/12 xl:w-1/5 2xl:w-1/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-indigo-600 to-blue-700 md:p-10 p-2 md:rounded-r-2xl">
                    <div>
                        <div>
                            <div className="grid place-content-center">
                                <Image 
                                    width={150} 
                                    height={50} 
                                    src="/assets/img/logo.png"
                                    alt="imagen logotipo" 
                                />
                            </div>
                            <nav className="mt-10">
                                <Link legacyBehavior href='/perfil'>
                                    <a className={router.pathname === '/perfil' ? 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-30' : 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20'}>
                                        <SvgPerfil/>
                                        Mi Perfil
                                    </a>
                                </Link>
                                <Link legacyBehavior href='/listapacientes'>
                                    <a className={router.pathname === '/listapacientes' ? 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-30' : 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20'}>
                                        <SvgListapaciente/>
                                        Lista de Pacientes
                                    </a>
                                </Link>
                                <Link legacyBehavior href='/crearevento'>
                                    <a className={router.pathname === '/crearevento' ? 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-30' : 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20'}>
                                        <SvgEvento/>
                                        Crear Evento
                                    </a>
                                </Link>
                                <Link legacyBehavior href='/nuevopaciente'>
                                    <a className={router.pathname === '/nuevopaciente' ? 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-30' : 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20'}>
                                        <SvgNuevoPaciente/>
                                        Nuevo Paciente
                                    </a>
                                </Link>
                            </nav>
                        </div>
                        <div >
                            <Link legacyBehavior href='/'>
                                <a className={router.pathname === '/nuevopaciente' ? 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-30' : 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20'}>
                                    <SvgSignoff/>
                                    Cerrar Sesion
                                </a>
                            </Link>
                        </div>
                    </div>
                </aside>
                
                <main className="md:w-9/12 xl:w-4/5 2xl:w-4/5 h-screen overflow-y-scroll ">
                    <div className="md:p-10 p-2">
                        {children}
                    </div>
                </main>
            </div>

            { modal && (
            <Modal
                isOpen={modal}
                style={customStyles}
            >
                <ModalIncidente />
            </Modal>
            )}
        </>
    )
}