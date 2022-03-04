console.log ('JS OK');

const firstName = prompt ('Qual è il tuo nome?');
console.log(firstName);

const lastName = prompt ('Qual è il tuo cognome?');
console.log(secondName);

const color = prompt ('Qual è il tuo colore preferito?');
console.log(color);

const number = '21';
console.log(number);



// concatenazione con il +
const pw = firstName+lastName+color+number;
console.log(pw)


// concatenazione con il BackTick
const pwbacktick = `${firstName}${lastName}${color}21`;
console.log(pwbacktick)




// accedo all'elemento con id generatorpw e gli associo un testo interno
 document.getElementById('pw-generator').innerText= 'La tua password "sicura" è ' + pw;


