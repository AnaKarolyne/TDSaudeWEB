import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getHistorico() {
  const url = "http://localhost:8080/api/historico";
  const resp = await fetch(url, { next: { revalidate: 0 } });
  if (!resp.ok) throw new Error("Não pode carregar os dados");
  return resp.json();
}

export default function Historico() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const historicoData = await getHistorico();
        setData(historicoData);
      } catch (error) {
        console.error("Erro ao buscar os dados do histórico:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <NavBar active={"historico"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <h2 className="text-2xl font-bold">Histórico</h2>
        <div id="data" className="text-slate-300 m-1">
          {data.map((historico, index) => (
            <DataRow key={index} historico={historico} />
          ))}
        </div>
      </main>
    </>
  );
}
