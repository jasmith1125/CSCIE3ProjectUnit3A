window.onload = function() {

    var divideText = function() {
    // Get text elements within the "transcriptText" div 
    var myText = document.getElementById("transcriptText");
    // Split the text into an array of individual words
    var wordArray = myText.innerText.split(" ");
    //console.log(wordArray);
    
   // Get the original div and clear the contents
    myText.innerHTML = ""; 
    //console.log(myText);
    
    // Place each word in wordArray within a new 'span' element
    for (var i = 0; i < wordArray.length; i++) {
         var newSpan = document.createElement("span");
         var newText = document.createTextNode(wordArray[i] + " ");
            // Add words to span elements
            newSpan.appendChild(newText);
            // Set class of "word" for each span element
            newSpan.setAttribute("class", "word");
            // Set ID for each span element
            newSpan.setAttribute("id", "word" + i);
            // Add newSpan to original div
            myText.appendChild(newSpan);
      }

     // Add a handler to the div element which changes the 
     // background to yellow when word is moused over  
     myText.addEventListener("mouseover", function(event) {    
            if (event.target.className == "word") {
                event.target.style.backgroundColor = "yellow";
          } // end if
           
       }, false); // end eventListener */

     // Add a handler to the div element which removes 
     // the yellow highlighting on mouseout 
     myText.addEventListener("mouseout", function(event) {    
           if (event.target.className == "word") {
               event.target.style.backgroundColor = "#ffffff";
          } // end for
           
       }, false); // end eventListener */

    } // end divideText function
  
var btn = document.getElementById("divideTranscript");
btn.addEventListener("click", divideText, false); 
} //end window.onload


/*
String firstWord = null;
if(string.contains(" ")){
   firstWord= string.substring(0, string.indexOf(" ")); 
}

var str = "Hello world now";
var arr = str.split(" ");
var text = "";
var i;
for (i = 0; i < arr.length; i++) {
    text += arr[i] + "<br>"
}

Without seeing your code, I'm going to say that I don't think you need another Array. If you have the background of the words, and the trailing blank space, turning yellow when you mouseover, you are well on your way.
 
What I would suggest is, when you loop through the Array to set the class attribute fo each word, check to see if there is a trailing space. If there is, use something like substring to just grab the word, put that in the span, then set the class/background. Then, get that space and put it in its own span -- but don't set the class attribute.
 
*/

