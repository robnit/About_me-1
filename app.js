
alert( 'Hey there! Today you all are going to learn a little about me 😄' );
var userName = prompt('Lets start by getting your name first.' );
console.log( 'User name is: ' + userName );

alert( 'Sweet, thank you ' + userName + '! Let\'s continue.' );

var toughQuestion = prompt('This first question is tough, are you ready to continue?').toLowerCase();
console.log( toughQuestion + ' ' + userName + ' is ready to continue!' );

if ( toughQuestion === 'yes' | toughQuestion === 'y' ) {
  alert('Sweet lets continue!');
} else {
  alert( 'Okay then, I understand 😭' );
}

var pokemonQuestion = prompt ('Is my favorite Pokemon Charizard?').toLowerCase();
console.log( userName + ' picked: ' + pokemonQuestion + ', to my favorite pokemon being Charizard.' );

if ( pokemonQuestion === 'no' | pokemonQuestion === 'y') {
  alert( 'That\'s correct. Wow I am super impressed, It is Sylveon!');
} else {
  alert('Oh, dang sorry ' + userName + '.' + ' It is actually Sylveon!');
}

var birthPlace = prompt('Was I born in Portland?').toUpperCase();
console.log('Does ' + userName + ' think I was born in Portland? ' + birthPlace + '!');

if (birthPlace === 'YES' | birthPlace === 'y') {
  alert('haha ya, Portlandia ftw!');
} else {
  alert( 'Of course I was, silly goose.');
}

var coffee = prompt( 'Do I like coffee?').toLowerCase();
console.log(userName + ' thinks I like coffee? ' + coffee);

if (coffee === 'no' | coffee === 'y') {
  alert('Ding, Ding, Ding! Correct, I do not like coffee.');
} else {
  alert('Oh, sorry incorrect. I do not like coffee.');
}

var skyDive = prompt( 'Have I been sky diving?').toLowerCase();
console.log('Do you think I have been sky diving ' + userName + '? ' + skyDive);

if ( skyDive === 'yes' | skyDive === 'y') {
  alert( 'Hell ya! Such an amazing experience, highly recommend.');
} else {
  alert('I might be scared of heights, but yes I have been sky diving.');
}

var red = prompt( 'Is my favorite color Red?').toLowerCase();
console.log(userName + ' Thinks red is my favorite color? ' + red);

if ( red === 'yes' | red === 'y') {
  alert( 'No way! It is Sky Blue.');
} else {
  alert('You are right! Red is not my favorite color, it\'s Sky Blue.');
}