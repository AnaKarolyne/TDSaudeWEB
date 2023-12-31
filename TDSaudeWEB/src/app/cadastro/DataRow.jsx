import DropMenu from "@/components/DropMenu";

export default function DataRow({cadastro}) {
    const {nome, idade, sexo, altura, convenio, telefone, email} = cadastro
    return (
        <div id="data-row" className="group/row flex items-center justify-between hover:bg-slate-800 p-2 rounded cursor-pointer">
            <div className="flex gap-1">
                <span>{nome}</span>
            </div>
            <div className="flex items-center">
                <span className="invisible group-hover/row:visible" >
                    <DropMenu />    
                </span>
            </div>
        </div>
    )
}