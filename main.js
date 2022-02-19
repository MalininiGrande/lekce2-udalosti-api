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

let odstavec = document.querySelector('p')
// odstavec.classList.toggle("AddRed");

let AddRed = document.querySelector("p")

function changeToRed() {
   odstavec.classList.toggle("AddRed");
    // AddRed.style.color = 'red'
}

function makeBigger() {
    odstavec.style.fontSize = "larger" 
}

function setBold() {
odstavec.style.fontWeight = 'bold'
}

function setNormal() {
odstavec.style.fontWeight = 'normal'
}




