E' un esercizio che si svolgerà su tre giorni, il termine ultimo è mercoledì alle 18:00.
Mi raccomando seguite le milestone, non andate alla successiva se non avete finito quella in cui siete (se siete alla 1 e non l'avete terminata non andate alla 2 e così via).
Numero di push minimo: 12

1-Progettare la struttura del global state
1.1-Definire un file store.js per l'immagazzinamento delle informazioni ricavate dalla chiamata dell'api

2-Creare un layout base per la componente header con una searchbar

3-Creare un layout per il la parte di body della pagina
3.1-Creare un layoutper la visualizzazioni delle card chiamate dall'api (dovranno contenere queste informazioni: Titolo/TitoloOriginale/Lingua/Voto )
3.2-Trasformare la stringa della lingua nella bandiera corrispondente alla lingua parlata
3.3-Fare in modo che quando si cerca un elemento(film), venga fatta una chiamata anche all'API delle serie televisive
3.3.1-Creare un layout per la visualizzazione delle card delle serie televisive che dovranno contenere piu o meno le stesse informazioni di quelle dei film
4-Aggiungere le copertine dei film/serie al nostro elenco
5-Trasformiamo il voto dell'elemento (che è il scala che va da 1 a 10) in scala 1 a 5
5.1- facciamo in modo che vengano stampate delle stelle colorate tante quante il voto dell'elemento e lasciamo nere le icone delle stelle rimanenti (facciamo in modo di arrotondare i valori, in modo tale da evitare di dover gestire frazioni di figure)
6-Seguendo i mockup che ci sono stati forniti, trasformiamo tutto in una webapp
6.1-L'header deve contenere il logo e una search bar
6.2-Definiamo lo stile delle card che vengono messe a display
6.2.1-Facciamo in modo che con l'hover sulla card, appaiano le informazioni aggiuntive

Consigli:

1. Andateinfila,seguendolemilestone,nonpensateall’interfacciagraficafino al punto 4
2. Nonpensateall’interfacciagraficafinoalpunto4(si,l’hoscrittoduevolte), tutto può essere risolto con una <ul> non stilizzata
3. Ricordateviquantoimparatofinoraconlediverseesercitazioni:
   ○ Affrontate sempre prima il caso base minimo, senza complicazioni (ad es. “Se il titolo originale è uguale al titolo, magari dovrei nasconderlo”,
   “Se faccio una ricerca che non ha nessun risultato dovrei scrivere qualcosa” sono domande da NON FARSI fino a quando non si è fatto completamente un caso base)

○ Se ti viene volta di copiare/incollare codice, NON FARLO, fai una funzione! Quei pochi minuti risparmiati renderanno il tuo codice meno leggibile ed ogni volta che dovrai intervenire su quella parte perderai molto più tempo
○ Prima di andare avanti, assicurati di aver risolto quella parte nel miglior modo possibile (codice non ripetuto, minimo codice possibile, funzioni chiare e riutilizzabili). Risparmierai tantissimo tempo risolvendo gli esercizi successivi
○ Meglio risolvere una milestone in meno, ma con codice scritto bene 4. Peraverelalistadellelingueutilizzare:
https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

BONUS
BONUS 1 (Opzionale):
Partendo da un film o da una serie, richiedere all'API quali sono gli attori che fanno parte del cast aggiungendo alla nostra scheda Film / Serie SOLO i primi 5 restituiti dall’API con Nome e Cognome, e i generi associati al film con questo schema: “Genere 1, Genere 2, ...”.
BONUS 2 (Opzionale):
Creare una lista di generi richiedendo quelli disponibili all'API e creare dei filtri con i generi tv e movie per mostrare/nascondere le schede ottenute con la ricerca.
