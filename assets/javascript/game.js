var randomResults;
var win;
var lose;
var targetNumber;
var crystal1
var crystal2
var crystal3
var crystal4

function generateRandomNumbers() {
    targetNumber = Math.floor(Math.random()*120)+1
    crystal1 = Math.floor(Math.random()*12)+1
    crystal2 = Math.floor(Math.random()*12)+1
    crystal3 = Math.floor(Math.random()*12)+1
    crystal4 = Math.floor(Math.random()*12)+1
}
generateRandomNumbers();
console.log(targetNumber)


// for(var i = 0; i < 4; i++){
    
//     var crystal = $("<div>");
//     crystal.attr("class", "crystals");
    
//     $(".crystals").append(crystal);
// }

//create a random number generator for all four crystals between 1 - 12
//regenerate new random numbers every time you win or lose
//anytime you click on a crystal it should add to toal number
// create random numbers that the crystals must add up to tubetween 19-12
//create a way to keep track of wins and loses
//if number of crysals adds up to a number greater than the number chosen then track loss and restart
//if number adds up equal to number given than track win


