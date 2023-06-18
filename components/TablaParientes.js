import { useState, useEffect } from "react";
import AxiosInstance from "../src/config/axios";

const Table = ({actualizarTablaCallback}) => {
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
  }, [actualizarTablaCallback]);

  if (parentescoPaciente.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg">
          No hay registros de parientes disponibles.
        </p>
      </div>
    );
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Parentesco ID
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Nombre
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Apellido
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Teléfono
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Parentesco
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {parentescoPaciente.map((pariente) => (
          <tr key={pariente.id}>
            <td className="px-6 py-4 whitespace-nowrap">{pariente.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{pariente.nombre}</td>
            <td className="px-6 py-4 whitespace-nowrap">{pariente.apellido}</td>
            <td className="px-6 py-4 whitespace-nowrap">{pariente.telefono}</td>
            <td className="px-6 py-4 whitespace-nowrap">{pariente.parentesco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
