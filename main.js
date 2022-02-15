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
// // odstavec.classList.toggle("paragraph");

// function onMouse() {
//     odstavec.classList.toggle("paragraph");
//     paragraph.style.color = 'red'
// }


function setBold() {
odstavec.style.fontWeight = 'bold'

}

function setNormal() {
odstavec.style.fontWeight = 'normal'

}