// when the web page is done loading 
window.onload = function(){
    // set up button click
    let btnJoke = document.getElementById("get-joke");
    btnJoke.onclick = getRandomJoke;
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
function getRandomJoke(){
    // get joke from API
    // display joke
}