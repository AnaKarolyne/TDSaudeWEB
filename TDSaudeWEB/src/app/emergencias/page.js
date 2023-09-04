import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getEmergencias(){
  const url = "http://localhost:8080/api/emergencias"
  const resp = await fetch(url, { next: { revalidate: 0 } })
  if (!resp.ok) throw new Error("Não pode carregar os dados")
  return resp.json()
}

export default function Emergencias() {
  const data = await getEmergencias()

  return (
    <>
      <NavBar active={"emergencias"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Emergencias</h2>
          <Button href="/emergencias/new">
            Registrar Nova Informação de Emergência
          </Button>
        </div>

        <div id="data" className="text-slate-300 m-1">
          {data.map(emergencias => <DataRow emergencias={emergencias} /> )}
        </div>
      </main>
    </>

  )
}
