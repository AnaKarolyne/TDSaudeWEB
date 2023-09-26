"use client"

import { create } from "@/actions/emergencias";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormEmergencias() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        if(resp.message){
            setMessage(resp.message)
            return
        }
        redirect("/emergencias")
    }

    return (
        <>
            <NavBar active="emergencias" />

            <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
                <h2 className="text-2xl font-bold">Cadastrar Informações de Emergencia</h2>
                <form action={handleSubmit}>
                    <InputText name="nome" id="nome" label="nome"/>
                    <InputText name="telefone_emergencia" id="telefoneEmergencia" label="telefone" type="number"/>
                    <InputText name="alergia" id="alergia" label="alergia"/>
                    <InputText name="medicacoes_proibidas" id="medicacoesProibidas" label="medicacoes"/>
                    <InputText name="icone" id="icone" label="ícone" />

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
        </>
    )
}