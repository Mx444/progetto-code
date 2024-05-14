"use strict";
const keyword = "testardi";
let numOfAttemps = 5;
const charactersDiscovered = [];
const key = [];
const randomKey = key(Math.random() * key);

function test(character) {
  if (numOfAttemps === 0) {
    console.log("Hai Perso!");
  }
  if (discoveredWord.join("") === keyword) {
    return "Hai Vinto!";
  }
  if (charactersDiscovered.includes(character))
    return "Hai gia inserito questa lettera";
  if (keyword.includes(character)) {
    charactersDiscovered.push(character);
  } else {
    numOfAttemps--;
  }

  const keywordArray = keyword.split("");
  const discoveredWord = keywordArray.map(function (ch) {
    if (charactersDiscovered.includes(ch)) {
      return ch;
    } else {
      return "*";
    }
  });
  return discoveredWord.join("");
}
