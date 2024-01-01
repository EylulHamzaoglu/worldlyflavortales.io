function getRecipeDetails(recipeId) {
    if (recipeId === 'gazpacho') {
        return {
            title: 'Gazpacho',
            prepTime: '45 mins',
            servings: 6,
            nutritionFacts: {
                calories: 132,
                fat: '10g',
                carbs: '11g',
                protein: '2g'
            }
        };
    } else if (recipeId === 'paella') {
        return {
            title: 'Paella',
            prepTime: '45 mins',
            cookTime: '45 mins',
            totalTime: '1 hr 30 mins',
            servings: 6,
            nutritionFacts: {
                calories: 524,
                fat: '18g',
                carbs: '57g',
                protein: '29g'
            }
        };
    } else if (recipeId === 'churros') {
        return {
            title: 'Churros',
            prepTime: '10 mins',
            cookTime: '10 mins',
            totalTime: '20 mins',
            servings: 4,
            nutritionFacts: {
                calories: 4263,
                fat: '455g',
                carbs: '57g',
                protein: '3g'
            }
        };
    } else {
        return null;
    }
}

function showRecipe(recipeId) {
    var recipeDetails = getRecipeDetails(recipeId);

    if (recipeDetails) {
        alert(`ABOUT ${recipeDetails.title.toUpperCase()}:
        Prep Time: ${recipeDetails.prepTime}
        Cook Time: ${recipeDetails.cookTime || ''}
        Total Time: ${recipeDetails.totalTime || ''}
        Servings: ${recipeDetails.servings}
        NUTRITION FACTS
        ${recipeDetails.nutritionFacts.calories} Calories
        ${recipeDetails.nutritionFacts.fat} Fat
        ${recipeDetails.nutritionFacts.carbs} Carbs
        ${recipeDetails.nutritionFacts.protein} Protein`);
    } else {
        alert("Recipe details not found.");
    }
}




function showVideo(recipeId) {
    var videoContainer = document.getElementById(recipeId + '-video');
    if (videoContainer) {
        videoContainer.style.display = 'block';
    }
}

function showRandomRecipe() {
    var recipes = document.querySelectorAll('.recipe');
    recipes.forEach(function(recipe) {
        recipe.style.display = 'none';
    });
    var randomRecipeIndex = Math.floor(Math.random() * recipes.length);
    var randomRecipe = recipes[randomRecipeIndex];
    randomRecipe.style.display = 'block';
}

function shareRecipe(recipeName) {
    var recipeUrl = encodeURIComponent(window.location.href);
    var recipeText = encodeURIComponent("Check out this amazing recipe: " + recipeName);
    window.open("https://twitter.com/intent/tweet?url=" + recipeUrl + "&text=" + recipeText, "_blank");
}

const recipeRatings = {
    'gazpacho': 0,
    'paella': 0,
    'churros': 0
};

function rateRecipe(recipeId, rating) {
    if (recipeRatings.hasOwnProperty(recipeId)) {
        recipeRatings[recipeId] = rating;
        alert(`Thank you! You rated ${recipeId} recipe with ${rating} stars.`);
    } else {
        alert('Error: Recipe not found.');
    }
}
document.querySelectorAll('.rating-container').forEach(function(container) {
    container.style.display = 'none';
});

function toggleAllRatings() {
    document.querySelectorAll('.rating-container').forEach(function(container) {
        var displayStyle = container.style.display;
        container.style.display = displayStyle === 'none' ? 'block' : 'none';
    });
}






