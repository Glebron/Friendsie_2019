import $ from 'jquery';
import Ar from '../../AryJs.js';
import php from '../php.js';

const login = {
    start: function(logedFunction){
        const logingForm= `<div class="enter"><p>Enter</p>
        <input id="login" placeholder="Esim: otto.heikkinen@gmail.com" type="text" >
        <p class="sala">Enter password</p>
        <input id="psw" placeholder="********" type="text" > <br>
        <button class="enter_btn">Kirjaudu sisään</button><div id="error"></div>
          </div>`;
          
          $(".menu").toggleClass("hidden");
    
          Ar.showhtml("main_root", logingForm);
    
          php.checkCookie(loginTest);
    
            function check_input(){
                const login = document.getElementById("login").value;
                const psw = document.getElementById("psw").value;
                if (login === "" || psw === ""){
                    Ar.showhtml("error", "Check Input");
                }
                else{
                    php.login(login, psw, loginTest);
                }
            };
            function loginTest(responce){
                const login_chech = JSON.parse(responce);
                console.log(login_chech);
                if (login_chech.error == true){
                    if(login_chech.errorMessage=="Acces denied"){
                        Ar.showhtml("error", login_chech.errorMessage);
                    }
                    else if (login_chech.errorMessage=="no user"){
                        var isAdmin = confirm(`Создать нового пользователя ${login_chech.login}?`);
                    if(isAdmin==true){
                        php.register(login_chech.login,login_chech.lvl);
                    }
                    }
                
                }
                else{
                    logedFunction(login_chech.login);
                }
            };
    
          $(".enter_btn").click(()=>{
            check_input()
          });
    }
}




export default login;