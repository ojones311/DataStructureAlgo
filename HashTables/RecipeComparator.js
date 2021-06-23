//Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) 
//and returns the maximum number of cakes Pete can bake (integer). 

//recipe object and available ing obj
//make a function that compares ingredients and evaluates how many cakes
//I can make with the available ing
//[2,6,5] Pick the lowest number in the arr

function cakes(recipe, available) {
    let arr = []
    for (const ingredient in recipe){
      if(!available[ingredient]){
        return 0
      }else if(available[ingredient]){
        arr.push(Math.floor(available[ingredient] / recipe[ingredient]))
      }
    }
    let sortedArr = arr.sort((a, b) => a - b )
    
    return sortedArr[0]
  }

  console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))
  //return 2
  console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))
  //return 0
  console.log(cakes({sugar: 150, milk: 100, oil: 100}, {sugar: 1500, milk: 1000, oil: 900}))
  //return 9