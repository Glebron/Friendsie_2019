
const text ={
    data: "",
    loadDoc: function() {
        


            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
              if (this.readyState == 4 && this.status == 200) {
                text.data =
                this.responseText;
              }
            };
            xhttp.open("GET", "ajax_info.txt", true);
            xhttp.send(); 
    },
}


