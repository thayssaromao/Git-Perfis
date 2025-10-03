# 📘 Projeto: Perfis do GitHub com Svelte

Este projeto consiste em uma aplicação Svelte que permite buscar usuários do GitHub e exibir informações detalhadas de seus perfis, incluindo repositórios públicos recentes. A interface é responsiva e utiliza boas práticas de organização de componentes, reatividade e consumo de APIs.

---

## 🔗 Integração com API do GitHub

A aplicação realiza requisições HTTP para diferentes rotas da [API pública do GitHub](https://api.github.com), permitindo buscar:

* Informações do perfil de um usuário (`/users/:username`)
* Lista de repositórios públicos do usuário (`/users/:username/repos`)

Os dados retornados são tratados e apresentados de forma limpa na interface.

---

## 🔁 Renderização de listas com `#each`

A lista de repositórios do usuário é exibida dinamicamente utilizando o bloco `#each` do Svelte:

```svelte
{#each repositorios as repositorio}
  <li><a href={repositorio.url}>{repositorio.nome}</a></li>
{/each}
```

Essa estrutura permite renderizar qualquer quantidade de repositórios recebidos da API.

---

## ⚡ Reatividade com `$:`

A aplicação faz uso da reatividade declarativa do Svelte para executar lógica automaticamente sempre que um valor muda:

---

## 🧩 Componentes reutilizáveis com `<slot>`

Alguns componentes utilizam a tag `<slot>` para receber conteúdo dinâmico, o que permite maior flexibilidade e reuso.

---

## 🧱 Tecnologias utilizadas

* [Svelte](https://svelte.dev/)
* TypeScript
* API do GitHub
* CSS puro

---

## 🚀 Funcionalidades

* Buscar usuários do GitHub
* Exibir dados de perfil: nome, login, seguidores, etc.
* Listar os repositórios mais recentes com links clicáveis
* Interface organizada por componentes reutilizáveis
* Estilo responsivo com CSS modularizado

---

## 📁 Estrutura de pastas (resumida)

```
src/
├── components/
│   ├── Usuario.svelte
│   ├── Titulo.svelte
│   └── BarraSuperior.svelte
├── interfaces/
│   ├── IUsuario.ts
│   └── IRepositorios.ts
├── requisicoes/
│   └── index.ts
├── App.svelte
```

---
## 📷 Resultado Final
<img width="1401" height="638" alt="image" src="https://github.com/user-attachments/assets/14191876-e69c-4c50-8d23-e78e0b444a2d" />

