var txtInput1 = document.querySelector("#txt-input-1")
var btnTranslateId1 = document.querySelector("#btn-translate-id-1")
var outputId1 = document.querySelector("#output-id-1")

function clickHandler(){
    outputId1.innerText = "Traslated: " + txtInput1.value;
}

btnTranslateId1.addEventListener("click", clickHandler)

