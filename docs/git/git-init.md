
# Inizializzare una repository 
Argomento: git-init   
Corso: Progetto CODE 2   
Data: 10/04/2024  
Francesco Serauto  

# 1.Inizializzare una repository 

**Cartella da inizializzare**
``` bash
cd /percorso/cartella
   ```
   **inizializzare una nuova repository Git all'interno di una directory esistente**
   ``` bash
git init
   ```

## 2.Configura il tuo nome utente e indirizzo email

**Impostare user-email**
   ``` bash
   git config --global user.name "Nome GitHub"
   git config --global user.email "Email GitHub"
   ```
## 3.Repository remoto

**Collegare il repository remoto**

 ``` bash
git remote add origin URL_del_repository_remoto
   ```  

## 4.File al repository  

**Aggiungere file al repository**  

**File singolo**  
 ```   
git add "file"  
   ```  

**Tutti i file modificati**  

``` bash  
git add .  
git add * 
   ```  

## 5.Commit
**Eseguire il primo commit**

 ``` bash
git commit -m "first commit"


   ```
   *-m = message*  

   **Sostituisci "first commit" con un messaggio significativo che descriva le modifiche apportate.**  
  
## 6.Push
**Pushare il file da locale a remoto**

 ``` bash
git push -u origin master

   ```
   *-u = upstream*  
   *origin = repository remoto*  
   *master = collegamento al branch master*  