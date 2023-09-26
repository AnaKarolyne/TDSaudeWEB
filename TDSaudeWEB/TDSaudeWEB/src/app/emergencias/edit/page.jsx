import { getEmergencia } from "@/actions/emergencias";
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";

export default async function FormEmergencia({params}) {
    
    const emergencia = await getEmergencia(params.id)

    return (
        <>
            <NavBar active="emergencia" />
            <FormEdit conta={emergencia} />
        </>
    )
}