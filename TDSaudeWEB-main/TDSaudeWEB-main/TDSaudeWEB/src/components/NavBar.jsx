"use client"

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function NavBar({active}) {
    const { user, logout } = useContext(AuthContext)
    const { push } = useRouter()

    function handleLogout() {
        logout()
        push("/login")
    }
    return (
        <nav className="bg-slate-900 p-6 flex justify-between items-center">
            <ul className="flex gap-12 items-end text-slate-400 text-sm">
                <li>
                    <a href="#">
                        <h1 className="text-2xl font-bold text-slate-100">TDSaúde</h1>
                    </a>
                </li>
                <li>
                    <Link className={active=="inicio" && "text-slate-300"} href="/inicio">
                        Ínicio
                    </Link>
                </li>
                <li>
                    <Link className={active=="consultas" && "text-slate-300"} href="/consultas">
                        Consultas
                    </Link>
                </li>
                <li>
                    <Link className={active=="exames" && "text-slate-300"} href="/exames">
                        Exames
                    </Link>
                </li>
                <li>
                    <Link className={active=="historico" && "text-slate-300"} href="/historico">
                        Histórico
                    </Link>
                </li>
                <li>
                    <Link className={active=="informacoes" && "text-slate-300"} href="/informacoes">
                        Informações
                    </Link>
                </li>
                <li>
                    <Link className={active=="emergencias" && "text-slate-300"} href="/emergencias">
                        Emergências
                    </Link>
                </li>
                <li>
                    <Link className={active=="cadastro" && "text-slate-300"} href="/cadastro">
                        Cadastro
                    </Link>
                </li>
            </ul>
            <div className="flex items-center gap-2">
                <span>{user?.nome}</span>
                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
                </div>
                <Button element="button" onClick={handleLogout}>Sair</Button>
            </div>
        </nav>
    )
}