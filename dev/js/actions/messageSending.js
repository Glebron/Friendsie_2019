import Ar from '../AryJs.js';
import php from './php.js';



const messages = {
    showMessageForm: function(arr, id){
        let questionTypeHtml = Ar.arrayToHtml(arr.map((element)=>
        `<option value="${element.name}">${element.name}</option>`
        ))
        let html =  `<div class="form-popup" id="myForm">
          <label for="mss"><b>Message</b></label>
          <input type="text" placeholder="Your question" name="email" required>      
          <label for="questionType"><b>Question type</b></label>
        <select name="questionType">
           ${questionTypeHtml}
        </select>       
          <button type="submit" class="btn">Send question</button>
          <button type="button" class="btncancel">Close</button>        
      </div>`; 
      Ar.showhtml("form", html);
     document.querySelector('.btn').addEventListener('click', php.login);
     document.querySelector('.btncancel').addEventListener('click', this.closeForm);
    },
    closeForm: function(){
        Ar.showhtml("form", null); }
    }

export default messages;