import { useState, useEffect } from "react";
import AxiosInstance from "../src/config/axios";
import Swal from "sweetalert2";

const TableEnfermedades = ({ actualizarTablaCallback, setActualizarTabla }) => {
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
      console.log(response.data.datos)
      setEnfermedadesPaciente(response.data.datos);
    };

    getEnfermedades();
  }, [actualizarTablaCallback]);

  const handleDelete = async (id) => {
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3B82F6",
        cancelButtonColor: "#EF4444",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then(async (result) => {
        if (result.isConfirmed) {
          const response = await AxiosInstance.delete(
            `/api/paciente/eliminar/enfermedades/${id}`,
            { headers: headers }
          );
          console.log(response);
          if (response.status === 200) {
            Swal.fire({
              icon: "success",
              title: "Eliminado",
              text: "El pariente ha sido eliminado correctamente.",
              showConfirmButton: false,
              timer: 1500,
            });
            setActualizarTabla((prevState) => !prevState);
          } else {
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "No se pudo eliminar el pariente.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (enfermedadesPaciente.length === 0) {
    return (
      <div className="flex justify-center items-center h-40">
        <p className="text-gray-500 text-lg">
          No hay registros de enfermedades.
        </p>
      </div>
    );
  }

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead>
        <tr>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Enfermedad ID
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Enfermedad
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Fecha de diagnóstico
          </th>
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {enfermedadesPaciente.map((pariente) => (
          <tr key={pariente.id}>
            <td className="px-6 py-4 whitespace-nowrap">{pariente.id}</td>
            <td className="px-6 py-4 whitespace-nowrap">{pariente.enfermedad}</td>
            <td className="px-6 py-4 whitespace-nowrap">{pariente.fecha_inicio}</td>
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                value={pariente.id}
                onClick={(e) => handleDelete(e.target.value)}
            
                className="px-4 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600"
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableEnfermedades;
