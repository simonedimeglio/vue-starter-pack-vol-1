const app = Vue.createApp({
	data() {
		return {
			mostraPersona: true,
			name: "Simone",
			surname: "Di Meglio",
			age: 28,
		};
	},
	methods: {
		togglePersona() {
			this.mostraPersona = !this.mostraPersona;
		},
	},
});

app.mount("#app");
