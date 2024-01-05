const app = Vue.createApp({
	data() {
		return {
			url: "https://github.com/simonedimeglio",
			mostraPersona: true,
			persone: [
				{ name: "Simone", surname: "Di Meglio", img: 'assets/1.jpeg' },
				{ name: "Spongebob", surname: "Squarepants", img: 'assets/2.jpeg' },
				{ name: "Patrik", surname: "Stella", img: 'assets/3.jpeg' },
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
