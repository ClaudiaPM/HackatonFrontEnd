import Head from "next/head"

export default function Example() {
    return (
      <>
        <Head>
          <title>Inicia Sesión</title>
      </Head>
      <div className="flex min-h-screen">
        <div className="flex min-h-full flex-1 flex-col justify-center px-1 py-12 lg:px-8 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 via-indigo-400 to-blue-500 estrechar"  >
          <div className="bg-black bg-opacity-30 py-14 px-2 md:px-20 rounded-lg">
              <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
                <img
                  className="mx-auto h-20 w-auto"
                  src="/assets/img/logo.png"
                  alt="logo salud comunitaria"
                />
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                    ¡Inicia sesión en tu cuenta!
                </h2>
              </div>
      
              <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                  <div>
                    <label htmlFor="email" className="block text-base font-medium leading-6 text-white">
                      Correo Electronico
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Escriba su correo electronico"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
                      />
                    </div>
                  </div>
      
                  <div>
                    <div className="flex items-center justify-between">
                      <label htmlFor="password" className="block text-base font-medium leading-6 text-white">
                        Contraseña
                      </label>
                      <div className="text-sm">
                        <a href="#" className="text-xs text-white hover:text-sky-200">
                          Haz olvidado la Contraseña?
                        </a>
                      </div>
                    </div>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        placeholder="Escriba su Contraseña"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
      
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 uppercase"
                    >
                      Iniciar Sesión
                    </button>
                  </div>
                </form>
      
              </div>
            </div>

        </div>
      </div>
        
      </>
    )
  }
  