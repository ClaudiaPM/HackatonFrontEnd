import Layout from "../layout/Layout";
import Link from "next/link";
import SvgCorreo from "../iconComponents/SvgCorreo";
import SvgTelefono from "../iconComponents/SvgTelefono";
import SvgDireccion from "../iconComponents/SvgDireccion";
import SvgEdad from "../iconComponents/SvgEdad";
import ContactoEmergencia from "../components/ContactoEmergencia";
import AxiosInstance from "../src/config/axios";
import { useState, useEffect } from "react";
import SangEnfermedad from "../components/SangEnfermedad";

export default function Perfil() {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
    edad: "",
    genero: "",
    municipio: "",
    //tipo_sangre es un objeto
    tiposangre: {
        tipo: "",
        id : ""
    },
    roles: [],
  });

  //const [tiposangre, setTiposangre] = useState("");

  const perfil = async () => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await AxiosInstance.get("usuario/profile", { headers });
      const datos = response.data;
      console.log(datos.datos);
      setDatos(datos.datos);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    perfil(); // Llama a la función perfil para obtener los datos del perfil
  }, []);

  // Asegúrate de que datos se haya actualizado antes de acceder a datos.tipo_sangre.tipo
  const tiposangre = datos.tiposangre.tipo;
   // console.log(tiposangre);

  return (
    <Layout pagina="Mi Perfil">
      <div className="md:p-8 p-2 bg-white rounded-t-md md:flex items-center md:justify-between">
        <div className="flex gap-3 items-center sm:space-x-6">
          <div className=" mb-6 h-44 sm:h-32 sm:w-32 sm:mb-0">
            <img
              src="https://i.pravatar.cc/150?img=8"
              alt="image usuario"
              className="object-cover object-center w-full h-full rounded-full dark:bg-gray-500"
            />
          </div>
          <div className="flex flex-col space-y-4 justify-center">
            <div>
              <p className="text-2xl font-semibold text-gray-900">
                {datos.nombre} {datos.apellido}
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

      <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0 md:pb-2">
        <div className=" col-span-1  mt-2 md:mt-0">
          <p className="flex gap-0.5 items-center text-gray-600">
            <SvgCorreo />
            Correo Electronico:
          </p>
          <p className="flex font-semibold gap-1 items-center ">
            {datos.email}
          </p>
        </div>

        <div className=" col-span-1 mt-2 md:mt-0">
          <p className="flex gap-0.5 items-center text-gray-600">
            <SvgTelefono />
            Telefono:
          </p>
          <p className="flex font-semibold gap-1 items-center">
            {datos.telefono}
          </p>

          <p className="mt-2 flex gap-0.5 items-center text-gray-600">
            <SvgEdad />
            Edad:
          </p>
          <p className="flex font-semibold gap-1 items-center">{datos.edad}</p>
        </div>

        <div className="col-span-1 mt-2 md:mt-0">
          <p className="flex gap-0.5 items-center text-gray-600">
            <SvgDireccion />
            Direccion:
          </p>
          <p className="flex font-semibold gap-1 items-center">
            {datos.direccion}
          </p>
        </div>
      </div>

      <ContactoEmergencia />
      <SangEnfermedad tipo_sangre={tiposangre} />
    </Layout>
  );
}
