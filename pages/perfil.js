import Layout from "../layout/Layout";

export default function Perfil() {
    return(
        <Layout pagina='Mi Perfil'>
            
            <div className="max-w-full md:p-8 p-2 sm:flex sm:space-x-6 bg-white rounded-t-md">
                <div className="flex-shrink-0 w-full mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
                    <img src="https://source.unsplash.com/100x100/?portrait?1" alt="" className="object-cover object-center w-full h-full rounded dark:bg-gray-500" />
                </div>
                <div className="flex flex-col space-y-4">
                    <div>
                        <h2 className="text-2xl font-semibold">Juan Carlos Rodríguez López</h2>
                        <span className="text-lg dark:text-gray-700">Doctor general</span>
                    </div>
                    <div className="space-y-1">

                    </div>
                </div>
                
            </div>
            
            <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0">
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
                        <path strokeLinecap="round" d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25" />
                        </svg>
                        Direccion:</p>
                    <p className="flex md:mt-1 gap-1 items-center text-gray-700">
                        San Salvador, San salvador, comunidad de san salvador
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