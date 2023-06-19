import { useState, useEffect, createContext } from "react"
import axios from "axios";
import AxiosInstance from "../src/config/axios";


const SaludcContext = createContext();

const SaludcProvider = ({children}) => {
    // =================================================================
    const [datos, setDatos] = useState({});
    const [tiposangreTipo, setTiposangreTipo] = useState([])

    //const [tiposangre, setTiposangre] = useState({});

    useEffect(() => {
        const obtenerToken = localStorage.getItem("token");
        if (obtenerToken) {
          // Llamar a la función obtenerPerfil() para obtener los datos del perfil
          perfil();
        }
      }, [setDatos]); // Agrega setDatos como una dependencia

    const perfil = async () => {
        try {
        // const headers = {
        //     Authorization: `Bearer ${localStorage.getItem("token")}`,
        // };
        const token = localStorage.getItem("token");
        if(token){
            const headers = {
                Authorization: `Bearer ${token}`,
            };
            const response = await AxiosInstance.get("usuario/profile", { headers });
            const datos = response.data;
            console.log(datos.datos.tiposangre);
            setDatos(datos.datos);
            setTiposangreTipo(datos.datos.tiposangre)
        }
        // const response = await AxiosInstance.get("usuario/profile", { headers });
        // const datos = response.data;
        // console.log(datos.datos);
        // setDatos(datos.datos);
        } catch (error) {
        console.error(error);
        }
    };
    useEffect(() => {
        perfil(); // Llama a la función perfil para obtener los datos del perfil
    }, []);

    // Asegúrate de que datos se haya actualizado antes de acceder a datos.tipo_sangre.tipo
    //const tiposangre = datos.tiposangre.tipo;
    //console.log(tiposangre);

     // ================================================================= 


     //Consumiendo el tipo de sangre


    const [modal, setModal] = useState(false)

    //para Modal
    const handleChangeModal = () => {
        setModal(!modal)
    }
    

  return (
    <SaludcContext.Provider
        value={{
            modal,
            handleChangeModal,
            datos,
            setDatos,
            perfil,
            tiposangreTipo
        }}
    >
        {children}
    </SaludcContext.Provider>
  )
}

export {
    SaludcProvider
}

export default SaludcContext