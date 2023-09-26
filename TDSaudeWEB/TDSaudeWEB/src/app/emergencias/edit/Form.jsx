"use client"

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'
import { update } from "@/actions/emergencias";

export default function FormEdit({emergencia}){
    const [message, setMessage] = useState("")
    const [emergenciaEdit, setEmergenciaEdit] = useState(emergencia)
    
    async function handleSubmit(){
        const resp = await update(emergenciaEdit)
        if(resp?.error){
            setMessage(resp.error)
            return
        }
        redirect("/emergencias")
    }

    function handleFieldChange(field, value){
        //console.log(field, value)
        setemergenciaEdit({
            ...emergenciaEdit,
            [field]: value
        })
    }

    return(
        <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
        <h2 className="text-2xl font-bold">Editar Informações de Emergência</h2>
        <form action={handleSubmit}>
            <InputText 
                name="nome" 
                id="nome" 
                label="nome" 
                value={emergenciaEdit.nome} 
                onChange={e => handleFieldChange("nome", e.target.value)}
            />
            <InputText 
                name="telefone_emergencia" 
                id="telefoneEmergencia" 
                label="telefone" 
                value={emergenciaEdit.telefone} 
                onChange={e => handleFieldChange("especialidade", e.target.value)}
            />
            <InputText 
                name="alergia" 
                id="alergia" 
                label="alergia" 
                value={emergenciaEdit.alergia} 
                onChange={e => handleFieldChange("dia", e.target.value)}
            />
            <InputText 
                name="medicacoes_proibidas" 
                id="medicacoesProibidas" 
                label="medicacoes" 
                value={emergenciaEdit.medicacoes} 
                onChange={e => handleFieldChange("dia", e.target.value)}
            />

            <div className="flex justify-around mt-4">
                <Button href="/emergencias" variant="secundary" icon={<ArrowLeftIcon className="h-6 w-6" />}>
                    Cancelar
                </Button>
                <Button element="button" icon={<CheckIcon className="h-6 w-6" />}>
                    Salvar
                </Button>
            </div>
        </form>
        <p>{message}</p>
    </main>
    )
}