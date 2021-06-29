//problem1
/*
const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 10);

console.log(found);
// expected output: 12
*/

//problem2 method1
//Find an object in an array by one of its properties
/*
const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  function fruits(fruit){
      return fruit.name === "bananas";
      }
      console.log(inventory.find(fruits));
*/
   
//problem3 method2
//Using arrow function and destructuring
   const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
  ];
  const result = inventory.find( ({name}) => name === "cherries");  
  console.log(result);