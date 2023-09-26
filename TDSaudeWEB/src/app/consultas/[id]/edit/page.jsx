import { getConsulta } from "@/actions/consultas";
import NavBar from "@/components/NavBar";
import FormEdit from "./Form";

export default async function FormConsulta({params}) {
    
    const consulta = await getConsulta(params.id)

    return (
        <>
            <NavBar active="consulta" />
            <FormEdit conta={consulta} />
        </>
    )
}