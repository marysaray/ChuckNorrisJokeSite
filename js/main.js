var oneJoke = (function () {
    function oneJoke() {
    }
    return oneJoke;
}());
window.onload = function () {
    var btnJoke = document.getElementById("get-joke");
    btnJoke.onclick = main;
    getAllCategories();
};
function main() {
    var categories = getSelectedCategories();
    var catString = categories.toString();
    var btnJoke = document.getElementById("get-joke");
    btnJoke.disabled = true;
    btnJoke.innerText = "Retrieving...";
    var displayDiv = document.getElementById("display-joke");
    displayDiv.setAttribute("hidden", "hidden");
    var http = new XMLHttpRequest();
    var url = "https://api.icndb.com/jokes/random?exclude=[" + catString + "]";
    console.log(url);
    http.open("GET", url);
    http.onreadystatechange = processRequest;
    http.send();
}
function processRequest() {
    var http = this;
    if (http.readyState == 4 && http.status == 200) {
        var response = JSON.parse(http.responseText).value;
        console.log(response);
        console.log(response.id);
        console.log(response.joke);
        console.log(response.categories);
        displayJoke(response);
    }
    if (http.readyState == 4) {
        var btnJoke = document.getElementById("get-joke");
        btnJoke.disabled = false;
        btnJoke.innerText = "Get Random Joke";
    }
}
function displayJoke(j) {
    var displayDiv = document.getElementById("display-joke");
    displayDiv.removeAttribute("hidden");
    var jokeIdSpan = displayDiv.querySelector("h2 > span");
    jokeIdSpan.innerText = j.id.toString();
    var jokeParagraph = displayDiv.querySelector("h3");
    jokeParagraph.innerHTML = j.joke;
    var liCategory = displayDiv.querySelector("ul");
    liCategory.innerHTML = "";
    for (var i = 0; i < j.categories.length; i++) {
        var nxtCategory = document.createElement("h4");
        nxtCategory.innerText = "[ " + j.categories[i] + " ]";
        liCategory.appendChild(nxtCategory);
    }
}
function getAllCategories() {
    var http = new XMLHttpRequest();
    http.open("GET", "https://api.icndb.com/categories");
    http.onreadystatechange = displayCategories;
    http.send();
}
function displayCategories() {
    var http = this;
    if (http.readyState == 4 && http.status == 200) {
        var categories = JSON.parse(http.responseText).value;
        console.log(http.responseText);
        console.log(categories);
        var boxCateogry = "";
        for (var i = 0; i < categories.length; i++) {
            var cat = categories[i];
            boxCateogry += "<input type=\"checkbox\" value=\"" + cat + "\" id=\"" + cat + "\">\n            <label for=\"" + cat + "\">" + cat + "</label>";
        }
        console.log(boxCateogry);
        var categoriesDiv = document.getElementById("categories");
        categoriesDiv.innerHTML = boxCateogry;
    }
}
function getSelectedCategories() {
    var categoryDiv = document.getElementById("categories");
    var checkBoxes = categoryDiv.querySelectorAll("input[type=checkbox]");
    console.log("Chosen Categories");
    console.log(checkBoxes);
    var selectedCategories = [];
    for (var i = 0; i < checkBoxes.length; i++) {
        var currCategory = checkBoxes[i];
        if (currCategory.checked) {
            selectedCategories.push(currCategory.value);
        }
    }
    return selectedCategories;
}
