<template>
	<div>
		<h1>{{ titolo }}</h1>
		<!-- Utilizzo del componente 'Box' -->
		<Box />
	</div>
</template>

<script>

// Importa il componente 'Box' dal file Box.vue
import Box from "./components/Box.vue";

export default {
	name: "App",
	// Dichiarazione dei componenti utilizzati in questo componente
	components: { Box },
	data() {
		return {
			titolo: "Il mio progetto Vue",
		};
	},
};
</script>

