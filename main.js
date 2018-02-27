// Write your JavaScript here


function clickToCalculate() {
    var amountDue = document.getElementById('amount-due').value
    var amountReceived = document.getElementById('amount-received').value
    var cashBack = parseFloat(amountReceived) - parseFloat(amountDue)
    var dollars = Math.floor(cashBack);
        cashBack = cashBack%1;
    var quarters = Math.floor(cashBack/0.25);
        cashBack = cashBack%0.25;
    var dimes = Math.floor(cashBack/0.1);
        cashBack = cashBack%0.1;
    var nickles = Math.floor(cashBack/0.05);
        cashBack = (cashBack%0.05);
    var pennies = Math.ceil(Math.round(cashBack/0.01));
    console.log({cashBack, pennies, nickles})

    document.getElementById('dollars-output').innerHTML = dollars;
    document.getElementById('quarters-output').innerHTML = quarters;
    document.getElementById('dimes-output').innerHTML = dimes;
    document.getElementById('nickels-output').innerHTML = nickles;
    document.getElementById('pennies-output').innerHTML = pennies;
}


// var dollars = Math.floor(cashBack);
// cashBack = cashBack%1;
// var quarters = Math.floor(cashBack/0.25);
// cashBack = cashBack%0.25;
// var dimes = Math.floor(cashBack/0.1);
// cashBack = cashBack%0.1;
// var nickles = Math.floor(cashBack/0.05);
// cashBack = (cashBack%0.05);
// var pennies = Math.ceil(cashBack/0.01);
// cashBack = (cashBack%0.01);

// //Astro Code NOT PART OF CHANGE CALCULATOR
// var planets = [
//     ['Pluto', 0.06],
//     ['Neptune', 1.148],
//     ['Uranus', 0.917],
//     ['Saturn', 1.139],
//     ['Jupiter', 2.640],
//     ['Mars', 0.3895],
//     ['Moon', 0.1655],
//     ['Earth', 1],
//     ['Venus', 0.9032],
//     ['Mercury', 0.377],
//     ['Sun', 27.9]
//   ];planets.reverse();

// planets.forEach(function(planet) {
//     var option = document.createElement("option");
//     var planetText = document.createTextNode(planet[0]);
//     option.appendChild(planetText);
//     document.getElementById('planets').appendChild(option);
// })

// function calculateWeight(weight, planetName) {
//     var myPlanet = planets.find(function(planetA){
//       return planetA[0] == planetName
//     })
//     var gravity = myPlanet[1];
//   return weight * gravity;
// }

//   function handleClickEvent() {
//       var weight = document.getElementById('user-weight').value;
//       var planetName = document.getElementById('planets').value;
//       var results = calculateWeight(weight, planetName);
//       document.getElementById('output').innerHTML = "If you were on " + planetName + ", you would weigh " + results + "lbs!"
//   }