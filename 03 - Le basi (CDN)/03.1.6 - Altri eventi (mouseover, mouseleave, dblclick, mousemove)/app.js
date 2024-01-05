const app = Vue.createApp({
	data() {
		return {
			mostraPersona: true,
			name: "Simone",
			surname: "Di Meglio",
			age: 28,
			x: 0,
			y: 0
		};
	},
	methods: {
		togglePersona() {
			this.mostraPersona = !this.mostraPersona;
		},
		mostraEvento(e) {
			console.log(e, e.type)
		},
		mostraPosizione(e) {
			this.x = e.offsetX
			this.y = e.offsetY
		}
	},
});

app.mount("#app");
