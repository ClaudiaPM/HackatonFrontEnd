import React, { useState, useEffect } from "react";
import SvgNombre from "../iconComponents/SvgNombre";
import SvgParentesco from "../iconComponents/SvgParentesco";
import SvgTelefono from "../iconComponents/SvgTelefono";
import AxiosInstance from "../src/config/axios";

export default function ContactoEmergencia() {
  const [parentescoPaciente, setParentescoPaciente] = useState([]);

  useEffect(() => {
    const getParentesco = async () => {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await AxiosInstance.get(
        "/api/paciente/obtener/parientes",
        { headers: headers }
      );
      setParentescoPaciente(response.data.datos);
    };

    getParentesco();
  }, []);

  return (
    <div>
      <div className="bg-white p-4 md:p-8">
        <h2 className="text-lg text-center font-semibold mt-0">
          Contacto de Emergencia
        </h2>
      </div>
      <div className="bg-white p-4 md:p-8">
        {parentescoPaciente.map((pariente, index) => (
          <div key={index} className="mb-4 border border-gray-300 rounded p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex items-center">
                <SvgNombre className="w-6 h-6 mr-2 text-gray-600" />
                <div>
                  <p className="text-gray-600">Nombre:</p>
                  <p className="font-semibold">
                    {pariente.nombre + " " + pariente.apellido || "No definido"}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <SvgParentesco className="w-6 h-6 mr-2 text-gray-600" />
                <div>
                  <p className="text-gray-600">Parentesco:</p>
                  <p className="font-semibold">
                    {pariente.parentesco || "No definido"}
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <SvgTelefono className="w-6 h-6 mr-2 text-gray-600" />
                <div>
                  <p className="text-gray-600">Teléfono:</p>
                  <p className="font-semibold">
                    {pariente.telefono || "No definido"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
