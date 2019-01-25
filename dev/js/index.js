import $ from 'jquery';
import Ar from './AryJs.js';
import MSS from './actions/messageSending.js';



var button = document.querySelector('.kaverit').addEventListener('click', showFriends);
var button = document.querySelector('.kysy').addEventListener('click', showQuestions);
var button = document.querySelector('.viestit').addEventListener('click', showMessages);



const arrayOfQuestions=[
    {name: "Oma", color: "rgb(255, 0, 106)"},
    {name: "Klassikot", color: "rgb(255, 110, 106)"},
    {name: "Lempi", color: "rgb(255, 110, 106)"},
    {name: "Kumpi", color: "rgb(255, 220, 106)"},
    {name: "new type", color: "rgb(255, 220, 106)"},
    {name: "Kerro jotain siita kun...", color: "rgb(255, 20, 106)"}
];
const arrayOfFriends=[
    {id:"1", name: "Aryna", icon: 'pictures/profile.png'},
    {id:"2", name: "Gleb", icon: 'pictures/profile1.png'},
    {id:"3", name: "Artyom", icon: 'pictures/profile2.png'},
   
];


function showFriends(){
    let htmlCode=Ar.arrayToHtml(arrayOfFriends.map((element)=>
    `<li>
            <div id=${element.id} class='friend_profile'>
            <div><img class='profilePicture' src='${element.icon}'</div>
            <div>${element.name}<br></div>
            </div>
    </li>`
    ));
    Ar.showhtml("root", htmlCode);

    $(document).ready(function(){ $('.friend_profile').click(function(){
           var id= this.attributes.id.value;
        
        console.log(id); 
    MSS.showMessageForm(arrayOfQuestions, id);
        });
    });

};



function showQuestions(){
    let htmlCode=Ar.arrayToHtml(arrayOfQuestions.map((element)=>
    `<li class="single_question_type" style="--my-color-var: ${element.color};"><p>${element.name}</p><i class="fas fa-angle-right"></i></li>`
    ));
    Ar.showhtml("root", htmlCode);
}
function showMessages(){
    let htmlCode=Ar.arrayToHtml(arrayOfQuestions.map((element)=>
    `<li class="single_question_type" style="--my-color-var: ${element.color};"><p>${element.name}</p><i class="fas fa-angle-right"></i></li>`
    ));
    Ar.showhtml("root", htmlCode);
}

 function closeForm(){
    Ar.showhtml("form", null); }
