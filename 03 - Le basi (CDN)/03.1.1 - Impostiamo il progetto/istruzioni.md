
# Come usare Vue tramite CDN

Ma prima: cosa è una CDN? 
  
Una CDN, o Content Delivery Network, è una rete di server distribuiti strategicamente in diverse posizioni geografiche per fornire contenuti web, come immagini, file CSS, JavaScript e altri elementi multimediali, in modo più efficiente e veloce agli utenti finali.
  
Puoi utilizzare Vue direttamente da una CDN tramite un tag script:

`<script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>` 

> Qui stiamo usando unpkg, ma puoi utilizzare anche qualsiasi CDN che
> fornisce pacchetti npm, ad esempio jsdelivr o cdnjs. Naturalmente,
> puoi anche scaricare questo file e servirlo autonomamente.

Quando si utilizza Vue da una CDN, non è coinvolto alcun "passo di build". 

Ciò semplifica notevolmente la configurazione ed è adatto per migliorare l'HTML statico o integrarsi con un framework di backend.


Link alla documentazione ufficiale: https://vuejs.org/guide/quick-start.html