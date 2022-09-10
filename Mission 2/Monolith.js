let currentColour = 0;
function changeColour() {
    const colourArray = [`black`, `url('static2.jpg')`, `url('static3.jpg')`, `url(staticCol.jpg)`,`url(Static.jpg)`]
    
    if (currentColour === colourArray.length){
        currentColour = 0;
    } else {
        currentColour++;
        document.body.style.background = colourArray[currentColour];
    }

}


//Switch to black email box for readability against tv static
const myDiv = document.getElementById("email");
myDiv.addEventListener("mouseover",function(){
    myDiv.style.background = 'black';
    myDiv.style.color = 'white';
})