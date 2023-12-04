/* footer date */

const d = new Date()
let year = d.getFullYear()
document.getElementById ("yr").innerHTML = year

/* button alert */

function balrt() {
    alert ("ouchie dont poke me, it hurts !")
}

/* button hover */

document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'i dare you !';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'click me !';
};

/* incrementing button */

let count = 1;
document.getElementById('btn-counter').onclick = function() => {
     count = count + 1;
     document.getElementById('txt-counter').innerHTML = + count;
}
