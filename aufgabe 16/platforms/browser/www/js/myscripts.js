function everything() {
    var answerInput = prompt("bitte q eingeben", "8");

    if (answerInput != null) {
        var a = parseInt(answerInput, 10);
        var forAll = "";
        var forMax = "";
        var nummern = [];
 
        function f(q,x) {
            var y = (30 - (-(q/10) * x + q)) * (40 - x);
            return y;
        }

        for(var i = 0; i < 1000; i++) {
            var b = 0 + i * 0.1;
            forAll += Math.round((b + f(a,b)) * 1000) / 1000 + "<br>";
            forMax = b + f(a,b);
            nummern.push(forMax)
            var maxNummern = Math.max.apply(null, nummern)
        }


        //create element to store maximum number
        var createMaxNum = document.createElement("p");                  //create element
        createMaxNum.id = "max";                                         //give element id
        var createMaxNumContent = document.createTextNode("");           //create empty text to overwrite later          //works
        createMaxNum.appendChild(createMaxNumContent);                   //give element text
        var element1 = document.getElementById("div1");                  //get parent element
        element1.appendChild(createMaxNum);                              //append child to parent element

        //create element to store all other numbers
        var createAllNum = document.createElement("p");                  //create element
        createAllNum.id = "all";                                         //give element id
        var createAllNumContent = document.createTextNode("");           //create empty text to overwrite later          //works
        createAllNum.appendChild(createAllNumContent);                   //give element text
        var element2 = document.getElementById("div1");                  //get parent element
        element2.appendChild(createAllNum);                              //append child to parent element

        //write max and all into created elements
        document.getElementById("max").innerHTML = "<br>" + "Größtmöglicher Flächeninhalt bei " + a + "cm:" + "<br>" + "<b>" + "<br>" + 
        Math.round(maxNummern * 1000) / 1000 + " cm²" + "</b>" + "<br>" + "<br>";
        document.getElementById("all").innerHTML = "<br>" + "Andere Punkte auf der Parabel:" + "<br>" + "<br>" + forAll;
        
        //remove original input button
        var elem = document.getElementById('qEingeben');                 //get element to remove                         //works
        elem.parentNode.removeChild(elem);                               //remove element
        
        //create cancel buttton
        var button = document.createElement("button");                   //create button    
        button.id = "cancelButton";                                      //give el id                          
        button.innerHTML = "cancel";                                     //write into button                             //works
        var parentEl = document.getElementById("fillIn");                //get parent Element
        parentEl.appendChild(button);                                    //append into parent element

        button.addEventListener ("click", function() {                   //give button function
            location.reload(false);                                      //reload page
        });
    }
}