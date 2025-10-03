import type IRepositorios from "../interfaces/IRepositorios"
import type IUsuario from "../interfaces/IUsuario"

export default function montarUser(
    dadosUser,
    dadosRepos
):IUsuario{
    const repos_recentes = dadosRepos.map((repo) => {
        return{
            name:repo.name,
            html_url: repo.html_url
        }as IRepositorios
    })
    return{
        avatar_url: dadosUser.avatar_url,
        login: dadosUser.login,
        nome: dadosUser.name,
        perfil_url:  dadosUser.html_url,
        repositorios_publicos: 24,
        seguidores: dadosUser.followers,
        location: dadosUser.location,
        repos_recentes
    }
}