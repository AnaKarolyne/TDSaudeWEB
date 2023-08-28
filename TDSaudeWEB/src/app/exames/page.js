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
        <h2 className="text-2xl font-bold">Exames</h2>
        <div id="data" className="text-slate-300 m-1">
          {data.map(exames => <DataRow exames={exames} /> )}
        </div>
      </main>
    </>

  )
}
