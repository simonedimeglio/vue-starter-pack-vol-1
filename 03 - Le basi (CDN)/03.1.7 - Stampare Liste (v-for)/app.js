const app = Vue.createApp({
	data() {
		return {
			mostraPersona: true,
			persone: [
				{ name: "Simone", surname: "Di Meglio" },
				{ name: "Spongebob", surname: "Squarepants" },
				{ name: "Patrik", surname: "Stella" },
			],
		};
	},
	methods: {
		togglePersona() {
			this.mostraPersona = !this.mostraPersona;
		},
	},
});

app.mount("#app");
