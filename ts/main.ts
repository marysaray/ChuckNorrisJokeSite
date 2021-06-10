// Create custom class to give intellisens.
class oneJoke{
    /**
     * The number associated with the joke.
     */
    id:number;
    /**
     * The text of the joke.
     */
    joke:string;
    /**
     * The category title in the array list.
     */
    categories:string[];
}

// when the web page is done loading 
window.onload = function(){
    // set up button click
    let btnJoke = document.getElementById("get-joke");
    btnJoke.onclick = main;

    getAllCategories();
}
/**
 * This function is associated with the onclick event 
 * related to the button Get Random Joke on the website.
 * It will get a random joke from Chuck Norris API:
 * website --> http://www.icndb.com/api/
 * resource --> http://api.icndb.com/jokes/random
 * Then it will display the joke on the web page.
 * Each time the button is clicked a new joke
 * will be generated and displayed.
 */
function main(){
    // Create object to communicate with the server.
    let http = new XMLHttpRequest();
    // Specifies the type of request: get URL from Chuck Norris API.
    http.open("GET", "https://api.icndb.com/jokes/random?limitTo=[nerdy]");

    // Function to retrieve differets readyState status.
    http.onreadystatechange = proccesRequest;

    // Send request to the server
    http.send();
}
/**
 * checks the status and returns a specific result 
 * related to the status message### that has been return.
 * Results depends on the status message### and
 * what is being applied within the control structure.
 */
function proccesRequest(){
    let http = <XMLHttpRequest>this;
    /* 4: request finished and response is ready. */
    /* 200 OK: The request is OK --> standard response 
               for successful HTTP requests) */
    if(http.readyState == 4 && http.status == 200){// both needs to be true.
    // convert string into object with JSON parse method.
    let response:oneJoke = JSON.parse(http.responseText).value; // get value out of response
        console.log(response);    
        console.log(response.id);
        console.log(response.joke);
        console.log(response.categories);
        displayJoke(response); 
    }
}
/**
 * This function will display the joke on the web page.
 * @param J takes in object 
 */
function displayJoke(j:oneJoke){
    // get div to manipulate
    let displayDiv = document.getElementById("display-joke");
    // select the element you want to target
    let jokeIdSpan = <HTMLElement>displayDiv.querySelector("h2 > span");
    // display value of object id.
    jokeIdSpan.innerText = j.id.toString();
    // select the element you want to target
    let jokeParagraph = displayDiv.querySelector("h3");
    // display value of object joke.
    jokeParagraph.innerHTML = j.joke;
    // select element you want to target
    let liCategory = displayDiv.querySelector("ul");
    // grab list of the web page
    // clear out the list
    liCategory.innerHTML = "";
    // remake category list
    // go through a loop to get each category
    for(let i = 0; i < j.categories.length; i++) {
        // create new element in memory
        let nxtCategory = document.createElement("h4");
        // select category in the list
        nxtCategory.innerText = "[ " + j.categories[i] + " ]"; 
        // add category to the element on the web page.
        liCategory.appendChild(nxtCategory);
    }
}
// Retrieve all categories 
function getAllCategories(){
    // object to communicate with the server
    let http = new XMLHttpRequest();
    http.open("GET", "https://api.icndb.com/categories");
    http.onreadystatechange = displayCategories;
    http.send();
}
/**
 * This function will execute everytime a new category 
 * has been selected from the web page.
 */
function displayCategories(){
    let http = <XMLHttpRequest>this;
    if(http.readyState == 4 && http.status == 200){
        let categories:string[] = JSON.parse(http.responseText).value;
        console.log(http.responseText);
        console.log(categories);
        let boxCateogry = "";
        for(let i = 0; i < categories.length; i++){
            let cat = categories[i];
            // this is an example of how programmers wrote code before template literals.
            // boxCateogry += "<input type='checkbox' value='" + cat + " 'id='" +
            // cat + "'> <label for='"> + cat + "'>" +cat + "<\label>";
            boxCateogry += `<input type="checkbox" value="${cat}" id="${cat}">
            <label for="${cat}">${cat}</label>`
        }
        console.log(boxCateogry);
        let categoriesDiv = document.getElementById("categories");
        categoriesDiv.innerHTML = boxCateogry;
    }
}

