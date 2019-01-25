function request(adress, request, func){
    var required = new XMLHttpRequest();  

               required.open("POST", "\""+adress+"?"+request, true);
               required.send();
               required.onreadystatechange = function() {
                if (this.readyState === 4 && this.status === 200) {
                 func();
    
                }
        
            };
};



const php= {
    login: function(){
        let login ="hi"
        let psw = "123"
        let request="name="+login+"&psw="+psw;
        function test(){
        console.log(required.responseText);
            };
        adress="./login_php.php"
        request(adress, request, test);

                    

    },
    login2: function(){

    },
    login3: function(){

    },
    login4: function(){

    }

};




export default php;