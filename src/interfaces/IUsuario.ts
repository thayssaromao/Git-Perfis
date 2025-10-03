import type IRepositorios from "./IRepositorios";

export default interface IUsuario {
    nome: string;
    login: string;
    avatar_url: string;
    perfil_url: string;
    location: string;
    repositorios_publicos: number;
    seguidores: number;
    repos_recentes: IRepositorios[];
}