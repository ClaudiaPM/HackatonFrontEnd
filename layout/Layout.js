import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"

export default function Layout({children, pagina}) {
    const router = useRouter()

    return(
        <>
            <Head>
                <title>SaludComunitaria - {pagina}</title>
                <meta name='description' content='Salud comunitaria' />
            </Head>

            <div className="md:flex md:min-h-screen bg-slate-100">
                <aside className="md:w-3/12 xl:w-1/5 2xl:w-1/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-indigo-600 to-blue-700 md:p-10 p-2 sm:rounded-b-xl md:rounded-r-2xl">
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
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className="w-6 h-6 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                            </svg>
                                Mi Perfil
                            </a>
                        </Link>
                        <Link legacyBehavior href='/listapacientes'>
                            <a className={router.pathname === '/listapacientes' ? 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-30' : 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                            </svg>
                                Lista de Pacientes
                            </a>
                        </Link>
                        <Link legacyBehavior href='/crearevento'>
                            <a className={router.pathname === '/crearevento' ? 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-30' : 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                            </svg>
                                Crear Evento
                            </a>
                        </Link>
                        <Link legacyBehavior href='/nuevopaciente'>
                            <a className={router.pathname === '/nuevopaciente' ? 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-30' : 'mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                            </svg>

                                Nuevo Paciente
                            </a>
                        </Link>
                    </nav>
                </aside>
                <main className="md:w-9/12 xl:w-4/5 2xl:w-4/5 h-screen overflow-y-scroll ">
                    <div className="md:p-10 p-2">
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}