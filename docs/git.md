# Spiegazione Git
Argomento: Git  
Corso: Progetto CODE 2   
Data: 10/04/2024  
Francesco Serauto  

## 1.Git 
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

## 2.Configura il tuo nome utente e indirizzo email

   ``` 
   git config --global user.name "Your Name"
   git config --global user.email "your.email@example.com"
   ```

## 3.Comandi Git

``` bash
git init - (Inizializza un repository locale)
git remote add origin link - (Collega il repository locale al repository remoto)
git status - (Stato del repository locale)
git add "file" - (Aggiungere modifiche)
git commit -m "commit" - (Salvare le modifiche)
git branch -m branch - (Rinominare rami)
git push -u origin (branch) - (Caricare file)

<<<<<<< HEAD

git log (Log modifiche)
git reset hash (Reset versione file)
git checkout nome_file /nome_del_branch - (Scartare modifica o cambiare branch)
=======
git pull origin (Scaricare info)
git clone link (Clonare repository)
>>>>>>> a0855e27c0969473589d16af275599fd7414a2e5
git rm - (Rimuovere file dal repository)
git clone URL - (Clonare)

 ```

## 3.Comandi Terminale

``` bash
cd: Cambia directory
cd ..: Sposta la directory corrente al livello superiore.
cd ~: Sposta la directory corrente nella tua home directory.

ls: Elenco il contenuto della directory corrente.
ls -l: Elenco dettagliato del contenuto della directory con informazioni
ls -a: Elenco di tutti i file, inclusi quelli nascosti.

```

