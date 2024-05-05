"use strict";

// Otteniamo i riferimenti agli elementi del DOM
const btnAddStudents = document.getElementById("btnAddStudents"); // Pulsante "Aggiungi"
const textInputStudents = document.getElementById("textInputStudents"); // Input per i nomi degli studenti
const listStudents = document.getElementById("listStudents"); // Lista degli studenti
const codeStudents = []; // Array per memorizzare i nomi degli studenti aggiunti

// Funzione per aggiungere il nome dello studente alla lista
function addStudentNames() {
  const newStudent = textInputStudents.value.trim(); // Otteniamo il nome dello studente senza spazi iniziali e finali
  const newList = document.createElement("li"); // Creiamo un nuovo elemento di lista
  newList.textContent = newStudent; // Assegniamo il nome dello studente all'elemento di lista
  listStudents.appendChild(newList); // Aggiungiamo l'elemento di lista alla lista
  codeStudents.push(newStudent); // Aggiungiamo il nome dello studente all'array
  textInputStudents.value = ""; // Reset del valore dell'input

  // Aggiunge un evento di click all'elemento newList
  newList.addEventListener("click", function () {
    // Rimuove l'elemento newList dalla lista degli studenti nel documento HTML
    listStudents.removeChild(newList);
    // Cerca l'indice dell'elemento newStudent nell'array codeStudents
    const index = codeStudents.indexOf(newStudent);
    // Verifica se l'elemento newStudent è presente nell'array codeStudents
    if (index !== -1) {
      // Se l'elemento newStudent è presente, lo rimuove dall'array codeStudents
      codeStudents.splice(index, 1);
      // Svuota il contenuto dell'elemento groupedStudentsList nel documento HTML
      groupedStudentsList.innerHTML = "";
    }
  });
}

// Otteniamo il riferimento all'icona dell'utente
const userIcon = document.getElementById("userIcon");
// Funzione per validare il nome inserito
function validateName(name) {
  return (
    name.trim() !== "" && // Il nome non deve essere vuoto
    name.length >= 2 && // Lunghezza minima del nome
    name.length <= 20 && // Lunghezza massima del nome
    !/\d/.test(name) // Il nome non deve contenere cifre
  );
}

// Funzione per controllare il nome inserito e abilitare/disabilitare il pulsante "Aggiungi" di conseguenza
function nameCheck() {
  const name = textInputStudents.value.trim(); // Otteniamo il nome inserito senza spazi iniziali e finali
  if (validateName(name) && !codeStudents.includes(name)) {
    // Se il nome è valido e non è già presente nella lista
    btnAddStudents.disabled = false; // Abilitiamo il pulsante "Aggiungi"
    userIcon.className = "fa fa-user"; // Cambiamo l'icona dell'utente
    textInputStudents.style.borderColor = "lightgreen"; // Cambiamo il colore del bordo dell'input a verde
  } else {
    // Altrimenti
    window.alert(
      "Il nome non è valido. Assicurati che sia composto solo da lettere e che sia compreso tra 2 e 20 caratteri. Inoltre, controlla che non ci siano nomi duplicati."
    ); // Mostriamo un messaggio di avviso
    btnAddStudents.disabled = true; // Disabilitiamo il pulsante "Aggiungi"
    userIcon.className = "fa fa-user-times"; // Cambiamo l'icona dell'utente
    textInputStudents.style.borderColor = "lightcoral"; // Cambiamo il colore del bordo dell'input a rosso
  }
}

// Aggiungiamo un ascoltatore per l'evento "blur" sull'input del nome
textInputStudents.addEventListener("blur", nameCheck);

// Aggiungiamo un ascoltatore per l'evento "click" sul pulsante "Aggiungi"
btnAddStudents.addEventListener("click", addStudentNames);

// Ottieni il riferimento alla lista HTML degli studenti raggruppati
const groupedStudentsList = document.getElementById("groupedStudents");
// Ottieni il riferimento alla select HTML per la dimensione del gruppo
const groupSizeSelect = document.getElementById("groupSize");
// Ottieni il riferimento al pulsante HTML per generare i gruppi
const btnGenerateGroups = document.getElementById("btnGenerateGroups");
// Funzione per verificare se ci sono abbastanza studenti nella lista
function studentsCheck() {
  // Controlla se il numero di studenti nella lista è maggiore o uguale alla dimensione del gruppo selezionata
  return listStudents.children.length >= groupSizeSelect.value;
}
// Funzione per generare i gruppi di studenti
function generateGroups() {
  // Verifica se ci sono abbastanza studenti nella lista per formare gruppi
  if (studentsCheck()) {
    // Ottieni la dimensione del gruppo selezionata dall'utente e convertila in un numero intero
    const groupSize = parseInt(groupSizeSelect.value);
    // Copia e mescola l'array degli studenti per evitare di modificarlo direttamente
    const students = codeStudents.slice().sort(() => Math.random() - 0.5);
    // Calcola il numero totale di gruppi necessari in base alla dimensione del gruppo e al numero di studenti
    const numGroups = Math.ceil(students.length / groupSize);
    // Pulisci la lista HTML dei gruppi prima di generarne di nuovi
    groupedStudentsList.innerHTML = "";

    // Ciclo per generare e visualizzare ogni singolo gruppo
    for (let i = 0; i < numGroups; i++) {
      // Estrai un sottoinsieme di studenti per il gruppo corrente
      const group = students.slice(i * groupSize, (i + 1) * groupSize);
      // Crea un nuovo elemento di lista HTML per rappresentare il gruppo
      const groupItem = document.createElement("li");
      // Assegna il testo che indica il numero del gruppo e i suoi membri
      groupItem.textContent = "Gruppo " + (i + 1) + ": " + group.join(", ");
      // Aggiungi l'elemento di lista HTML alla lista dei gruppi
      groupedStudentsList.appendChild(groupItem);
    }
  } else {
    // Se ci sono meno studenti nella lista rispetto alla dimensione del gruppo, mostra un avviso
    window.alert(
      "Devi avere almeno " +
        groupSizeSelect.value +
        " studenti nella lista per generare i gruppi."
    );
  }
}

// Aggiungi un event listener al pulsante per generare i gruppi, che richiama la funzione generateGroups
btnGenerateGroups.addEventListener("click", generateGroups);
