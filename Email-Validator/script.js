let apiKey=`ema_live_yM1XdVVw7ECUaFU2yktLEyMSDBoWyLOfFyJpm7Rj`;

let button=document.querySelector(".submit");

function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

button.addEventListener("click",async (evt)=>{
    evt.preventDefault();
    let msgDiv=document.querySelector(".results");
    msgDiv.innerHTML=`<img src="loading.svg" alt="Loading">`
    console.log("I am Clicked!!");
    let email=document.querySelector("#EmailId").value;
    if(isValidEmail(email)){
        let URL=`https://api.emailvalidation.io/v1/info?apikey=${apiKey}&email=${email}`;
        let str=``;
        let promiseApiCall=await fetch(URL);
        let response=await promiseApiCall.json();
        for(key of Object.keys(response)){
            if(response[key]!=="" && response[key]!==" "){
                str+=`<div>${key} : ${response[key]}</div>`;
            }
        }
        msgDiv.innerHTML=str;
    }
    else{
        msgDiv.innerHTML=`<div>Invalid Email Prototype</div>`;
    }
})