# Git comandi 
Argomento: Git comandi
Corso: Progetto CODE 2   
Data: 11/04/2024  
Francesco Serauto  


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
