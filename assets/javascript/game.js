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
    $(".score-box").append(userScore)

    // Logic to check if userScore is = to taretNumber
    // Else if userScore is greater than targetNunber game over
    if(userScore === targetNumber) {
        alert("You Win");
        
    } else if (userScore > targetNumber) {
        alert("You Lose!")
    }

});
$(".random-number-box").append(targetNumber)



