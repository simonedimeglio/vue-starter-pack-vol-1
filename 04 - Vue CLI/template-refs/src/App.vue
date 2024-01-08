<template>
	<!-- La sezione template definisce la struttura HTML del componente -->
	<div>
		<!-- Un'intestazione h1 con un'interpolazione di titolo -->
		<h1>{{ titolo }}</h1>

		<!-- Un input di testo con un riferimento (ref) denominato 'nome' -->
		<input type="text" ref="nome" />

		<!-- Un pulsante che attiva il metodo 'ascoltaClick' quando viene cliccato -->
		<button @click="ascoltaClick">Clicca qua</button>
	</div>
</template>

<script>
// La sezione script contiene la logica JavaScript del componente

export default {
	// Il nome del componente
	name: "App",

	// Funzione data che restituisce uno stato iniziale per il componente
	data() {
		return {
			titolo: "Il mio progetto Vue",
		};
	},

	// Metodi del componente
	methods: {
		// Metodo chiamato quando il pulsante viene cliccato
		ascoltaClick() {
			// Accedi all'elemento DOM con il riferimento 'nome' utilizzando $refs
			console.log(this.$refs.nome);

			// Aggiungi la classe 'active' all'elemento con il riferimento 'nome'
			this.$refs.nome.classList.add("active");

			// Fai 'focus' sull'elemento con il riferimento 'nome'
			this.$refs.nome.focus();
		},
	},
};
</script>

<style>
/* Qua magari potremmo definire la classe "active" */
</style>
