# Composition API

La Composition API è una nuova API introdotta in Vue 3 che offre un modo alternativo e più flessibile per organizzare la logica all'interno dei componenti. Questa API è progettata per affrontare alcune limitazioni della struttura tradizionale degli oggetti di opzioni in Vue 2, consentendo una migliore organizzazione e riutilizzo del codice.

Ecco alcuni concetti chiave della Composition API:

1.  **Composizione:** La Composition API permette di organizzare il codice in termini di "composable functions" (funzioni componibili). Invece di dividersi tra opzioni come `data`, `methods`, `computed`, ecc., si possono creare funzioni che rappresentano parti specifiche della logica del componente. Queste funzioni possono quindi essere composte insieme per costruire la logica complessiva.
    
2.  **Setup Function:** Ogni componente Vue 3 utilizza una funzione `setup` al suo interno. Questa funzione viene chiamata prima di qualsiasi altra cosa nel ciclo di vita del componente e restituisce il contesto di setup. All'interno di questa funzione, è possibile definire variabili di stato, funzioni, e altro ancora.
    
3.  **Reactivity System:** La Composition API utilizza il sistema di reattività di Vue 3. Le variabili di stato reattive vengono create utilizzando funzioni come `ref` o `reactive`. Ciò consente a Vue di tracciare automaticamente le dipendenze e di reagire ai cambiamenti nelle variabili di stato.
   
    `import { ref } from 'vue';
    const count = ref(0); // Variabile di stato reattiva` 
    
4.  **Lifecycle Hooks:** Anche se la Composition API offre una nuova struttura, i lifecycle hooks tradizionali come `created`, `mounted`, ecc. sono ancora disponibili all'interno della funzione `setup`. Tuttavia, ora sono chiamati `onBeforeMount`, `onMounted`, ecc.
    
5.  **Ref e Reactive:** `ref` è utilizzato per creare variabili reattive per valori primitivi, mentre `reactive` può essere utilizzato per oggetti complessi. Entrambi consentono di mantenere la reattività.
    
6.  **Refs e Non-Reactive Data:** La Composition API consente anche di gestire dati non reattivi tramite il sistema di `ref`. Ad esempio, è possibile creare un ref per un valore che non deve essere reattivo.

La Composition API fornisce un modo più dichiarativo, componibile e organizzato per scrivere la logica dei componenti in Vue 3. Essa si integra bene con gli aspetti esistenti di Vue, offrendo maggiore flessibilità e chiarezza nella gestione della logica dei componenti complessi.
