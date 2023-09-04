import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getConsultas(){
  const url = "http://localhost:8080/api/consultas"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default function Consultas() {
  const data = await getConsultas()

  return (
    <>
      <NavBar active={"consultas"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Consultas</h2>
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
