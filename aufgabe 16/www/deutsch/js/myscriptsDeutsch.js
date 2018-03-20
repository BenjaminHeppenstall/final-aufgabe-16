function everything() {
    var answerInput = prompt("bitte q eingeben", "8");

    if (answerInput != null) {

        var a = parseInt(answerInput, 10);                               
        var forAll = "";                                                  
        var forMax = "";                                                
        var nummern = [];                                             

        function isItNumber(h) {
            if (Number.isInteger(h)) { 

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

                var createMaxNum = document.createElement("p");   
                createMaxNum.id = "max";                                         
                var createMaxNumContent = document.createTextNode("");           
                createMaxNum.appendChild(createMaxNumContent);                  
                var element1 = document.getElementById("div1");                  
                element1.appendChild(createMaxNum);                              

                var createAllNum = document.createElement("p");                  
                createAllNum.id = "all";                                         
                var createAllNumContent = document.createTextNode("");           
                createAllNum.appendChild(createAllNumContent);                   
                var element2 = document.getElementById("div1");                  
                element2.appendChild(createAllNum);                              

                document.getElementById("max").innerHTML = "<br>" + "Größtmöglicher Flächeninhalt bei " + a + "cm:" + "<br>" + "<b>" + "<br>" + 
                Math.round(maxNummern * 1000) / 1000 + " cm²" + "</b>" + "<br>" + "<br>";
                document.getElementById("all").innerHTML = "<br>" + "Andere mögliche Flächeninhalte:" + "<br>" + "<br>" + forAll;

                var elem = document.getElementById('qEingeben');               
                elem.parentNode.removeChild(elem);                  

                var button = document.createElement("button");                      
                button.id = "cancelButton";
                button.class = "button"                                                               
                button.innerHTML = "<b>erneut versuchen</b>";                                     
                var parentEl = document.getElementById("fillIn");                
                parentEl.appendChild(button);                                   

                button.addEventListener ("click", function() {                  
                    location.reload(false);  
                });                                    
            } else {  

                var div = document.createElement("div");
                div.id = "attentionDiv";

                document.getElementById("allNum").appendChild(div);

                var myImg = document.createElement("IMG");
                myImg.src = "images/attention.png";
                myImg.setAttribute("alt", "attention");
                myImg.id = "attentionImage";
                var element4 = document.getElementById("attentionDiv")
                element4.appendChild(myImg);

                var invalidInput = document.createElement("p");                  
                invalidInput.id = "demo1";                                         
                var invalidInputContent = document.createTextNode("");           
                invalidInput.appendChild(invalidInputContent);                   
                var element3 = document.getElementById("attentionDiv");                  
                element3.appendChild(invalidInput); 
                

                document.getElementById("demo1").innerHTML = "Bitte eine <i>gültige</i> Nummer eingeben" 

                var elem1 = document.getElementById('qEingeben');               
                elem1.parentNode.removeChild(elem1); 

                var button = document.createElement("button");                      
                button.id = "cancelButton";
                button.class = "button"                                                               
                button.innerHTML = "<b>erneut versuchen</b>";                                     
                var parentEl = document.getElementById("fillIn");                
                parentEl.appendChild(button);                                   

                button.addEventListener ("click", function() {                  
                    location.reload(false);
                });
            }
        }

        isItNumber(a);
    }
}