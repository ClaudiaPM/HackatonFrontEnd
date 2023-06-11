import { useState, useEffect, createContext } from "react"
import axios from "axios";

const SaludcContext = createContext();

const SaludcProvider = ({children}) => {
    const [usuarios, setUsuarios] = useState({})

    const consultarUsuarios = async datos => {
        try {
            const url = ('http://167.99.145.1/api/registre/user')
            const { data } = await axios(url)
            setUsuarios(data.registre);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <SaludcContext.Provider
        value={{
            consultarUsuarios,
            usuarios,
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