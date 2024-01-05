## Direttive

`v-on` e `@` sono direttive in Vue.js che vengono utilizzate per gestire gli eventi nell'interfaccia utente. Entrambe le direttive consentono di ascoltare eventi e associare loro delle azioni.

### v-on

`v-on` è una direttiva che permette di ascoltare eventi e associare loro una o più azioni. La sintassi generale è `v-on:evento="azione"`, dove "evento" è il nome dell'evento da ascoltare e "azione" è la funzione o l'espressione da eseguire quando l'evento si verifica.

Esempio:

`<button v-on:click="eseguiAzione">Clicca qui</button>` 

In questo esempio, l'evento "click" sul pulsante attiverà la funzione `eseguiAzione` quando si verifica.

### @

`@` è un'abbreviazione di `v-on`. Può essere utilizzato al posto di `v-on` per rendere il codice più compatto e leggibile.

Esempio equivalente a quello precedente:

`<button @click="eseguiAzione">Clicca qui</button>` 

Entrambi gli esempi sopra indicano di ascoltare l'evento "click" e di eseguire la funzione `eseguiAzione` quando l'utente fa clic sul pulsante.

In generale, puoi usare `v-on` o `@` in base alle tue preferenze. Entrambi fanno la stessa cosa, quindi la scelta è principalmente stilistica.