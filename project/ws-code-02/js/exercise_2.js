//variabile
const paragrafro = document.getElementById("pDaModificare");
//Bottone Nascondi
function bottoneNascondi() {
  paragrafro.style.visibility = "hidden";
}
//Bottone Mostra
function bottoneMostra() {
  paragrafro.style.visibility = "visible";
}
//Event Mouseover colore e size font
paragrafro.addEventListener("mouseover", function () {
  paragrafro.style.color = "orange";
  paragrafro.style.fontSize = "50px";
});
//Funzione Cambia Sfondo
function cambiaSfondo() {
  const menuTendina = document.getElementById("colori").value;
  const bg = document.querySelector(".excon0");
  bg.style.backgroundColor = menuTendina;
}

document.getElementById("colori").addEventListener("change", cambiaSfondo);
