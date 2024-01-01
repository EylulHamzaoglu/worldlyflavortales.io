
        function showRecipe(recipe) {
            if (recipe === 'ratatuy') {
                alert(`Ratatouille Recipe:
    Step 1. Preheat the oven to 350 degrees F (175 degrees C). Coat the bottom and sides of a 1 1/2-quart casserole dish with 1 tablespoon olive oil. 

    Step 2. Heat remaining 1 tablespoon olive oil in a medium skillet over medium heat. Cook and stir garlic until fragrant and golden brown. Add eggplant and parsley; cook and stir until eggplant is tender and soft, about 10 minutes. Season with salt to taste. 

    Step 3. Spread eggplant mixture evenly across the bottom of the prepared casserole dish; sprinkle with a few tablespoons of Parmesan cheese. Spread zucchini in an even layer over top. Lightly salt and sprinkle with a little more cheese. Continue layering in this fashion, with tomatoes, mushrooms, onion, and bell pepper, covering each layer with a sprinkling of salt and cheese. 

    Step 4. Bake in preheated oven until vegetables are tender, about 45 minutes.`);

            } else if (recipe === 'onionSoup') {
                alert(`Une soupe à l'oignon Recipe:
    Step 1. Melt butter in a large pot over medium-high heat. Stir in red onions, sweet onions, and salt. Cook, stirring frequently, until onions are caramelized and almost syrupy, about 35 minutes.

    Step 2. Stir in chicken broth, beef broth, red wine, and Worcestershire sauce. Bundle parsley, thyme, and bay leaf with kitchen twine; add to the pot. Simmer over medium heat for 20 minutes, stirring occasionally. Remove and discard herb bundle. Reduce heat to low; stir in vinegar and season with salt and pepper. Cover soup and keep warm over low heat while you prepare the toast.

    Step 3. Set an oven rack about 6 inches from the heat source and preheat the oven's broiler. Arrange bread slices on a baking sheet and broil, turning once, until well toasted on both sides, about 3 minutes. Remove from heat; do not turn off the broiler.

    Step 4. Arrange 4 large oven-safe bowls or crocks on a rimmed baking sheet. Fill each bowl 2/3 full with hot soup. Top each bowl with 1 slice of toasted bread, 2 slices Gruyère cheese, and 1/4 of the Asiago cheese. Sprinkle a little bit of paprika over the top of each one.

    Step 5. Cook under the hot broiler until bubbly and golden brown, about 5 minutes. Cheese will cascade over the sides of the crock and form a beautifully melted crusty seal as it melts.

    Step 6. Serve hot and enjoy!`);

            } else if (recipe === 'eclairs') {
                alert(`Éclair Recipe:
    Step 1. Preheat the oven to 230 degree C. Grease a cookie sheet; set aside. 

    Step 2. Make choux pastry: Combine water and butter in a medium pot. Bring to a boil, stirring until butter melts completely. Reduce heat to low; add flour and salt. Stir vigorously until mixture leaves the sides of the pan and begins to form a stiff ball. Remove from heat. 

    Step 3. Add eggs, one at a time, beating well after each addition until incorporated. Using a spoon or pastry bag fitted with a No. 10 or larger tip, spoon or pipe dough onto the prepared cookie sheet in 1 1/2x4-inch strips. 

    Step 4. Bake in the preheated oven for 15 minutes. Reduce heat to 325 degrees F (165 degrees C) and continue baking until the bottoms sound hollow when lightly tapped, about 20 more minutes. Cool completely on a wire rack. 

    Step 5. Make filling: Combine milk and pudding mix in a medium bowl according to package directions. Beat heavy cream with an electric mixer in a separate medium bowl until soft peaks form. Beat in confectioners' sugar and vanilla. Fold whipped cream into pudding.

    Step 6. Cut tops off of cooled pastry shells with a sharp knife. Fill shells with pudding mixture and replace tops. 

    Step 7. Make icing: Melt chocolate and butter in a medium saucepan over low heat. Stir in confectioners' sugar and vanilla. Stir in hot water, 1 tablespoon at a time, until icing is smooth and has reached desired consistency. Remove from heat and cool slightly.

    Step 8. Drizzle chocolate icing over filled eclairs. Store in the refrigerator until serving.`);
            }
        }
   
   
    function shareRecipe(recipeName) {
        var recipeUrl = encodeURIComponent(window.location.href);
        var recipeText = encodeURIComponent("Check out this amazing recipe: " + recipeName);
        window.open("https://twitter.com/intent/tweet?url=" + recipeUrl + "&text=" + recipeText, "_blank");
    }
   
    var buttons = document.querySelectorAll('.show-image-button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            var imagePath = button.getAttribute('data-image');
            showImage(imagePath, button.nextElementSibling);
        });
    });

    function showImage(imagePath, container) {
        var imageElement = document.createElement('img');
        imageElement.src = imagePath;
        imageElement.alt = "Recipe Image";

        var paragraphElement = document.createElement('p');
        paragraphElement.textContent = "Your Dish Should Look Like This ";

        container.innerHTML = '';
        container.appendChild(imageElement);
        container.appendChild(paragraphElement);
    }

    function toggleVideo() {
        var videoWrapper = document.getElementById('videoWrapper');

        if (videoWrapper.style.display === 'none') {
            videoWrapper.style.display = 'block';
            document.getElementById('videoButton').innerHTML = "Close Video About French Cuisine";
            document.getElementById('frenchCuisineVideo').play();
        } else {
            videoWrapper.style.display = 'none';
            document.getElementById('videoButton').innerHTML = "Watch Video About French Cuisine";
            document.getElementById('frenchCuisineVideo').pause();
        }
    }
