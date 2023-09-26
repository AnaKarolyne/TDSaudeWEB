import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getExames(){
  const url = "http://localhost:8080/api/exames"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default function Exames() {
  const data = await getExames()

  return (
    <>
      <NavBar active={"exames"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Exames</h2>
          <Button href="/exames/new">
            Registrar Novo Exame
          </Button>
        </div>

        <div id="data" className="text-slate-300 m-1">
          {data.map(exame => <DataRow exame={exame} /> )}
        </div>
      </main>
    </>

  )
}
