import AxiosInstance from "../src/config/axios";
import { useState, useEffect } from "react";
import SvgNivel from "../iconComponents/SvgNivel";
import SvgSangre from "../iconComponents/SvgSangre";
import SvgEnfermedad from "../iconComponents/SvgEnfermedad";

export default function SangEnfermedad({ tipo_sangre }) {
  console.log(tipo_sangre);
  const [enfermedadesPaciente, setEnfermedadesPaciente] = useState([]);

  useEffect(() => {
    const getEnfermedades = async () => {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await AxiosInstance.get(
        "/api/paciente/obtener/enfermedades",
        { headers: headers }
      );
      console.log(response.data.datos);
      setEnfermedadesPaciente(response.data.datos);
    };

    getEnfermedades();
  }, [tipo_sangre]);

  return (
    <>
      <div className="bg-white p-0 md:p-3">
        <h2 className="text-lg text-center font-semibold mt-0">
          Tipo de Sangre y Enfermedades Cronicas
        </h2>
      </div>
      <div className="md:grid grid-cols-3 bg-white p-8 md:pt-0">
        <div className=" col-span-1  mt-2 md:mt-0">
          <p className="flex gap-0.5 items-center text-gray-600">
            <SvgSangre />
            Tipo de Sangre:
          </p>
          <p className="flex font-semibold gap-1 items-center">{tipo_sangre}</p>
        </div>

        {enfermedadesPaciente.map((enfermedad, index) => (
          <div className="col-span-1 mt-2 md:mt-0" key={index}>
            <p className="flex gap-0.5 items-center text-gray-600">
              <SvgEnfermedad />
              Enfermedad:
            </p>
            <p className="flex font-semibold gap-1 items-center">
              {enfermedad.enfermedad || "No definido"}
            </p>

            <p className="flex gap-0.5 items-center text-gray-600">
              <SvgNivel />
              Nivel de Gravedad:
            </p>
            <p className="flex font-semibold gap-1 items-center">
              {enfermedad.gravedad || "No definido"}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
