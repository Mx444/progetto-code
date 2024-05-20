"use strict";

const btnAddStudents = document.getElementById("btnAddStudents");
const textInputStudents = document.getElementById("textInputStudents");
const listStudents = document.getElementById("listStudents");
const codeStudents = [];

function addStudent(name) {
  if (validateName(name)) {
    codeStudents.push(name);
    const newList = document.createElement("li");
    newList.textContent = name;
    listStudents.appendChild(newList);

    newList.addEventListener("click", function () {
      removeStudent(name, newList);
    });
  } else {
    window.alert(
      "Il nome non è valido. Assicurati che sia composto solo da lettere e che sia compreso tra 2 e 20 caratteri. Inoltre, controlla che non ci siano nomi duplicati."
    );
  }
}

function removeStudent(name, listItem) {
  listStudents.removeChild(listItem);
  const index = codeStudents.indexOf(name);
  if (index !== -1) {
    codeStudents.splice(index, 1);
    groupedStudentsList.innerHTML = "";
  }
}

function addStudentNames() {
  const newStudent = textInputStudents.value.trim();
  addStudent(newStudent);
  textInputStudents.value = "";
}

const btnResetStudents = document.getElementById("btnResetStudents");

function resetStudentList() {
  listStudents.innerHTML = "";
  codeStudents.length = 0;
  groupedStudentsList.innerHTML = "";
}

btnResetStudents.addEventListener("click", resetStudentList);

function validateName(name) {
  return (
    name.trim() !== "" &&
    name.length >= 2 &&
    name.length <= 20 &&
    !/\d/.test(name) &&
    !codeStudents.includes(name)
  );
}

function nameCheck() {
  const name = textInputStudents.value.trim();
  const userIcon = document.getElementById("userIcon");
  if (validateName(name)) {
    btnAddStudents.disabled = false;
    userIcon.className = "fa fa-user";
    textInputStudents.style.borderColor = "lightgreen";
  } else {
    window.alert(
      "Il nome non è valido. Assicurati che sia composto solo da lettere e che sia compreso tra 2 e 20 caratteri. Inoltre, controlla che non ci siano nomi duplicati."
    );
    btnAddStudents.disabled = true;
    userIcon.className = "fa fa-user-times";
    textInputStudents.style.borderColor = "lightcoral";
  }
}

textInputStudents.addEventListener("blur", nameCheck);
btnAddStudents.addEventListener("click", addStudentNames);

const groupedStudentsList = document.getElementById("groupedStudents");
const groupSizeSelect = document.getElementById("groupSize");
const btnGenerateGroups = document.getElementById("btnGenerateGroups");

function generateGroups() {
  if (codeStudents.length >= groupSizeSelect.value) {
    const groupSize = Number(groupSizeSelect.value);
    const students = codeStudents.slice().sort(function () {
      return Math.random() - 0.5;
    });
    const numGroups = Math.ceil(students.length / groupSize);
    groupedStudentsList.innerHTML = "";

    for (let i = 0; i < numGroups; i++) {
      const group = students.slice(i * groupSize, (i + 1) * groupSize);
      const groupItem = document.createElement("li");
      groupItem.textContent = "Gruppo " + (i + 1) + ": " + group.join(", ");
      groupItem.classList.add("group-item");
      groupedStudentsList.appendChild(groupItem);
    }
  } else {
    window.alert(
      "Devi avere almeno " +
        groupSizeSelect.value +
        " studenti nella lista per generare i gruppi."
    );
  }
}

btnGenerateGroups.addEventListener("click", generateGroups);

function exportStudentList() {
  if (codeStudents.length === 0) {
    window.alert("Non ci sono studenti nella lista da esportare.");
    return;
  }

  let csvContent = "data:text/csv;charset=utf-8," + codeStudents.join("\n");
  let encodedUri = encodeURI(csvContent);
  let link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "lista_studenti.csv");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const btnExportStudents = document.getElementById("btnExportStudents");
btnExportStudents.addEventListener("click", exportStudentList);

function importStudentList(event) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const content = e.target.result;
    const lines = content.split("\n");

    lines.forEach((line) => {
      const student = line.trim();
      addStudent(student);
    });
  };
  reader.readAsText(file);
}

const fileInput = document.getElementById("fileInput");
fileInput.addEventListener("change", importStudentList);

const btnImportStudents = document.getElementById("btnImportStudents");
btnImportStudents.addEventListener("click", function () {
  fileInput.click();
});
