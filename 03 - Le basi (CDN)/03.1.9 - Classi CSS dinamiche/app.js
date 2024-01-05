const app = Vue.createApp({
	data() {
		return {
			url: "https://github.com/simonedimeglio",
			mostraPersona: true,
			persone: [
				{ name: "Simone", surname: "Di Meglio", img: 'assets/1.jpeg' , isFavourite: true},
				{ name: "Spongebob", surname: "Squarepants", img: 'assets/2.jpeg', isFavourite: false},
				{ name: "Patrik", surname: "Stella", img: 'assets/3.jpeg', isFavourite: true},
			],
		};
	},
	methods: {
		togglePersona() {
			this.mostraPersona = !this.mostraPersona;
		},
		toggleFav(item) {
			item.isFavourite = !item.isFavourite
		}
	},
});

app.mount("#app");
