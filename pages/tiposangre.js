import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import ProgressBar from "../components/ProgressBar";
import Link from "next/link";
import Swal from "sweetalert2";
import AxiosInstance from "../src/config/axios";
import { useRouter } from "next/router";
import useSalud from "../hooks/useSalud";


export default function FormContacto() {

  const { perfil } = useSalud()

  const customPercentage = 30;
  const [tiposangre, setTiposangre] = useState([]);
  const [selectedTipoSangre, setSelectedTipoSangre] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const getTiposangre = async () => {
      const response = await AxiosInstance.get("/api/catalogo/tipos/sangre");
      console.log(response.data.datos);
      setTiposangre(response.data.datos);
    };
    getTiposangre();
  }, []);

  const handleChange = (event) => {
    setSelectedTipoSangre(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        tipo_sangre_id: selectedTipoSangre,
      };
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };

      const response = await AxiosInstance.post(
        "/api/paciente/register/tipo/sangre",
        data,
        { headers: headers }
      );
      console.log(response.data);

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Tipo de Sangre agregado correctamente",
          showConfirmButton: false,
          timer: 1500,
        },
        perfil());

        document.getElementById("submit").disabled = true;
        router.push("/FormContact");
      } else {
        //router.push("/tiposangre");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <div className="w-full bg-white p-8 ">
        <ProgressBar progressPercentage={customPercentage} />

        <h2 className="font-semibold text-2xl text-center mt-10">
          {" "}
          Agregar Tipo de Sangre
        </h2>

        <form className="space-y-4 mt-10" action="#" method="POST">
          <div className="flex gap-2 mb-5">
            <div className="w-full">
              <label
                htmlFor="genero_id"
                className="block text-base font-medium leading-6 text-black"
              >
                Selecciona el tipo de Sangre:
              </label>
              <div className="mt-2">
                <select
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                  id="genero_id"
                  name="genero_id"
                  value={selectedTipoSangre}
                  onChange={handleChange}
                >
                  <option value="0">-- Seleccione --</option>
                  {tiposangre.map((tiposangre) => (
                    <option key={tiposangre.id} value={tiposangre.id}>
                      {tiposangre.tipo}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link legacyBehavior href="/perfil">
              <a className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase">
                Cancelar
              </a>
            </Link>
            <button
              type="submit"
              id="submit"
              className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase"
              onClick={handleSubmit}
            >
              Guardar
            </button>
            <Link legacyBehavior href="/FormContact">
              <a className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase">
                Siguiente
              </a>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}
