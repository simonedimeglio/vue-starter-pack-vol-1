const app = Vue.createApp({
  // La funzione data() restituisce un oggetto contenente i dati dello stato del componente.
  data() {
    // Gli attributi dell'oggetto rappresentano variabili di stato del componente.
    return {
      name: 'Simone',       // Esempio: una variabile per il nome
      surname: 'Di Meglio', // Esempio: una variabile per il cognome
      age: 28               // Esempio: una variabile per l'età
    };
  }
});

app.mount('#app');
