window.onload = function () {
    var btnJoke = document.getElementById("get-joke");
    btnJoke.onclick = main;
};
function main() {
    var http = new XMLHttpRequest();
    http.open("GET", "https://api.icndb.com/jokes/random?limitTo=[nerdy]");
    http.onreadystatechange = proccesRequest;
    http.send();
}
function proccesRequest() {
    var http = this;
    if (http.readyState == 4 && http.status == 200) {
        document.getElementById("display-joke").innerHTML =
            http.responseText;
    }
}
