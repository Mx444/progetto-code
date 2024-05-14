"use strict";

class HangMan {
  constructor(keywordToDiscover) {
    this.keyword = keywordToDiscover;
    this.attemps = 6;
    this.lettersSaved = [];
  }

  // checkWord(param) {
  //   if (this.keyword.includes(param)) {
  //     this.lettersSaved.push(param);
  //     console.log(`Lettera: ${param} corretta`);
  //   } else {
  //     this.attemps--;
  //     console.log(`Lettera: ${param} sbagliata, Tentativi: ${this.attemps} `);
  //   }
  // }
  //!Da Fixare array =
  checkWord(param) {
    const arraySplit = this.keyword.split("");
    let newArray = [...arraySplit];
    if (newArray.includes(param) && !this.lettersSaved.includes(param)) {
      this.lettersSaved.push(param);
      const newSplit = newArray.splice(newArray.indexOf(param), 1);
      this.newArray = newSplit;
      console.log(`Lettera: ${param} corretta`);
      console.log(newArray);
    } else if (this.attemps === 0) {
      console.log("GameOver!");
    } else {
      this.attemps--;
      console.log(`Lettera: ${param} sbagliata, Tentativi: ${this.attemps} `);
    }
  }
}

const parola = new HangMan("Ciao");
parola.checkWord("C");
parola.checkWord("a");
parola.checkWord("Z");
parola.checkWord("p");
parola.checkWord("C");

console.log(parola.lettersSaved);
