var input=document.querySelector("#inputText");
var btn=document.querySelector("#btnTranslate");
var output=document.querySelector("#outputContainer");
var url ="https://api.funtranslations.com/translate/ebonics.json"


function constructUrl(text){
    return url + "?" + "text=" +text
}
function btnClick(){
    fetch(constructUrl(input.value)).then(response=> response.json()).then(data=>output.innerText=(data.contents.translated))
}

btn.addEventListener("click", btnClick)
