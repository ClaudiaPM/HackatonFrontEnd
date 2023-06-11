import { useContext } from "react";
import SaludcContext from "../context/SaludcProvider";

const useSalud = () => {
    return useContext(SaludcContext)
}

export default useSalud;