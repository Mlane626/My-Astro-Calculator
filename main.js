const planets = [
    ['Pluto',  0.06 ], 
    ['Neptune', 1.148], 
    ['Uranus', 0.917], 
    ['Saturn', 1.139], 
    ['Jupiter', 2.640], 
    ['Mars', 0.3895], 
    ['Moon', 0.1655], 
    ['Earth', 1], 
    ['Venus', 0.9032], 
    ['Mercury', 0.377], 
    ['Sun', 27.9] 
];
    // `.forEach` `document.createElement` `document.getElementById` `.appendChild`
    var planetDropdown = document.getElementById("planets")
// 1. Populate the dropdown element with the data found in the planets array. 
        // The value of each option should be the planet's name. 
    planets.forEach(function(item) {
        var name= item[0];
        var option = document.createElement("option")
        option.text = name;
      option.value = name;
      planetDropdown.appendChild(option);
  });
 // 2. Write the code to return the correct weight 

  function calculateWeight(weight, planetName) {
     for (let i = 0; i < planets.length; i++){
        if (planets[i][0] === planetName) {
            let planetWeight = planets[i][1]
            return weight * planetWeight
        }
     }
    }


  function handleClickEvent(e) {
    let userWeight = document.getElementById("user-weight").value
    let planetName = document.getElementById("planets").value
    let result = calculateWeight(userWeight, planetName)
        
    $("#output").text("If you were on " + planetName +"," + " you would weigh " + result + "lbs!");

} 
    $("#calculate-button").click(handleClickEvent)
    // 3. Create a variable called userWeight and assign the value of the user's weight. 

    // 4. Create a variable called planetName and assign the name of the selected planet from the drop down. 

    // 5. Create a variable called result and assign the value of the new calculated weight. 

    // 6. Write code to display the message shown in the screenshot. 

