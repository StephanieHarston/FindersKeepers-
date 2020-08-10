
// Je veux looper through un arr et faire passer chaque élément de cet arr dans une fonction. Dès que l'un des num vérifie la fonction ou que le résultat = true => return num else return undefined. 
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num = arr[i];
    if (func(num) == true) {
      return num; 
    }
} return undefined 
}

findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
