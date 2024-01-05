// Creazione di un'applicazione Vue utilizzando il metodo createApp().

const app = Vue.createApp({
	// In questa sezione, puoi definire i dati, le funzioni, ecc.

	// Il template definisce la struttura HTML del componente.
	template: "<h2>Io sono il template</h2>",
});

// Il metodo mount() connette l'app a un elemento HTML esistente.
// In questo caso, l'app viene montata sull'elemento con l'id 'app'.
app.mount("#app");


// IN BREVE: 

// Vue.createApp({ ... }): Crea un'applicazione Vue con le opzioni specificate all'interno dell'oggetto.
// template: '<h2>Io sono il template</h2>': Specifica il template HTML per il componente. In questo caso, viene utilizzata una stringa di template.
// app.mount('#app'): Monta l'applicazione su un elemento HTML esistente con l'id 'app'. Ciò renderà il contenuto definito nel template nell'elemento con quell'id.