const php= {
    msgSend: function(msg, recipient ,frome, type){
        console.log("Start");
        var required = new XMLHttpRequest();
        required.open("POST", "./msg.php?msg="+msg+"&recipient="+recipient+"&frome="+frome+"&type="+type, true);
        required.send();    
        required.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                console.log("End");
              document.getElementById("error").innerHTML = this.responseText;
            }
        };
    },

    login2: function(){

    },
    login3: function(){

    },
    login4: function(){

    }

};




export default php;