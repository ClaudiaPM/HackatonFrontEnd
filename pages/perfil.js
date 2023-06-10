import Layout from "../layout/Layout";

export default function Perfil() {
    return(
        <Layout pagina='Mi Perfil'>
            
            <div className="max-w-full md:p-8 p-2 sm:flex sm:space-x-6 bg-white rounded-t-md justify-center">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4 justify-center">
                    <div>
                        <h2 className="text-2xl font-semibold">Juan Carlos Rodríguez López</h2>
                        <span className="text-lg dark:text-gray-700">Doctor general</span>
                    </div>
                </div>
                
            </div>
            
            <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0 md:pb-2">
                <div className=" col-span-1  mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                         <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>
                        Correo Electronico:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        correoelectronico@correo.com
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                        Telefono:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        7000 000
                    </p>
                </div>
                <div className="col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                        Direccion:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        San Salvador, San salvador
                    </p>
                </div>
            </div>
            <div className="bg-white p-0 md:p-3">
                <h2 className="text-xl text-center font-semibold mt-0">Contacto de Emergencia</h2>
            </div>
            <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0">
                <div className=" col-span-1  mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Nombre:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        Laura Valentina González Sánchez
                    </p>
                    <p className="flex gap-1 mt-2 items-center font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                        </svg>
                        Parentesco:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        Esposa
                    </p>
                </div>
                <div className=" col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                        Telefono:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        7000 000
                    </p>
                </div>
                <div className="col-span-1 mt-2 md:mt-0">
                    <p className="flex gap-1 items-center font-semibold">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                        Direccion:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        San Salvador, San salvador, 
                    </p>
                </div>
            </div>

            <div className="flex mt-5 justify-end">
                <button 
                    type="submit"
                    className="justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
                >
                    cerrar Sesion
                </button>
            </div>
        </Layout> 
    )
}