import { useState, useEffect, createContext } from "react"
import axios from "axios";

const SaludcContext = createContext();

const SaludcProvider = ({children}) => {
    const [modal, setModal] = useState(false)

    //para Modal
    const handleChangeModal = () => {
        setModal(!modal)
    }
    

  return (
    <SaludcContext.Provider
        value={{
            modal,
            handleChangeModal
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