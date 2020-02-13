// 1. make a variable that hold the weights I want to have in the operation.
        // a. make a variable that holds an array
        // b. access the object.key to have the value print
// 2. make a function that uses those weights to determing a simple lottery 1 of 3 or 2 of 4 for example.
// 3. increase the odds of the function by altering the weighting of the weights.

// let weightsOne = 1
// let weightsTwo = 2
// console.log(weightsOne / weightsTwo)

// let weightThree = {winOdds : 1, loseOdds : 2}
// console.log(Object.keys(weightThree))
// console.log(Object.values(weightThree))

// ================================================================

// const weightedLottery = weights => {
//     let containerArray = [];
  
//     Object.keys(weights).forEach(key => {
//       for (let i = 0; i < weights[key]; i++) {
//         containerArray.push(key);
//       }
//     });
  
//     return containerArray[(Math.random() * containerArray.length) | 0];
//   };
  
//   const weights = {
//    winning: 1, 
//    losing: 1000
//   };
  
//   console.log(weightedLottery(weights));

// ========================================================

// keep track of the weights
// {'green', 'yellow'. 'yellow', 'red', 'red', 'red'} - scrabble and randomization from shaking the bag...

const weightedLottery = weights => {
    let containerArray = [];

    Object.keys(weights).forEach(key =>{
        for (let i = 0; 1 < weights[key]; i++) {
            containerArray.push(key);
        }
    })

    return containerArray[(Math.random() * containerArray.length) | 0];
}

const weights = {
        green: 1,
        yellow: 2,
        red: 3
};

console.log(weightedLottery(weights));