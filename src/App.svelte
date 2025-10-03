<script lang="ts">
    import Titulo from "./components/Titulo.svelte";
    import type IUsuario from "./interfaces/IUsuario";
    import Usuario from "./components/Usuario.svelte";
    import Formulario from "./components/Formulario.svelte";

	let usuario: IUsuario | null = null;

	function definirUser(e: CustomEvent<IUsuario>){
		usuario = e.detail
	}

</script>

<div class="app">
	<header>
		<Titulo/>
		<div class="busca-usuario">
			<Formulario on:aoAlterarUser={definirUser}/>
			<!-- <Formulario bind:usuario={usuario}/> -->
			<!-- uso de bind para vincular as alteraçoes atribuidas a usuario em Formulario ao usuario Pai em App.Svelte -->
		</div>	
	</header>

{#if usuario}
	<Usuario {usuario} /> 
	<!-- uso de props para passar variaveis entre filhos e pais -->
{/if}

</div>

<style>
	.app{
		max-height: 100vh;
	}
	header{
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

    .busca-usuario {
        position: relative;
        width: 70%;
    }

</style>