# Vue CLI

Questa cartella fornisce una guida rapida all'utilizzo di Vue CLI per lo sviluppo di applicazioni Vue.js. 

Vue CLI è uno strumento di linea di comando che semplifica la creazione e la gestione di progetti Vue.

## Cos'è Vue CLI?

**Vue CLI** (**C**ommand **L**ine **I**nterface) è uno strumento di sviluppo ufficiale di Vue.js che semplifica la creazione e la gestione di progetti Vue.js. 

Fornisce uno scaffolding rapido, un ambiente di sviluppo integrato e uno strumento di build per creare applicazioni Vue in modo efficiente.

## Differenze tra CDN e Vue CLI

### Uso tramite CDN

-   **Velocità di sviluppo**: È veloce per iniziare e sperimentare con Vue.js.
-   **Configurazione minima**: Non richiede installazioni o configurazioni complesse.

### Uso tramite Vue CLI

-   **Struttura di Progetto Organizzata**: Genera una struttura di progetto organizzata e facilmente gestibile.
-   **Sviluppo Ottimizzato**: Fornisce un ambiente di sviluppo ottimizzato con funzionalità come il live-reloading.
-   **Gestione delle Dipendenze Semplificata**: Facilita l'installazione e la gestione delle dipendenze del progetto.
-   **Build Ottimizzato per la Produzione**: Semplifica la generazione di build ottimizzate per la produzione.
-   **Plugin e Preset**: Consente l'uso di plugin e preset preconfigurati per funzionalità aggiuntive.

## Prerequisiti

Prima di iniziare, assicurati di avere Node.js installato sul tuo sistema. Puoi scaricarlo da [nodejs.org](https://nodejs.org/).

## Installazione di Vue CLI

    # Installa Vue CLI globalmente

    npm install -g @vue/cli

## Creazione di un Nuovo Progetto Vue

    # Crea un nuovo progetto Vue

    vue create nome-progetto

## Avviare l'Applicazione in Modalità Sviluppo

    # Naviga nella cartella del progetto

    cd nome-progetto

    # Avvia l'applicazione in modalità sviluppo

    npm run serve 

Ora puoi visualizzare la tua applicazione Vue all'indirizzo http://localhost:8080.

## Vantaggi dell'Utilizzo di Vue CLI

-   **Scaffolding Automatico**: Genera automaticamente la struttura del progetto.
-   **Gestione Delle Dipendenze Semplificata**: Facilita l'installazione e l'aggiornamento delle dipendenze.
-   **Configurazione Ottimizzata per la Produzione**: Pronto per la distribuzione con una build ottimizzata.
-   **Plugin Personalizzabili**: Puoi estendere il funzionamento base con plugin e preset.


## NB: Per il nostro primo progetto
Selezioniamo manualmente la versione di Vue (scegliamo ovviamente la 3, deselezionando per il momento "Linter" - per deselezionare premere barra spaziatrice) e inseriamo le config per Babel, ESLint, etc.. in un file dedicato.
