import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { getConsulta } from "@/actions/consultas";

export default function Consulta() {
  const data = await getConsulta()

  return (
    <>
      <NavBar active={"consulta"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Consulta</h2>
          <Button href="/consultas/new">
            Adicionar nova consulta
          </Button>
        </div>

        <div id="data" className="text-slate-300 m-1">
          {data.map(consulta => <DataRow consulta={consulta} /> )}
        </div>
      </main>
    </>

  )
}
