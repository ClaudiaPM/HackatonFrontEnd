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
    <div>
      <div className="bg-white p-4 md:p-8">
        <h2 className="text-lg text-center font-semibold mt-0">
          Tipo de Sangre y Enfermedades Crónicas
        </h2>
      </div>
      <div className="md:grid grid-cols-1 md:grid-cols-3 gap-4 bg-white p-4 md:p-8">
        <div className="mt-4">
          <p className="flex items-center text-gray-600">
            <SvgSangre className="w-4 h-4 mr-1" />
            Tipo de Sangre:
          </p>
          <p className="font-semibold">{tipo_sangre}</p>
        </div>
        {enfermedadesPaciente.map((enfermedad, index) => (
          <div className="mt-4" key={index}>
            <p className="flex items-center text-gray-600">
              <SvgEnfermedad className="w-4 h-4 mr-1" />
              Enfermedad:
            </p>
            <p className="font-semibold">
              {enfermedad.enfermedad || "No definido"}
            </p>

            <p className="flex items-center text-gray-600">
              <SvgNivel className="w-4 h-4 mr-1" />
              Nivel de Gravedad:
            </p>
            <p className="font-semibold">
              {enfermedad.gravedad || "No definido"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
