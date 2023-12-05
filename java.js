/* footer date */

const d = new Date()
let year = d.getFullYear()
document.getElementById ("yr").innerHTML = year

/* button hover */

document.getElementById('btn-alert').onmouseover = () => {
    document.getElementById('btn-alert').innerText = 'i dare you!';
};

document.getElementById('btn-alert').onmouseleave = () => {
    document.getElementById('btn-alert').innerText = 'click me !!';
};

/* button alert */

function balrt() {
    alert("ouchie dont poke me, it hurts !");
};

/* incrementing button */

let count = 1;
document.getElementById('btn-counter').onclick = () => {
     count = count + 1;
     document.getElementById('txt-counter').innerHTML = "likes — "+count
     if ( count % 2 == 0){
        document.getElementById("txt-counter").classList.remove('odd');
        document.getElementById("txt-counter").classList.add('even');
     }
     else {
        document.getElementById("txt-counter").classList.remove('even')
        document.getElementById("txt-counter").classList.add('odd')
     }
}
/* loops 

const numbersList = document.getElementById('numbers')

for (let i = 1; i <= 100; i = i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i % 2 == 0 ? 'even' : 'odd';
    numbersList.append(listItem)

  }

  console.log(i); */

const numbersList = document.getElementById('numbers')

for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li')
    listItem.textContent = i % 2 === 0 ? 'Even' : 'Odd' ;
    numbersList.appendChild(listItem);
}


