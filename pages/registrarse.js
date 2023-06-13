import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import AxiosInstance from "../src/config/axios";

export default function Registrarse() {
  const [formData, setFormData] = useState({
    apellido: "",
    nombre: "",
    email: "",
    password: "",
    telefono: "",
    edad: 0,
    genero_id: 0,
    municipio_id: 0,
    direccion: "",
  });

  const [generos, setGeneros] = useState([]); // Estado para almacenar los géneros
  const [departamentos, setDepartamentos] = useState([]); // Estado para almacenar los departamentos
  const [selectedDepartamento, setSelectedDepartamento] = useState(""); // Estado para almacenar el departamento seleccionado
  const [municipios, setMunicipios] = useState([]); // Estado para almacenar los municipios
  const [selectedMunicipio, setSelectedMunicipio] = useState(""); // Estado para almacenar el municipio seleccionado

  useEffect(() => {
    const getGeneros = () => {
      try {
        AxiosInstance.get("/generos").then((response) => {
          //console.log(response.data.datos);
          setGeneros(response.data.datos);
        });
      } catch (error) {
        console.error(error);
      }
    };

    const getdepartamentos = () => {
      try {
        AxiosInstance.get("/departamentos").then((response) => {
          //console.log(response.data.datos);
          setDepartamentos(response.data.datos);
        });
      } catch (error) {
        console.error(error);
      }
    };
    getGeneros();
    getdepartamentos();
  }, []);

  const handleDepartamentoChange = (event) => {
    const departamentoId = event.target.value;
    setSelectedDepartamento(departamentoId);

    try {
      AxiosInstance.get(`/departamento/get/by/id/${departamentoId}`).then(
        (response) => {
          // console.log(response.data.datos);
          setMunicipios(response.data.datos);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleMunicipioChange = (event) => {
    const municipioId = event.target.value;
    setSelectedMunicipio(municipioId);
  };

  const [selectedGenero, setSelectedGenero] = useState(0);

  // Función para manejar cambios en el campo "género"
  const handleGeneroChange = (event) => {
    setSelectedGenero(parseInt(event.target.value));
  };

  // Función para manejar cambios en los campos del formulario
  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  // Función para enviar los datos del formulario
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const data = {
        apellido: formData.apellido,
        nombre: formData.nombre,
        email: formData.email,
        password: formData.password,
        telefono: formData.telefono,
        edad: formData.edad,
        genero_id: selectedGenero,
        municipio_id: formData.municipio_id,
        direccion: formData.direccion,
      };
      console.log(data);

      // const response = await AxiosInstance.post("register/user", data);
      // console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Head>
        <title>Regístrate</title>
      </Head>

      <div className="flex min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-400 via-indigo-400 to-blue-500">
        <div className="flex flex-1 flex-col md:mx-20 lg:mx-72 justify-center px-1 py-12 ">
          <div className="bg-black bg-opacity-30 py-14 px-2 md:px-20 rounded-lg">
            {/* Inicia Contenido de registro */}
            <div className="">
              <div className="">
                <img
                  className="mx-auto h-20 w-auto"
                  src="/assets/img/logo.png"
                  alt="logo salud comunitaria"
                />
                <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                  Regístrate
                </h2>
              </div>

              <div className="mt-10 ">
                <form
                  className="space-y-4 "
                  action="#"
                  method="POST"
                  onSubmit={handleSubmit}
                >
                  <div className="flex gap-2">
                    <div className="w-full">
                      <label
                        htmlFor="nombre"
                        className="block text-base font-medium leading-6 text-white"
                      >
                        Nombre
                      </label>
                      <div className="mt-2">
                        <input
                          id="nombre"
                          name="nombre"
                          value={formData.nombre}
                          onChange={handleChange}
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
                        className="block text-base font-medium leading-6 text-white"
                      >
                        Apellidos
                      </label>
                      <div className="mt-2">
                        <input
                          id="apellido"
                          name="apellido"
                          value={formData.apellido}
                          onChange={handleChange}
                          type="text"
                          autoComplete="apellido"
                          required
                          placeholder="Sus apellidos"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-base font-medium leading-6 text-white"
                    >
                      Correo Electronico
                    </label>
                    <div className="mt-2">
                      <input
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="Escriba su correo electronico"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-full">
                      <label
                        htmlFor="edad"
                        className="block text-base font-medium leading-6 text-white"
                      >
                        Edad
                      </label>
                      <div className="mt-2">
                        <input
                          id="edad"
                          name="edad"
                          value={formData.edad}
                          onChange={handleChange}
                          type="number"
                          autoComplete="edad"
                          required
                          placeholder="Escriba su edad"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="genero_id"
                        className="block text-base font-medium leading-6 text-white"
                      >
                        Genero
                      </label>
                      <div className="mt-2">
                        <select
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                          id="genero_id"
                          name="genero_id"
                          value={selectedGenero}
                          onChange={handleGeneroChange}
                        >
                          <option value="0">-- Seleccione --</option>
                          {generos.map((genero) => (
                            <option key={genero.id} value={genero.id}>
                              {genero.nombre}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-full">
                      <label
                        htmlFor="departamento"
                        className="block text-base font-medium leading-6 text-white"
                      >
                        Departamento
                      </label>
                      <div className="mt-2">
                        <select
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                          id="departamento"
                          required
                          onChange={handleDepartamentoChange}
                          value={selectedDepartamento}
                        >
                          <option>-- Seleccione --</option>
                          {departamentos.map((departamento) => (
                            <option
                              key={departamento.id}
                              value={departamento.id}
                            >
                              {departamento.nombre}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="w-full">
                      <label
                        htmlFor="municipio_id"
                        className="block text-base font-medium leading-6 text-white"
                      >
                        Municipio
                      </label>
                        <div className="mt-2">
                            <select
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 text-center"
                                id="municipio_id"
                                required
                                onChange={handleMunicipioChange}
                                value={selectedMunicipio}
                            >
                                <option>-- Seleccione --</option>
                                {municipios.map((municipio) => (
                                    <option

                                        key={municipio.id}
                                        value={municipio.id}
                                    >
                                        {municipio.nombre}
                                    </option>
                                ))}
                            </select>

                        </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="direccion"
                      className="block text-base font-medium leading-6 text-white"
                    >
                      Direccion
                    </label>
                    <div className="mt-2">
                      <textarea
                        id="direccion"
                        name="direccion"
                        value={formData.direccion}
                        onChange={handleChange}
                        autoComplete="direccion"
                        required
                        placeholder="Escriba su direccion"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <div className="w-full">
                      <label
                        htmlFor="telefono"
                        className="block text-base font-medium leading-6 text-white"
                      >
                        Telefono
                      </label>
                      <div className="mt-2">
                        <input
                          id="telefono"
                          type="number"
                          name="telefono"
                          value={formData.telefono}
                          onChange={handleChange}
                          autoComplete="telefono"
                          required
                          placeholder="Escriba su Telefono"
                          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="password"
                      className="block text-base font-medium leading-6 text-white"
                    >
                      Contraseña
                    </label>
                    <div className="mt-2">
                      <input
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        type="password"
                        required
                        placeholder="Escriba su Direccion"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 uppercase"
                    >
                      Registrar Usuario
                    </button>
                  </div>
                </form>

                <div className="text-sm mt-4 text-center">
                  <Link legacyBehavior href="/registrarse">
                    <a
                      href="#"
                      className="text-xs text-white hover:text-sky-200"
                    >
                      No tienes una cuenta? Registrate
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            {/* finaliza contenido de registro */}
          </div>
        </div>
      </div>
    </>
  );
}
