import { useState, useEffect } from "react";
import AxiosInstance from "../src/config/axios";
import Swal from "sweetalert2";

const Table = ({ actualizarTablaCallback, setActualizarTabla }) => {
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
            `/api/paciente/eliminar/parientes/${id}`,
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
          <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Acciones
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
            <td className="px-6 py-4 whitespace-nowrap">
              {pariente.parentesco}
            </td>
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

export default Table;
