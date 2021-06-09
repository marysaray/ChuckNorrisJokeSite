// when the web page is done loading 
window.onload = function(){
    // set up button click
    let btnJoke = document.getElementById("get-joke");
    btnJoke.onclick = main;
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
   
    // get joke from API
    // display joke
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
    if(http.readyState == 4 && http.status == 200)// both needs to be true.
    {
        document.getElementById("display-joke").innerHTML =
                                http.responseText;
    }
}