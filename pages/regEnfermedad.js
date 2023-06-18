import { useState, useEffect } from "react";
import Layout from "../layout/Layout";
import ProgressBar from "../components/ProgressBar";
import Link from "next/link";
import Swal from "sweetalert2";
import AxiosInstance from "../src/config/axios";
import TableEnfermedades from "../components/TablaEnfermedades";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { tr } from "date-fns/locale";

export default function FormContacto() {
  const customPercentage = 100;

  const [enfermedades, setEnfermedades] = useState([]);
  const [gravedades, setGravedades] = useState([
    "Leve",
    "Moderada",
    "Grave",
    "Muy Grave",
  ]);
  const [actualizarTabla, setActualizarTabla] = useState(false);
  const [selectedEnfermedad, setSelectedEnfermedad] = useState(0);
  const [selectedGravedad, setSelectedGravedad] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);

  const handleChangeenfermedad = (event) => {
    setSelectedEnfermedad(event.target.value);
  };

  const handleChangegravedad = (event) => {
    setSelectedGravedad(event.target.value);
  };

  const validarFormulario = () => {
    if (
      selectedEnfermedad === 0 ||
      selectedGravedad === "" ||
      selectedDate === null
    ) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validarFormulario()) {
      Swal.fire({
        icon: "error",
        title: "Todos los campos son obligatorios",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    const formattedDate = selectedDate
      ? selectedDate.toLocaleDateString("es-ES")
      : "";

    // Extrae los componentes de la fecha formateada
    const [day, month, year] = formattedDate.split("/");

    // Construye la fecha en formato "yyyy-MM-dd"
    const fechaFormateada = `${year}-${month}-${day}`;

    const data = {
      enfermedad_id: selectedEnfermedad,
      gravedad: selectedGravedad,
      fecha_inicio: fechaFormateada,
    };

    console.log(data);
    try {
      const headers = {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      };
      const response = await AxiosInstance.post(
        "/api/paciente/register/enfermedades",
        data,
        { headers: headers }
      );
      console.log(response);
      if (response.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Enfermedad agregada correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
        setActualizarTabla(true);
        //limpiar el formulario
        setSelectedEnfermedad(0);
        setSelectedGravedad("");
        setSelectedDate(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //efect
  useEffect(() => {
    const obtenerEnfermedad = async () => {
      const response = await AxiosInstance.get(
        "/api/catalogo/tipos/enfermedades"
      );
      console.log(response.data.datos);
      setEnfermedades(response.data.datos);
    };

    obtenerEnfermedad();
  }, []);

  return (
    <Layout>
      <div className="w-full bg-white p-8">
        <ProgressBar progressPercentage={customPercentage} />

        <h2 className="font-semibold text-2xl text-center mt-10">
          Agregar Enfermedades
        </h2>

        <form className="space-y-4 mt-10" action="#" method="POST">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="enfermedad_id"
                className="block text-base font-medium leading-6 text-black"
              >
                Selecciona la enfermedad
              </label>
              <div className="mt-2">
                <select
                  className="block w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 py-2 text-sm text-gray-900"
                  id="enfermedad_id"
                  name="enfermedad_id"
                  value={selectedEnfermedad}
                  onChange={handleChangeenfermedad}
                >
                  <option value="0">-- Seleccione --</option>
                  {enfermedades.map((enfermedad) => (
                    <option key={enfermedad.id} value={enfermedad.id}>
                      {enfermedad.nombre}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="gravedad_id"
                className="block text-base font-medium leading-6 text-black"
              >
                Selecciona su nivel
              </label>
              <div className="mt-2">
                <select
                  className="block w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 py-2 text-sm text-gray-900"
                  id="gravedad_id"
                  name="gravedad_id"
                  value={selectedGravedad}
                  onChange={handleChangegravedad}
                >
                  <option value="0">-- Seleccione --</option>
                  {gravedades.map((gravedad, index) => (
                    <option key={index} value={gravedad}>
                      {gravedad}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <label
              htmlFor="fecha_inicio"
              className="block text-base font-medium leading-6 text-black"
            >
              Fecha de inicio
            </label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              dateFormat="yyyy-MM-dd"
              placeholderText="Selecciona una fecha"
              className="block w-full rounded-md border-gray-300 focus:ring-2 focus:ring-indigo-500 py-2 text-sm text-gray-900"
            />
          </div>

          <div className="flex justify-between">
            <Link legacyBehavior href="/FormContact">
              <a className="flex justify-center items-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-sky-500 focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 uppercase">
                Regresar
              </a>
            </Link>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex justify-center items-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-sky-500 focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 uppercase"
            >
              Guardar
            </button>
            <Link legacyBehavior href="/perfil">
              <a className="flex justify-center items-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-sky-500 focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 uppercase">
                Completar
              </a>
            </Link>
          </div>
        </form>
      </div>
      <TableEnfermedades
        actualizarTablaCallback={actualizarTabla}
        setActualizarTabla={setActualizarTabla}
      />
    </Layout>
  );
}
