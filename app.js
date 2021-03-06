var txtInput1 = document.querySelector("#txt-input-1")
var btnTranslateId1 = document.querySelector("#btn-translate-id-1")
var outputId1 = document.querySelector("#output-id-1")

//Creation Credits for API/ Server: https://dev.to/rakesh/how-did-i-remove-the-rate-limit-from-my-minion-translator-and-how-you-can-do-it-too-a-neogcamp-story-2kgp
//The Server: https://minionsapi.mehulgosar.repl.co/translate/minion.json 
//Use the API directly https://minionsapi.mehulgosar.repl.co/translate/minion.json?text=

function createURL(urlText){
    const URL= "https://minionsapi.mehulgosar.repl.co/translate/minion.json" + "?"+"text=" + urlText;//The text act as a Key and the value is urlText.
    return URL; 
}
function errorHandler(error){
    console.log("Error occured: " + error);
    alert("Something wrong occured at server end. Please try again later.")
}

function clickHandler(){
    var inputText = txtInput1.value //Taking Input

    fetch(createURL(inputText)) 
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputId1.innerText = translatedText; //Showing/ Printing output. 
        })
        .catch(errorHandler) 
}

/*Note: The function can be above or below the Event Listener.*/
btnTranslateId1.addEventListener("click", clickHandler)
