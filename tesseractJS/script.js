var analyzed;
(function(){

    console.log("Yo");

    document.getElementById("goButton").addEventListener("click", function(){
        var myImage = document.getElementById("myCapture");
        Tesseract.recognize(myImage, {
            lang: 'fra'
        })
        .then(function(result){
            console.log(result)
            analyzed=result;
        })

    });
    
    
})();