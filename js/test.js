divideText = function() {
    
    // Get text elements within the "transcriptText" div and extract individual words
    var myText = document.getElementById("transcriptText");
    var wordArray = myText.innerText.split(" ");
    console.log(wordArray);
    
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
     console.log(myText);  
    
    
    alert("Text transformed");
}

document.getElementById("divideTranscript").onclick = divideText();