<script lang="ts">
    import { createEventDispatcher } from "svelte";
    import type IUsuario from "../interfaces/IUsuario";
    import { buscaRepos, buscaUsuario } from "../requisicoes";
    import montarUser from "../utils/montaUser";
    import Botao from "./Botao.svelte";

let valorInput;
// export let usuario: IUsuario | null 
let statusDeErro: null | number;

const dispatch = createEventDispatcher<{
    aoAlterarUser: IUsuario | null //rigidez do codigo
}>()

async function aoSubmeter(){
	
	const respostaUser = await buscaUsuario(valorInput)
    const respostaRepos = await buscaRepos(valorInput)

	if(respostaUser.ok && respostaRepos.ok){
        const dadosUser = await respostaUser.json();
        const dadosRepos = await respostaRepos.json();

            console.log(dadosRepos)

	dispatch('aoAlterarUser', montarUser(dadosUser, dadosRepos))
    statusDeErro =null
    }else{
        statusDeErro = respostaUser.status
        dispatch('aoAlterarUser', null)
    }

	}
</script>    

<form on:submit|preventDefault={aoSubmeter}>
    <input 
        type="text" 
        class="input" 
        class:erro-input={statusDeErro === 400}
        placeholder="Find User"
        bind:value={valorInput}
    >

    {#if statusDeErro === 404}
    <span class="erro">Usuário Não Encontrado</span>
    {/if}

    <div class="botao-container">
        <Botao>
            Send
    <!-- <img src="/assets/lupa.svg" alt="lupa"> -->
        </Botao>
    </div>

</form>

<style>
    .erro {
        position: absolute;
        bottom: -25px;
        left: 0;
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;
        z-index: -1;
        color: #ff003e;
    }

    .erro-input{
        border: 1px solid #ff003e;
        
    }
    .input {
        padding: 15px 25px;
        width: calc(100% - 8.75rem);
        font-size: 1rem;
        border-radius: 8px;
        border: 1px solid #2e80fa;
        box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
        outline: 0;
    }

    .input::placeholder {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 300;
        font-size: 1rem;
        line-height: 26px;
        color: #6e8cba;
    }

    .botao-container {
        position: absolute;
        width: 9.625rem;
        right: 0;
        top: 0;
        bottom: 0;
        display: flex;
    }

</style>