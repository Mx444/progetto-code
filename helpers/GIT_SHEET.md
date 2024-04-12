![](https://i.ibb.co/mDcVL6Z/Git.png)
### Configurazione:
- `git config`: Impostare le configurazioni di Git come nome utente, email, alias, ecc.
- `git config --global user.name "Nome"`: Impostare il nome utente a livello globale.
- `git config --global user.email "email@example.com"`: Impostare l'email utente a livello globale.
- `git config --global core.editor "editor"`: Impostare l'editor predefinito per i messaggi di commit.
- `git config --global alias.<alias-name> "<git-command>"`: Creare alias per comandi Git frequentemente utilizzati.

### Inizializzazione e clonazione:
- `git init`: Inizializzare un nuovo repository Git nella directory corrente.
- `git clone <url>`: Clonare un repository Git esistente.

### Gestione dei cambiamenti:
- `git add <file>`: Aggiunge file al staging area.
- `git add .`: Aggiunge tutti i file modificati nella directory corrente allo staging area.
- `git add -p`: Aggiunge in modo interattivo solo alcune parti di un file allo staging area.
- `git commit -m "messaggio"`: Committa i cambiamenti nello staging area nel repository.
- `git commit --amend`: Modifica l'ultimo commit aggiungendo nuove modifiche o modificando il messaggio di commit.
- `git status`: Mostra lo stato dei file nel repository.
- `git diff`: Mostra le differenze tra il working directory e lo staging area.
- `git diff --cached`: Mostra le differenze tra lo staging area e l'ultimo commit.
- `git checkout -- <file>`: Annulla le modifiche non commesse a un file nel working directory.
- `git log -p <file>`: Mostra la history dei commit per un file specifico insieme alle modifiche apportate in ciascun commit.
- `git mv <file_originale> <file_destinazione>`: Sposta o rinomina un file e gestisce le modifiche in Git.
- `git rm <file>`: Rimuove un file dal repository Git e lo elimina dalla directory di lavoro.
- `git restore <file>`: Ripristina file dallo staging area o dal commit precedente.

### Branching e merging:
- `git branch`: Elencare, creare o eliminare branch.
- `git branch <nome_branch>`: Creare un nuovo branch con il nome specificato.
- `git branch -d <branch>`: Eliminare un branch locale.
- `git push origin --delete <branch>`: Eliminare un branch remoto.
- `git branch -m <old-branch> <new-branch>`: Rinominare un branch.
- `git checkout <branch>`: Passare tra branch o ripristinare file dalla history.
- `git checkout -b <new-branch>`: Creare un nuovo branch e passarci immediatamente.
- `git merge <branch>`: Unire i cambiamenti di un branch in un altro.
- `git merge --abort`: Annullare un merge in corso e ripristinare lo stato precedente.
- `git rebase <branch>`: Riapplicare i commit di un branch su un altro.

### Sincronizzazione con il repository remoto:
- `git fetch`: Recuperare i commit dal repository remoto senza integrarli.
- `git pull`: Estrarre e integrare i cambiamenti dal repository remoto nella branch corrente.
- `git push`: Caricare i commit locali sul repository remoto.
-  `git push -f`:Forza i commit locali sul repository remoto ignorando eventuali conflitti.
### Ricerca e visualizzazione della history:
- `git log`: Visualizzare la history dei commit.
- `git show <commit>`: Visualizzare i dettagli di un commit specifico.
- `git blame <file>`: Visualizzare l'ultimo commit che ha modificato ciascuna linea di un file.
- `git grep <testo>`: Cercare testo nei file del repository.

### Gestione dei conflitti:
- `git status`: Mostrare lo stato del repository, inclusi eventuali conflitti.
- `git merge <branch>`: Unire i cambiamenti di un branch in un altro e risolvere i conflitti.
- `git mergetool`: Utilizzare uno strumento grafico per risolvere i conflitti di merge.

### Altro:
- `git stash`: Nascondere le modifiche non commesse per utilizzarle in seguito.
- `git tag <nome>`: Etichettare un commit con un nome significativo.
- `git remote -v`: Mostrare i repository remoti configurati.
- `git fetch --all`: Recuperare tutti i riferimenti dal repository remoto.
