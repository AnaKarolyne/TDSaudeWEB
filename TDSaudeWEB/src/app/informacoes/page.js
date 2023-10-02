import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";

async function getInformacoes() {
  const url = "http://localhost:8080/api/informacoes";
  const resp = await fetch(url, { next: { revalidate: 0 } });
  if (!resp.ok) throw new Error("Não pode carregar os dados");
  return resp.json();
}

export default function Informacoes() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const informacoesData = await getInformacoes();
        setData(informacoesData);
      } catch (error) {
        console.error("Erro ao buscar os dados das informações:", error);
      }
    }

    fetchData();
  }, []);

  return (
    <>
      <NavBar active={"informacoes"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <h2 className="text-2xl font-bold">Informações</h2>
        <div id="data" className="text-slate-300 m-1">
          {data.map((informacoes, index) => (
            <DataRow key={index} informacoes={informacoes} />
          ))}
        </div>
      </main>
    </>
  );
}
