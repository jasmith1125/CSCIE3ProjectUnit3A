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
         var newText = document.createTextNode(wordArray[i]);
         var spaceSpan = document.createElement("span");
         var spacer = document.createTextNode(" ");
            // Put the spacers inside span element
            spaceSpan.appendChild(spacer);
            // Add words to span elements
            newSpan.appendChild(newText);
            // Set class of "word" for each span element
            newSpan.setAttribute("class", "word");
            // Set ID for each span element
            newSpan.setAttribute("id", "word" + i);
            // Add newSpan to original div
            myText.appendChild(newSpan);
            // Add spaceSpan to original div
            myText.appendChild(spaceSpan);
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

