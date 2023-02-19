
const formInput = document.querySelector('.contactForm');

const regEX = /^[a-zA-Z0-9@]{6,20}$/;
formInput.addEventListener('submit', (e)=>{
    e.preventDefault();
})

const valInput = formInput.email;


valInput.addEventListener('keydown', (e) =>{
    if (regEX.test(e.target.value)){
        valInput.setAttribute('class', 'success');
       

    }
    else{
        valInput.setAttribute('class', 'error');
      

    }
})
valInput.addEventListener('keydown', (e) =>{
    if (regEX.test(e.target.value)){
        valInput.setAttribute('class', 'form-control');
      
        

    }
    else{
        // valInput.setAttribute('class', 'form-control');
        

    }
})
 // promition
const deadline = '2024-02-19';
function getTimeRemaining(endtime){
    let days, hours, minuts, seconds;
    const timer = Date.parse(endtime) - Date.parse(new Date());
    days = Math.floor(timer / ( 1000 * 60 * 60 * 24));
    hours = Math.floor(timer / ( 1000 * 60 * 60) % 24);
    minuts = Math.floor(timer / ( 1000 * 60 ) % 60);
    seconds = Math.floor(timer / ( 1000 ) % 60);
    return { timer, days, minuts, hours, seconds};
}
function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`
    } else {
      return num
    }
  }

function setClock(selector, endtime){
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minuts = timer.querySelector('#minuts');
    const seconds = timer.querySelector('#seconds');
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock(){
        const t = getTimeRemaining(endtime);
        days.innerHTML =getZero( t.days);
        minuts.innerHTML = getZero(t.minuts);
        seconds.innerHTML = getZero(t.seconds);
        hours.innerHTML = getZero(t.hours);
        if (t.timer <=0 ){
            clearInterval(timeInterval);
        }

    }


}
setClock('.timer', deadline );

 //// soat vaqt


function getTimeRemaining2(){
    let days, hours, minuts, seconds;
    const timer = (new Date());
    days = timer.getDate();//// timer.getDay(); //    Math.floor(timer / ( 1000 * 60 * 60 * 24));
    hours =timer.getHours(); //  Math.floor(timer / ( 1000 * 60 * 60) % 24);
    minuts = timer.getMinutes(); // Math.floor(timer / ( 1000 * 60 ) % 60);
    seconds =timer.getSeconds();
    
     //  Math.floor(timer / ( 1000 ) % 60);
    return { timer, days, minuts, hours, seconds};
}


function setClock2(selector){
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days2');
    const hours = timer.querySelector('#hours2');
    const minuts = timer.querySelector('#minuts2');
    const seconds = timer.querySelector('#seconds2');
    const timeInterval = setInterval(updateClock, 1000);
    updateClock();

    function updateClock(){
        const t = getTimeRemaining2();
        days.innerHTML =( t.days);
        minuts.innerHTML = (t.minuts);
        seconds.innerHTML = (t.seconds);
        hours.innerHTML = (t.hours);
        if (t.timer <=0 ){
            clearInterval(timeInterval);
        }

    }

// get up date https://api.telegram.org/bot6082455594:AAFB_ssUPPkgYy7oZfmw7NhFlMzZ1kmn9aU/getUpdates
}
        setClock2('.timer2' );


        const button = document.querySelector('#submit');


        button.addEventListener('click', (e) =>{
        e.preventDefault();


        let token = '6082455594:AAFB_ssUPPkgYy7oZfmw7NhFlMzZ1kmn9aU';
        let chat_id = -482508163;

        let ismFamiliya = document.getElementById('name').value;
        let elek = document.getElementById('email').value;
        let telRaqam = document.getElementById('subject').value;
        let xabar = document.getElementById('message').value;
        let myText = `Foydalanuvchi ism familiyasi: ${ismFamiliya} %0A elektron pochtasi: ${elek}%0A tel raqami: ${telRaqam} %0A qisqacha matni ${xabar} `;
        // let url = `https://api.telegram.org/bot${token}sendMessage?chat_id${chat_id}&text=${myText}/`;
        let url = `https://api.telegram.org/bot6082455594:AAFB_ssUPPkgYy7oZfmw7NhFlMzZ1kmn9aU/sendMessage?chat_id=-891161029&text=${myText}`;
        let api = new XMLHttpRequest();
        api.open("GET", url, true);
        api.send();
        formInput.reset();
        
        xabarSuccess.style.display = 'block';
        
       
        // const habar = document.querySelector('.form-message-success');
        // habar.style.displey = 'block';

        })



const contact1 = document.querySelector('#contact1');
const tabss = document.querySelectorAll('.contact1');
        contact1.addEventListener('click', ()=>{
            console.log(contact1);
            if(!contact1.classList.contains('show')){
                contact1.classList.add('show');
            }
            else{
                contact1.classList.remove('show');
            }
        
         
        
        })


var xabarSuccess = document.querySelector('#form-message-success');
