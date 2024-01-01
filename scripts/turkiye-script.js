function showRecipe() {
      
      var recipeName = prompt("Which recipe would you like to learn? (Adana Kebap, Hunkar Begendi, Kunefe)");

      switch (recipeName.toLowerCase()) {
          case "adana kebap":
              alert("Adana Kebap Recipe:\nIn a bowl, mix ground beef, pepper paste, red pepper flakes, salt, and black pepper. Take small portions of the mixture and mold them onto skewers, creating elongated kebabs. Grill the kebabs until they are cooked through, turning occasionally for even cooking. Serve hot with flatbread, grilled vegetables, and yogurt."); 
              break;
          case "hunkar begendi":
              alert("Hunkar Begendi Recipe:\nRoast the eggplants until their skin is charred. Peel the skin and mash the flesh.In a separate pan, cook minced meat until browned. Season with salt and pepper.In another saucepan, prepare a béchamel sauce by melting butter, adding flour, and gradually stirring in milk until thickened.Mix the mashed eggplants with the béchamel sauce.Serve the eggplant mixture topped with minced meat."); 
              break;
          case "kunefe":
              alert("Kunefe Recipe:\nPreheat the oven to 180°C (350°F).In a bowl, mix the shredded kadayif dough with melted butter.Press half of the mixture into the bottom of a baking dish.Place slices of cheese evenly over the dough.Cover the cheese with the remaining kadayıf mixture.ıf mixture.While baking, prepare the syrup by boiling sugar, water, and lemon juice until it thickens.our the hot syrup over the künefe as soon as it comes out of the oven.Garnish with chopped pistachios if desired.Serve warm."); 
              break;
          default:
              alert("Invalid recipe name! Please enter a correct recipe name.");
      }
  }
  function showTable(p) {
    var list = document.getElementsByClassName("table-div");
    for(i = 0; i < list.length; i++){
        list[i].style.display = "none";
    }

    document.getElementById(p + "-table").style.display = "block";

}

  const turkishDishes = [
    "Kebab",
    "Manti",
    "Lahmacun",
    "Pide",
    "Baklava",
    "Kısır",
    "Iskender",
    "Hünkar Beğendi",
    "Meze",
    "Karnabahar Tarator"
];

function showRecommendation() {
    const randomIndex = Math.floor(Math.random() * turkishDishes.length);
    const randomDish = turkishDishes[randomIndex];

    const resultElement = document.getElementById("recommendationResult");
    resultElement.textContent = `I recommend trying: ${randomDish}`;
}