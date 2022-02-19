// tady je místo pro náš program

console.log('Ahoj, jsem nalinkovana');

let nadpis = document.querySelector('h1');
nadpis.classList.add('zluty');
nadpis.classList.remove('zluty');

let ctverecek = document.querySelector('div.zluty');
ctverecek.classList.add('ctverecek');


function priNajeti() {
console.log('test');
}

let odstavec = document.querySelector('p');
// let odstavec = 16 + "px";
// odstavec.classList.toggle("AddRed");

let AddRed = document.querySelector("p")

function changeToRed() {
   odstavec.classList.toggle("AddRed");
    // AddRed.style.color = 'red'
}

// function makeBigger() {
//     odstavec.style.fontSize = "larger" 
// }

x = 16;
function increaseSize(){
    x++; 
    document.querySelector(".text").style.fontSize = x+'px';
}



// function makeBigger() {
//     odstavec.style.fontSize = odstavec + 1
// }

function setBold() {
odstavec.style.fontWeight = 'bold'
}

function setNormal() {
odstavec.style.fontWeight = 'normal'
}


function playAudio() {
    let audioFile = document.querySelector("#zvuk");
    audioFile.play();
    console.log("play song");
}

function pause() {
    let audioFile = document.querySelector("#zvuk");
    audioFile.pause();
}

function mute() {
    let audioFile = document.querySelector("#zvuk");
    audioFile.muted = true;
}

function unmute() {
    let audioFile = document.querySelector("#zvuk");
    audioFile.muted = false;
}

function volumeAverage() {
    let audioFile = document.querySelector("#zvuk");
    audioFile.volume= 0.3;
}

function volumeMax() {
    let audioFile = document.querySelector("#zvuk");
    audioFile.volume = 1;
}


function rewind() {
    let audioFile = document.querySelector("#zvuk");
    audioFile.currentTime = 0;
}