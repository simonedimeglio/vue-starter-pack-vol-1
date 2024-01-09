# Forms & Input

La gestione di form e input in Vue.js 3 coinvolge diversi concetti chiave. 
Di seguito, vi fornirò una panoramica generale e alcune pratiche consigliate:

## Modello di Dati e v-model:

In Vue.js, il modello di dati è essenziale per la gestione degli input del form. Il binding bidirezionale tramite `v-model` permette di sincronizzare automaticamente i dati del modello con il valore dell'input. Ad esempio:

<img width="970" alt="1" src="https://github.com/simonedimeglio/vue-starter-pack-vol-1/assets/78272736/2767853b-3000-40ba-9550-a34a25e65560">

In questo esempio, `username` è una variabile dichiarata nel modello di dati, e l'input viene collegato bidirezionalmente ad essa tramite `v-model`.

## Gestione degli Eventi e Metodi:

Per gestire gli eventi associati agli input del form, puoi utilizzare i metodi Vue.js. Ad esempio, per gestire un evento di submit del form:

<img width="989" alt="2" src="https://github.com/simonedimeglio/vue-starter-pack-vol-1/assets/78272736/517f4a80-a29e-488f-a6b2-f255c0508c57">

L'evento `@submit.prevent="handleSubmit"` previene il comportamento predefinito del form e chiama il metodo `handleSubmit()`.

## Validazione dei Dati:

La validazione dei dati è un aspetto critico nella gestione dei form. Puoi utilizzare condizioni e messaggi di errore nel tuo template:

<img width="824" alt="3" src="https://github.com/simonedimeglio/vue-starter-pack-vol-1/assets/78272736/648d9305-c682-48ce-9d99-e3248c8b7ca2">

In questo esempio, `isValidUsername` è una computed property che determina se l'username è valido. Il messaggio di errore viene mostrato solo se l'username non è valido.

## Conclusioni:

La gestione di form e input in Vue.js 3 coinvolge la sincronizzazione dei dati del modello, la gestione degli eventi e la validazione dei dati. Utilizzando il two-way binding di `v-model` e sfruttando i metodi, le computed properties e le condizioni nel template, puoi creare form interattivi e reattivi in modo efficace.
