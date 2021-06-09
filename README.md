
# w3schools Resource:
https://www.w3schools.com/xml/ajax_intro.asp

## What is AJAX?
### AJAX = Asynchronous JavaScript And XML.

*AJAX is not a programming language.

    AJAX just uses a combination of:

    - A browser built-in XMLHttpRequest object (to request data from a web server)
    - JavaScript and HTML DOM (to display or use the data)

## How AJAX Works
    1. An event occurs in a web page (the page is loaded, a button is clicked)
    2. An XMLHttpRequest object is created by JavaScript
    3. The XMLHttpRequest object sends a request to a web server
    4. The server processes the request
    5. The server sends a response back to the web page
    6. The response is read by JavaScript
    7. Proper action (like page update) is performed by JavaScript

## XMLHttpRequest Object Properties
 
### Holds the status of the XMLHttpRequest:

    - 0: request not initialized
    - 1: server connection established
    - 2: request received
    - 3: processing request
    - 4: request finished
         and response is ready

### Returns the status-number of a request:

  
        - 200: "OK"
        - 403: "Forbidden"
        - 404: "Not Found"

### Http Messages Reference: https://www.w3schools.com/tags/ref_httpmessages.asp

### HTTP Status messages:

        1xx: Information
        2xx: Successful
        3xx: Redirection
        4xx: Client Error
        5xx: Server Error

