"use client"

import { create } from "@/actions/consultas";
import Button from "@/components/Button";
import InputText from "@/components/InputText";
import NavBar from "@/components/NavBar";
import { CheckIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'


export default function FormConsulta() {
    const [message, setMessage] = useState("")

    async function handleSubmit(formData){
        const resp = await create(formData)
        if(resp.message){
            setMessage(resp.message)
            return
        }
        redirect("/consulta")
    }

    return (
        <>
            <NavBar active="consulta" />

            <main className="bg-slate-900 mt-10 p-12 rounded-xl max-w-lg m-auto">
                <h2 className="text-2xl font-bold">Cadastrar Consulta</h2>
                <form action={handleSubmit}>
                    <InputText name="nome" id="nome" label="nome" />
                    <InputText name="especialidade" id="especialidade" label="especialidade"/>
                    <InputText name="dia" id="dia" label="dia" type="number" />

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
        </>
    )
}