console.log ('JS OK');

const firstName = prompt ('Qual è il tuo nome?');
console.log(firstName);

const secondName = prompt ('Qual è il tuo cognome?');
console.log(secondName);

const color = prompt ('Qual è il tuo colore preferito?');
console.log(color);


const pw = firstName+secondName+color;
console.log(pw)




// accedo all'elemento con id generatorpw e gli associo un testo interno
 document.getElementById('pw-generator').innerText= 'La tua password "sicura" è ' + pw;


