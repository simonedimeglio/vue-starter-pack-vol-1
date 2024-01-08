// Questo è il file main.js che inizializza e monta l'applicazione Vue, collegando il componente principale App all'elemento con l'id app nel documento HTML.

// Importa la funzione createApp dal modulo 'vue'
import { createApp } from "vue";

// Importa il componente principale App dal file App.vue
import App from "./App.vue";

// Crea un'applicazione Vue utilizzando la funzione createApp
// Passa il componente principale App come argomento a createApp
const app = createApp(App);

// Monta l'applicazione nell'elemento con l'id 'app' nel documento HTML
app.mount("#app");


/*
Import: Utilizza la dichiarazione di import per importare la funzione createApp da Vue e il componente principale App dal file App.vue.
Creazione dell'App: Crea un'istanza di Vue utilizzando la funzione createApp e assegna l'istanza a una costante chiamata app.
Montaggio dell'App: Monta l'applicazione sull'elemento HTML con l'id app. Ciò significa che il componente principale App sarà renderizzato all'interno di questo elemento nel DOM HTML.
*/