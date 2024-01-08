<template>
	<!-- La sezione template definisce la struttura HTML dell'app -->
	<div id="app">
		<!-- Un'immagine con l'attributo 'alt' e 'src', utilizzata come logo Vue -->
		<img alt="Vue logo" src="./assets/logo.png" />

		<!-- Il componente HelloWorld importato con un messaggio di benvenuto personalizzato -->
		<HelloWorld msg="Welcome to Your Vue.js App" />
	</div>
</template>

<script>
// La sezione script contiene la logica JavaScript del componente
// Importa il componente HelloWorld dal file HelloWorld.vue
import HelloWorld from "./components/HelloWorld.vue";

export default {
	// Il nome del componente
	name: "App",

	// Definisce i componenti utilizzati all'interno di questo componente
	components: {
		HelloWorld,
	},
};
</script>

<style>
/* La sezione style contiene le regole di stile CSS per il componente */

#app {
	/* Regole di stile per l'elemento con l'id 'app' */
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50; /* Colore del testo */
	margin-top: 60px; /* Spazio superiore del margine */
}
</style>
