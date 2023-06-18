import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import ProgressBar from "../components/ProgressBar";
import Link from "next/link";
import Swal from "sweetalert2";
import AxiosInstance from "../src/config/axios";
import { useRouter } from "next/router";
import Table from "../components/TablaParientes";

export default function FormContacto() {
  const customPercentage = 60;

  const router = useRouter();
  const [parentesco, setParentesco] = useState([]);
  const [selectedParentesco, setSelectedParentesco] = useState(0);
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [actualizarTabla, setActualizarTabla] = useState(false);

  const handleChange = (event) => {
    setSelectedParentesco(event.target.value);
  };

  useEffect(() => {
    const getParentesco = async () => {
      const response = await AxiosInstance.get("/api/catalogo/parentescos");
      console.log(response.data.datos);
      setParentesco(response.data.datos);
    };
    getParentesco();
  }, []);

  const handleNombre = (event) => {
    setNombre(event.target.value);
  };

  const handleApellido = (event) => {
    setApellido(event.target.value);
  };

  const handleTelefono = (event) => {
    setTelefono(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = {
        parentesco_id: selectedParentesco,
        nombre: nombre,
        apellido: apellido,
        telefono: telefono,
      };
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await AxiosInstance.post(
        "/api/paciente/register/parientes",
        data,
        { headers: headers }
      );

      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Contacto de emergencia agregado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });

        //limpiar el formulario
        setNombre("");
        setApellido("");
        setTelefono("");
        setSelectedParentesco(0);

        // console.log(response.data);
        setActualizarTabla(true);

        console.log(data);
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un error al agregar el contacto de emergencia",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="w-full bg-white p-8 ">
        <ProgressBar progressPercentage={customPercentage} />

        <h2 className="font-semibold text-2xl text-center mt-10">
          {" "}
          Formulario Contacto de emergencia
        </h2>

        <form className="space-y-4 mt-10" action="#" method="POST">
          <div className="flex gap-2">
            <div className="w-full">
              <label
                htmlFor="nombre"
                className="block text-base font-medium leading-6 text-black"
              >
                Nombre
              </label>
              <div className="mt-2">
                <input
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={handleNombre}
                  //   value={formData.nombre}
                  //  onChange={handleChange}
                  type="text"
                  autoComplete="nombre"
                  required
                  placeholder="Su nombre"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="w-full">
              <label
                htmlFor="apellido"
                className="block text-base font-medium leading-6 text-black"
              >
                Apellidos
              </label>
              <div className="mt-2">
                <input
                  id="apellido"
                  name="apellido"
                  value={apellido}
                  onChange={handleApellido}
                  //   value={formData.apellido}
                  //  onChange={handleChange}
                  type="text"
                  autoComplete="apellido"
                  required
                  placeholder="Sus apellidos"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-full">
              <label
                htmlFor="genero_id"
                className="block text-base font-medium leading-6 text-black"
              >
                Parentesco
              </label>
              <div className="mt-2">
                <select
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                  id="genero_id"
                  name="genero_id"
                  value={selectedParentesco}
                  onChange={handleChange}
                >
                  <option value="0">Seleccione</option>
                  {parentesco.map((parentesco) => (
                    <option key={parentesco.id} value={parentesco.id}>
                      {parentesco.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <div className="w-full">
              <label
                htmlFor="telefono"
                className="block text-base font-medium leading-6 text-black"
              >
                Telefono
              </label>
              <div className="mt-2">
                <input
                  id="telefono"
                  type="number"
                  name="telefono"
                  value={telefono}
                  onChange={handleTelefono}
                  //   value={formData.telefono}
                  //   onChange={handleChange}
                  autoComplete="telefono"
                  required
                  placeholder="Escriba su Telefono"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            <Link legacyBehavior href="/tiposangre">
              <a className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase">
                Cancelar
              </a>
            </Link>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase"
            >
              Guardar
            </button>
            <Link legacyBehavior href="/regEnfermedad">
              <a className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase">
                Siguiente
              </a>
            </Link>
          </div>
        </form>
      </div>
      <Table actualizarTablaCallback={actualizarTabla} />
    </Layout>
  );
}
