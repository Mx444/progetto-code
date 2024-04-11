# Spiegazione Git
Argomento: Git  
Corso: Progetto CODE 2   
Data: 10/04/2024  
Francesco Serauto  

# Git 
**Git** è un sistema di controllo delle versioni distribuito, progettato per gestire progetti di qualsiasi dimensione con velocità ed efficienza. Ecco come funziona

1. **Repository**: In Git, un repository è una raccolta di file che costituiscono il progetto. Questo include il codice sorgente, la documentazione, i file di configurazione e altro ancora. Un repository Git può essere ospitato localmente sul tuo computer o su un server remoto.

2. **Commit**: Quando apporti una modifica ai file nel repository, devi effettuare un "commit" per registrare le modifiche nel sistema di controllo delle versioni. Un commit rappresenta uno snapshot dei file nel momento in cui è stato eseguito, e ogni commit ha un messaggio di commit associato che spiega le modifiche apportate.

3. **Branch**: Un branch in Git è un ramo separato della storia del repository. Puoi creare nuovi branch per sviluppare nuove funzionalità o correggere bug senza influenzare il codice sul branch principale (solitamente chiamato "master" o "main"). Una volta completate le modifiche su un branch, puoi unire (merge) il branch principale per incorporare le modifiche.

4. **Merge**: Il merge è il processo di combinazione delle modifiche da un branch in un altro. Quando hai finito di lavorare su un branch e vuoi incorporare le modifiche nel branch principale, puoi eseguire il merge per unire le modifiche.

5. **Pull**: Per ottenere le modifiche da un repository remoto sul tuo computer locale, puoi eseguire un "pull". Questo scarica le modifiche dal repository remoto e le aggiorna nel tuo repository locale.

6. **Push**: Dopo aver apportato modifiche al tuo repository locale, puoi inviare (push) le modifiche al repository remoto. Questo consente agli altri membri del team di accedere alle tue modifiche e collaborare con te.

7. **Staging Area**: Git utilizza una "staging area" per preparare le modifiche prima di eseguire il commit. Questo ti consente di selezionare quali modifiche includere nel prossimo commit, consentendo una maggiore precisione e controllo sulle modifiche registrate.

8. **Rami remoti**: Oltre ai branch locali, Git consente di tenere traccia dei branch remoti, che sono versioni dei branch ospitati su un repository remoto. Puoi sincronizzare i branch locali con i branch remoti per condividere il lavoro con altri membri del team.

Questi sono solo alcuni concetti fondamentali di Git. È un sistema molto potente e flessibile che offre molte altre funzionalità per gestire progetti software in modo efficiente.

# Markdown
Markdown è un linguaggio di formattazione leggero e facile da usare per la scrittura di testo semplice con formattazione basilare. È comunemente utilizzato per formattare documenti, note, pagine web, README nei repository GitHub e molto altro ancora. Ecco una sintesi delle principali funzionalità di Markdown e della sua formattazione:
 
## 1.Status
**tenere traccia delle modifiche nel tuo repository e per capire quali passaggi devi eseguire successivamente**
 ``` bash
git status
   ```

## 2.Branch
**viene utilizzato per rinominare un ramo locale esistente.**
 ``` bash
git branch -m nome_vecchio_ramo nome_nuovo_ramo
   ```
 ## 3.Checkout branch
**viene utilizzato principalmente per spostarsi tra i rami esistenti nel repository**
 ``` bash
git checkout branch
   ```
   ## 5.Log
**visualizzare la cronologia dei commit nel repository**
 ``` bash
git log
   ```

   ## 6.Reset
**Può essere utilizzato per "riportare indietro" le modifiche del repository a uno stato precedente**
 ``` bash
git reset hash_commit
   ```

## 7.Checkout file
**viene utilizzato per ripristinare un file specifico nella tua directory di lavoro alla sua ultima versione commitata nel repository**
 ``` bash
git checkout file
   ```
 ## 8.Rimuovere
**viene utilizzato per rimuovere file dalla tua area di lavoro e dal repository**
 ``` bash
git rm nome_file
   ```

## 9.Clona
**viene utilizzato per creare una copia locale di un repository Git esistente**
 ``` bash
git clone URL_del_repository
   ```

 ## 10.Pull
** viene utilizzato per recuperare i commit dal repository remoto e unire (merge) automaticamente qualsiasi cambiamento nel branch locale corrente**
 ``` bash
git pull repository_remoto ramo_remoto
   ```
 ## 11.Merge
** viene utilizzato per unire i cambiamenti da un'altra branch nel branch corrente del repository**
 ``` bash
git merge branch_da_unire
   ```