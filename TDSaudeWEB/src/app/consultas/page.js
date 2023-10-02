import NavBar from "@/components/NavBar";
import DataRow from "./DataRow";
import Button from "@/components/Button";
import { getConsulta } from "@/actions/consultas";

export default function Consulta() {
  const [data, setData] = useState([]); // Use o estado para armazenar os dados

  useEffect(() => {
    async function fetchData() {
      try {
        const consultaData = await getConsulta();
        setData(consultaData);
      } catch (error) {
        console.error("Erro ao buscar os dados da consulta:", error);
      }
    }

    fetchData();
  }, []); // Chame a função fetchData() apenas uma vez quando o componente for montado

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
          {data.map((consulta, index) => (
            <DataRow key={index} consulta={consulta} />
          ))}
        </div>
      </main>
    </>
  );
}
