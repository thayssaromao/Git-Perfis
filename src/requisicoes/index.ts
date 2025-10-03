function buscaUsuario(nomeUsuario){
    return fetch(
        `https://api.github.com/users/${nomeUsuario}`
    );
}

function buscaRepos(nomeUsuario){
    return fetch(
        `https://api.github.com/users/${nomeUsuario}/repos?sort=created&per_page=5`
    );
}

export { buscaUsuario, buscaRepos};

//projeto ainda não está configurado corretamente para suportar TypeScript