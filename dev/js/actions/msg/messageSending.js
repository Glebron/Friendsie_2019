import Ar from '../../AryJs.js';
import php from '../php.js';



const messages = {
    showMessageForm: function(arr, login, friend_login){
        let questionTypeHtml = Ar.arrayToHtml(arr.map((element)=>
        `<option value="${element.name}">${element.name}</option>`));

        let html = 
     `<div class="form-popup" id="myForm">          
        <label for="mss"><b>Message</b></label>
          <input id="msg" type="text" placeholder="Your question" name="email">      
          <label for="questionType"><b>Question type</b></label>
        <select id="type" name="questionType">
           ${questionTypeHtml}
        </select>       
          <button type="submit" class="btn">Send question</button>
          <button type="button" class="btncancel">Close</button> 
          <div id="error"></div>       
      </div>`; 

      Ar.showhtml("form", html);
      
     document.querySelector('.btn').addEventListener("click", ()=> {
        this.check_input(login, friend_login);
        
    });     
    
     document.querySelector('.btncancel').addEventListener('click', this.closeForm);
    },
    closeForm: function(){
        Ar.showhtml("form", null); },
    
    check_input: function(login, friend_login){
            const msg = document.getElementById("msg").value;
            const recipient = friend_login;
            const frome = login;
            const type = document.getElementById("type").value;
            if (msg === "" ){
                Ar.showhtml("error", "Error");
                }
                else{
                    php.msgSend(msg, recipient ,frome, type);
                    this.closeForm();
                    }
    
        }
    }
    

export default messages;