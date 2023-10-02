import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { getEmergencias } from "@/actions/emergencias";

export default function Emergencia() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const consultaData = await getEmergencias();
        setData(consultaData);
      } catch (error) {
        console.error("Erro ao buscar os dados de emergência:", error);
      }
    }

    fetchData();
  }, []); // 

  return (
    <>
      <NavBar active={"emergencia"} />

      <main className="bg-slate-900 m-20 p-12 rounded-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Emergência</h2>
          <Button href="/emergencias/new">
            Registrar Nova Informação de Emergência
          </Button>
        </div>

        <div id="data" className="text-slate-300 m-1">
          {data.map((emergencia, index) => (
            <DataRow key={index} emergencia={emergencia} />
          ))}
        </div>
      </main>
    </>
  );
}
