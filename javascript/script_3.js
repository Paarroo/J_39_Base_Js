



function pyramide() {
  console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

  while (true) {
      let etages = parseInt(prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?"));
      if (isNaN(etages) || etages <= 0) {
          console.log("Petit beunet, saisi un nombre entier positif.");
      continue;
      } else {
          for (let i = 1; i <= etages; i++) {
              console.log(" ".repeat(etages - i) + "#".repeat(i));
          }
          break;
      }
  }
}
pyramide();
