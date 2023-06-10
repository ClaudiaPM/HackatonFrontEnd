import Head from "next/head"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
          <title>Salud Comunitaria</title>
          <meta content="Salud para la comunidad" />
      </Head>

      <div className="flex items-center pagina">
          <div className="ml-20">
              <div>
                    <h1 className="text-8xl font-bold text-white">Salud</h1>
                    <p className="text-8xl font-bold text-yellow-400">Comunitaria</p>

                    <p className="text-2xl font-semibold text-white mt-5">"Juntos por una comunidad saludable: </p>
                    <p className="text-2xl font-semibold text-white">Cuidémonos, apoyémonos, ¡Vivamos mejor!"</p>
              </div>
              <div className="flex gap-5 mt-10">
                  <Link legacyBehavior href='/login'>
                      <a 
                        className="bg-sky-600 hover:bg-sky-700 text-white mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-md"
                      >
                          Iniciar Sesion
                      </a>
                  </Link>
                  <Link legacyBehavior href='/registrarse'>
                      <a 
                        className="bg-gray-200 hover:bg-gray-300 mt-5 md:mt-0 py-3 px-10 uppercase font-bold rounded-md"
                      >
                          Registrarse
                      </a>
                  </Link>
              </div>
          </div>
      </div>
    </>
  )
}
