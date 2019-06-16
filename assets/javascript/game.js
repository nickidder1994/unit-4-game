var randomResults;
var win;
var lose;
var targetNumber;
var userScore = 0;
var crystal1
var crystal2
var crystal3
var crystal4

function generateRandomNumbers() {
    targetNumber = Math.floor(Math.random() * 120) + 1
    crystal1 = Math.floor(Math.random() * 12) + 1 
    crystal2 = Math.floor(Math.random() * 12) + 1
    crystal3 = Math.floor(Math.random() * 12) + 1
    crystal4 = Math.floor(Math.random() * 12) + 1
}
generateRandomNumbers();
console.log(targetNumber)

function addCrystalValues() {
$(".crystals1").attr("data-crystalValue", crystal1)
$(".crystals2").attr("data-crystalValue", crystal2)
$(".crystals3").attr("data-crystalValue", crystal3)
$(".crystals4").attr("data-crystalValue", crystal4)
}
addCrystalValues();

$(".crystal").on("click", function (event){
    // console.log(event)
    var clickedCrystal = event.currentTarget.attributes[1].value
    userScore += parseInt(clickedCrystal)
    console.log(clickedCrystal)
    console.log(userScore)

    // Logic to check if userScore is = to taretNumber
    // Else if userScore is greater than targetNunber game over
    if(userScore === targetNumber) {
        console.log("You Win")
    } else if (userScore > targetNumber) {
        console.log("You lose")
    }

});
$(".random-number-box").append(targetNumber)
$("value-box").append(crystal1)



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


