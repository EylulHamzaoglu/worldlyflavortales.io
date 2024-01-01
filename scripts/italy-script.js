function showRecipe(recipeId) {
    var recipeContent = document.getElementById(recipeId);

    alert(recipeContent.textContent);
}


function addComment() {
    var commentInput = document.getElementById("commentInput").value;
    var commentsList = document.getElementById("commentsList");
    var thankYouMessage = document.getElementById("thankYouMessage");
    var recipeSelector = document.getElementById("recipeSelector");


    var selectedRecipeName = recipeSelector.options[recipeSelector.selectedIndex].text;

    var commentNode = document.createElement("p");
    commentNode.textContent = selectedRecipeName + " Comment: " + commentInput;
    commentsList.appendChild(commentNode);


    thankYouMessage.style.display = "block";
    document.getElementById("commentForm").style.display = "none";

   
    document.getElementById("commentInput").value = "";
}

function showComments() {
    var commentSection = document.getElementById("commentSection");
    commentSection.style.display = "block";
}

