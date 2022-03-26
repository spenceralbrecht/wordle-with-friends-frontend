var title = document.querySelector("body > game-app").shadowRoot.querySelector("game-theme-manager > header > div.title");
title.textContent = "wordle sux";
var firstLetter = document.querySelector("body > game-app").shadowRoot.querySelector("#board > game-row:nth-child(1)").shadowRoot.querySelector("div > game-tile:nth-child(2)");
console.log(firstLetter.getAttribute("letter"));