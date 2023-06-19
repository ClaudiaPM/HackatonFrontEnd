import Layout from "../layout/Layout";
import Link from "next/link";

import ContactoEmergencia from "../components/ContactoEmergencia";
import { useState, useEffect } from "react";
import SangEnfermedad from "../components/SangEnfermedad";
import useSalud from "../hooks/useSalud";
import DatosPerfil from "../components/DatosPerfil";

export default function Perfil() {
    const { datos } = useSalud()
    const {nombre, apellido} = datos

  return (
    <Layout pagina="Mi Perfil">
      <div className="md:p-8 p-2 bg-white rounded-t-md md:flex items-center md:justify-between">
        <div className="flex gap-3 items-center sm:space-x-6">
          <div className="mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src="https://i.pravatar.cc/150?img=8"
              alt="image usuario"
              className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4 justify-center">
            <div>
              <p className="text-2xl font-semibold text-gray-900">
                {nombre} {apellido}
              </p>
              <p className="text-lg dark:text-gray-700">Doctor general</p>
            </div>
          </div>
        </div>
        <div>
          <Link legacyBehavior href="/tiposangre">
            <a className="bg-gray-100 hover:bg-gray-200 mt-5 md:mt-0 py-2 px-5 font-bold rounded-md">
              Continuar Registro
            </a>
          </Link>
        </div>
      </div>

      <div className="md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-white p-8 md:pt-0 md:pb-2">
        <DatosPerfil/>
      </div>

      <ContactoEmergencia />
        <SangEnfermedad 
            // tipo_sangre={tiposangre}
        />
    </Layout>
  );
}
