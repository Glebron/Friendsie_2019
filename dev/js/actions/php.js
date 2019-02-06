import Ar from '../AryJs.js';


const php= {
    msgSend: function(msg, recipient ,frome, type){
        console.log("Start");
        var required = new XMLHttpRequest();
        required.open("POST", "./js/actions/msg.php?msg="+msg+"&recipient="+recipient+"&frome="+frome+"&type="+type, true);
        required.send();    
        required.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
            console.log(this.responseText);            
            //return this.responseText;
            }
        };
    },

    receve_msg: function(recipient){            
        var required = new XMLHttpRequest();
        required.open("POST", "./js/actions/msgcheck.php?recipient="+recipient, true);
        required.send();
        required.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
               var res=  JSON.parse(this.responseText);
               console.log(res);
               let htmlCode=Ar.arrayToHtml(res.map((element)=>
               `<li class="single_question_type" style="--my-color-var: ${element.id};"><p>${element.msg} frome ${element.frome}</p></li>`
               ));
               Ar.showhtml("root", htmlCode);
              //document.getElementById("root").innerHTML = this.responseText;
            }    
        };
    },

    login: function(login,psw,cFunction){
      
        console.log("Start");
            var required = new XMLHttpRequest();           
            required.open("POST", "./login_php.php?login="+login+"&psw="+psw, true);
            required.send();
            var user;
            required.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                 console.log("Calback send")
                 cFunction(this);                         
                }
             };
        
    },
    
    checkCookie: function(cFunction){               
        console.log("StartChekingggg");
            var required = new XMLHttpRequest();
            required.open("POST", "./login_php.php?cookie=test", true);
            required.send();
        required.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    console.log("Calback send")
                    cFunction(this);                                                        
                }               
            };

            
            
    }

};




export default php;