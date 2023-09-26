"use client"

import Button from "@/components/Button";
import InputText from "@/components/InputText";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'
import { update } from "@/actions/consultas";

export default function FormEdit({consulta}){
    const [message, setMessage] = useState("")
    const [consultasEdit, setConsultasEdit] = useState(consulta)
    
    async function handleSubmit(){
        const resp = await update(consultaEdit)
        if(resp?.error){
            setMessage(resp.error)
            return
        }
        redirect("/consultas")
    }

    function handleFieldChange(field, value){
        //console.log(field, value)
        setConsultaEdit({
            ...consultaEdit,
            [field]: value
        })
    }

    return(
        <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
        <h2 className="text-2xl font-bold">Editar Consulta</h2>
        <form action={handleSubmit}>
            <InputText 
                name="nome" 
                id="nome" 
                label="nome" 
                value={consultasEdit.nome} 
                onChange={e => handleFieldChange("nome", e.target.value)}
            />
            <InputText 
                name="especialidade" 
                id="especialidade" 
                label="especialidade" 
                value={consultasEdit.especialidade} 
                onChange={e => handleFieldChange("especialidade", e.target.value)}
            />
            <InputText 
                name="dia" 
                id="dia" 
                label="dia" 
                value={consultasEdit.dia} 
                onChange={e => handleFieldChange("dia", e.target.value)}
            />

            <div className="flex justify-around mt-4">
                <Button href="/consultas" variant="secundary" icon={<ArrowLeftIcon className="h-6 w-6" />}>
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