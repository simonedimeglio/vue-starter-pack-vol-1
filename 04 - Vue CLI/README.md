
# Gestione degli Stili in Vue.js

Vue.js facilita la gestione degli stili all'interno dei componenti, rendendo più semplice personalizzare l'aspetto di ogni parte dell'applicazione. Vediamo i concetti principali relativi alla gestione degli stili.

## 1. **Stili Globali**

Gli stili globali sono quelli che influenzano l'aspetto dell'intera applicazione. Puoi definire stili globali nel file principale (`App.vue`) o importare file CSS esterni. Questi stili saranno applicati a tutti i componenti.

    <!-- In App.vue -->
    <style> body {
        background-color: #f0f0f0;
      } </style>

## 2. **Stili Locali**

Gli stili locali sono strettamente legati a un singolo componente. Puoi definire gli stili direttamente all'interno del componente senza alcuna dichiarazione aggiuntiva. Questi stili non influenzeranno altri componenti.

    <template>
      <div class="component">
        <p>Contenuto del componente</p>
      </div>
    </template>
    
    <script> export default {
      name: 'MyComponent',
    }; </script>
    
    <style> /* Stili locali al componente */
    .component {
      background-color: #ffffff;
      padding: 20px;
    } 
    </style>

## 3. **Stili Scoped**

Vue introduce la direttiva `scoped` per gli stili, garantendo che gli stili definiti all'interno di un componente siano applicati solo a quel componente. Questo evita che gli stili entrino in conflitto con altri componenti.

    <template>
      <div class="component">
        <p>Contenuto del componente</p>
      </div>
    </template>
    
    <script> export default {
      name: 'MyComponent',
    }; </script>
    
    <style scoped> /* Stili con la direttiva 'scoped' */
    .component {
      background-color: #ffffff;
      padding: 20px;
    } 
    </style> 

Con la direttiva `scoped`, Vue aggiunge automaticamente un identificatore unico ai selettori CSS, garantendo che gli stili si applichino solo a quel componente.

## 4. **Stili Globali con global.css**

Se desideri applicare stili globali mantenendoli in un file separato, puoi creare un file `global.css`. Successivamente, importa questo file nel tuo punto di ingresso principale, `main.js`, per renderlo globalmente accessibile.

### Passi:

1.  **Crea il File `global.css`**

2.  **Importa `global.css` in `main.js`**

> import { createApp } from 'vue'; 
> import App from'./App.vue'; 
> import './assets/global.css'
> 
> createApp(App).mount('#app');

Con questa configurazione, gli stili definiti in `global.css` saranno applicati globalmente a tutta l'applicazione Vue.

**NB:**
-   **Stili Locali**: Gli stili definiti senza `scoped` sono già locali al componente.
-   **Stili Scoped**: Usare `scoped` quando si vuole essere sicuri che gli stili siano limitati solo al componente corrente.
- **Stili Globali con `global.css`**: Puoi mantenere gli stili globali in un file separato (`global.css`) e importarli in `main.js` per applicarli a tutta l'applicazione.

Gli stili locali, senza l'utilizzo della direttiva `scoped`, sono dichiarati direttamente all'interno del componente e sono automaticamente locali a quel componente. Ciò significa che non influenzeranno altri componenti, a meno che non ci siano collisioni di nomi di classi.

La principale differenza tra `scoped` e stili locali risiede nel meccanismo di generazione dei selettori univoci. L'utilizzo di `scoped` è utile quando si desidera garantire che gli stili siano completamente isolati all'interno di un componente specifico, mentre gli stili locali offrono già un livello di isolamento, ma senza l'aggiunta dell'attributo unico.

Scegli la strategia che meglio si adatta alle esigenze del tuo progetto. 

**Inizia con stili locali e, se necessario, passa a stili scoped per garantire l'isolamento degli stili.**