import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Modal from 'react-modal';
import ModalIncidente from '../components/ModalIncidente';
import SvgNuevoPaciente from '../iconComponents/SvgNuevopaciente';
import SvgEvento from '../iconComponents/SvgEvento';
import SvgListapaciente from '../iconComponents/SvgListapaciente';
import SvgPerfil from '../iconComponents/SvgPerfil';
import SvgSignoff from '../iconComponents/SvgSignoff';
import useSalud from '../hooks/useSalud';
import SvgDashboard from '../iconComponents/SvgDashboard';

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

const Layout = ({ children, pagina }) => {
  const router = useRouter();
  const { modal } = useSalud();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Head>
        <title>SaludComunitaria - {pagina}</title>
        <meta name="description" content="Salud comunitaria" />
      </Head>

      <div className="md:flex md:min-h-screen bg-slate-100">
        <aside
          className={`md:w-3/12 xl:w-1/5 2xl:w-1/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-600 via-indigo-600 to-blue-700 md:p-10 p-2 md:rounded-r-2xl ${
            isMenuOpen ? 'block' : 'hidden md:block'
          }`}
        >
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
                <Link legacyBehavior href="/dashboard">
                  <a
                    className={`mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20 ${
                      router.pathname === '/dashboard' && 'bg-opacity-30'
                    }`}
                  >
                    <SvgDashboard />
                    Dashboard
                  </a>
                </Link>
                <Link legacyBehavior href="/perfil">
                  <a
                    className={`mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20 ${
                      router.pathname === '/perfil' && 'bg-opacity-30'
                    }`}
                  >
                    <SvgPerfil />
                    Mi Perfil
                  </a>
                </Link>
                <Link legacyBehavior href="/listapacientes">
                  <a
                    className={`mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20 ${
                      router.pathname === '/listapacientes' && 'bg-opacity-30'
                    }`}
                  >
                    <SvgListapaciente />
                    Lista de Pacientes
                  </a>
                </Link>
                <Link legacyBehavior href="/crearevento">
                  <a
                    className={`mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20 ${
                      router.pathname === '/crearevento' && 'bg-opacity-30'
                    }`}
                  >
                    <SvgEvento />
                    Crear Evento
                  </a>
                </Link>
                <Link legacyBehavior href="/nuevopaciente">
                  <a
                    className={`mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20 ${
                      router.pathname === '/nuevopaciente' && 'bg-opacity-30'
                    }`}
                  >
                    <SvgNuevoPaciente />
                    Nuevo Paciente
                  </a>
                </Link>
              </nav>
            </div>
            <div>
              <Link legacyBehavior href="/">
                <a className="mt-4 py-3 px-3 rounded text-white flex gap-2 bg-black bg-opacity-10 hover:bg-black hover:bg-opacity-20">
                  <SvgSignoff />
                  Cerrar Sesión
                </a>
              </Link>
            </div>
          </div>
        </aside>

        <button
          className="md:hidden fixed z-10 top-2 right-2 bg-gray-200 rounded p-2"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <main className="md:w-9/12 xl:w-4/5 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="md:p-10 p-2">{children}</div>
        </main>
      </div>

      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalIncidente />
        </Modal>
      )}
    </>
  );
};

export default Layout;
