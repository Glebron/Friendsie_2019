import $ from 'jquery';
import Ar from './AryJs.js';
import MSS from './actions/msg/messageSending.js';
import php from './actions/php.js';
import login from './actions/login/login.js';



var button = document.querySelector('.kaverit').addEventListener('click', showFriends);
var button = document.querySelector('.viestit').addEventListener('click', showMessages);
var button = document.querySelector('.kysy').addEventListener('click', showQuestions);





let user_name ="";
login.start(appStart);

function appStart(login){
    $(".menu").toggleClass("hidden");

    user_name= login;
    console.log(user_name);
    showFriends();
}

const arrayOfQuestions=[
    {name: "Syvälliset", color: "rgb(255, 0, 106)", },
    {name: "Klassikot", color: "rgb(255, 110, 106)", },
    {name: "Lempi", color: "rgb(255, 110, 106)", },
    {name: "Kumpi", color: "rgb(255, 220, 106)",},
    {name: "new type", color: "rgb(255, 220, 106)", },
    {name: "Kerro jotain siita kun...", color: "rgb(255, 20, 106)",}
];

const arrayOfFriends=[
    {id:"1", name: "Aryna", icon: 'pictures/profile.png'},
    {id:"2", name: "Gleb", icon: 'pictures/profile1.png'},
    {id:"3", name: "Artyom", icon: 'pictures/profile2.png'},
   
];


function showFriends(){
    let htmlCode='<ul id="ul_root" class="question_types">'+Ar.arrayToHtml(arrayOfFriends.map((element)=>
    `<li>
            <div id=${element.id} name =${element.name} class='friend_profile'>
            <div><img class='profilePicture' src='${element.icon}'</div>
            <div>${element.name}<br></div>
            </div>
    </li>`
    ))+"</ul>";
    Ar.showhtml("main_root", htmlCode);

    $(document).ready(function(){ $('.friend_profile').click(function(){
           var friend_login= this.attributes.name.value;
        
    MSS.showMessageForm(arrayOfQuestions,login, friend_login);
        });
    });
};
function showQuestions(){
    let htmlCode=`<div class="questions">

    <ul class="questions-list">
  
      <li class="question">
        <div class="question-main-section">
             <h2 class="question-title">
               Syvälliset
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
             </h2>
         </div>
        <ul class="typed-questions">
              <li class="t-question">
                Minkälaisena persoonana koet ihmisten näkevän sinut? <br>
                <input class="answer">
              </li>
              <li class="t-question">
                Jos joku antaisi sinulle kirjan ja alkaisit lukemaan sitä, mutta huomaisit että kirja<br>
                <input class="answer">
              </li>
              <li class="t-question">
                Kertoo elämästäsi, niin lukisitko sen loppuun? <br>
                <input class="answer">
              </li>
              <li class="t-question">
                Mikä on mielestäsi hyvää piristystä parisuhteelle?<br>
                <input class="answer">
              </li>
              <li class="t-question">
                Kolme hyvää puolta sinussa?<br>
                <input class="answer">
              </li>
              <li class="t-question">
                Kolme huonoa puolta sinussa?<br>
                <input class="answer">
              </li>
              <li class="t-question">
                <input class="oma-question" placeholder="Oma kysymys"></input><br>
                <input class="answer">
              </li>
              <button class="next">Lähettää</button>
        </ul>
      </li>
  
  
  
  
      <li class="question">
        <div class="question-main-section">
            <h2 class="question-title">
              Random
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
            </h2>
        </div>
        <ul class="typed-questions">
              <li class="t-question">
                Viimeisin ostoksesi? <br>
                <input class="answer">
              </li>
              <li class="t-question">
                Viimeksi lukemasi kirja?<br>
                <input class="answer">
              </li>
              <li class="t-question">
                Kamalin tatuointi-idea? <br>
                <input class="answer">
              </li>
              <li class="t-question">
                Mitä keräilet/ olet keräillyt?<br>
                <input class="answer">
              </li>
              <li class="t-question">
                Mikä on pahin pelkosi?<br>
                <input class="answer">
              </li>
              <li class="t-question">
                Mitä pidät taskussasi?<br>
                <input class="answer">
              </li>
              <li class="t-question">
                <input class="oma-question" placeholder="Oma kysymys"></input><br>
                <input class="answer">
              </li>
              <button class="next">Lähettää</button>
  
        </ul>
      </li>
  
      <li class="question">
        <div class="question-main-section">
            <h2 class="question-title">
              Kumpi
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
            </h2>
        </div>
        <ul class="typed-questions">
              <li class="t-question">
              Parisuhde vai sinkkuus? <br>
                <input class="answer">
              </li>
              <li class="t-question">
                Pieni vai iso laukku?<br>
                <input class="answer">
              </li>
              <li class="t-question">
              Suorat vai kiharat hiukset? <br>
                <input class="answer">
              </li>
              <li class="t-question">
                Timantteja vai helmiä?<br>
                <input class="answer">
              </li>
              <li class="t-question">
                Manikyyri vai pedikyyri?<br>
                <input class="answer">
              </li>
              <li class="t-question">
              Pastellivärit vai neonvärit?<br>
                <input class="answer">
              </li>
              <li class="t-question">
                <input class="oma-question" placeholder="Oma kysymys"></input><br>
                <input class="answer">
              </li>
              <button class="next">Lähettää</button>
  
        </ul>
      </li>
  
  
    </ul>
  </div>`;
    //let htmlCode=Ar.arrayToHtml(arrayOfQuestions.map((element)=>    `<li class="single_question_type" style="--my-color-var: ${element.color};"><p>${element.name}</p><svg class="svg" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
   // arrayOfQuestions[0].ul=syQul;</li>`));
    Ar.showhtml("ul_root", htmlCode);
};
function showMessages(){
   php.receve_msg(user_name);
  

};

