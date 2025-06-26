// 2.2.1 Calculs rapides
/* ruby :
def factorielle(n)
    if n < 0
      return "La factorielle n'existe pas pour les nombres négatifs"
    elsif n == 0 || n == 1
      return 1
    else
    n * factorielle(n - 1)
    end
end
puts factorielle(number)
*/

function factorielle(n) {
  if (n < 0)
    return "La factorielle n'existe pas pour les nombres négatifs";
  else if (n == 0 || n == 1) {
    return 1;
  }
  else {
    return n * factorielle(n - 1);
  }
}

let number = prompt("De quel nombre veux-tu calculer la factorielle ?");
number = parseInt(number);
let resultat = factorielle(number);
console.log(`La factorielle de ${number} est : ${resultat}`);
