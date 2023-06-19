import AxiosInstance from "../src/config/axios";
import { useState, useEffect } from "react";
import SvgNivel from "../iconComponents/SvgNivel";
import SvgSangre from "../iconComponents/SvgSangre";
import SvgEnfermedad from "../iconComponents/SvgEnfermedad";
//usando el useContext 
import useSalud from "../hooks/useSalud";

export default function SangEnfermedad({ tipo_sangre }) {
    //Llamando los datos y la variable que se desea usar dentro de los datos
    const { tiposangreTipo } = useSalud()
    const { tipo } = tiposangreTipo

    // const selectTiposangre = tiposangre.length > 0 ? tiposangre[1].value : "No definido"

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
      <div className="flex flex-col items-center bg-white p-4 md:p-8">
        <div className="mt-4">
          <p className="flex items-center text-gray-600">
            <SvgSangre className="w-4 h-4 mr-1" />
            Tipo de Sangre:
          </p>
          <p className="font-semibold text-center">{tipo}</p>
        </div>
        <div className="mt-8">
          {enfermedadesPaciente.map((enfermedad, index) => (
            <div
              className="mb-4 border border-gray-300 rounded p-4"
              key={index}
            >
              <div className="flex flex-wrap md:flex-nowrap justify-center">
                <p className="flex items-center space-x-2 mx-2">
                  <SvgEnfermedad className="w-4 h-4 mr-1" />
                  Enfermedad:
                </p>
                <p className="font-semibold">
                  {enfermedad.enfermedad || "No definido"}
                </p>

                <p className="flex items-center space-x-2 mx-2">
                  <SvgNivel className="w-4 h-4 mr-1" />
                  Nivel de Gravedad:
                </p>
                <p className="font-semibold">
                  {enfermedad.gravedad || "No definido"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
