var answers = 0;

alert( 'Hey there! Today you all are going to learn a little about me 😄' );
var userName = prompt('Lets start by getting your name first.' );
console.log( 'User name is: ' + userName );

alert( 'Sweet, thank you ' + userName + '! Let\'s continue.' );

var toughQuestion = prompt('This first question is tough, are you ready to continue?').toLowerCase();
console.log( toughQuestion + ' ' + userName + ' is ready to continue!' );

if ( toughQuestion === 'yes' || toughQuestion === 'y' ) {
  alert('Sweet lets continue!');
} else {
  alert( 'Okay then, I understand 😭' );
  answers ++;
}

var pokemonQuestion = prompt ('Is my favorite Pokemon Charizard?').toLowerCase();
console.log( userName + ' picked: ' + pokemonQuestion + ', to my favorite pokemon being Charizard.' );

if ( pokemonQuestion === 'no' || pokemonQuestion === 'n') {
  alert( 'That\'s correct. Wow I am super impressed, It is Sylveon!');
} else {
  alert('Oh, dang sorry ' + userName + '.' + ' It is actually Sylveon!');
  answers ++;
}

var birthPlace = prompt('Was I born in Portland?').toUpperCase();
console.log('Does ' + userName + ' think I was born in Portland? ' + birthPlace + '!');

if (birthPlace === 'YES' || birthPlace === 'n') {
  alert('haha ya, Portlandia ftw!');
} else {
  alert( 'Of course I was, silly goose.');
  answers ++;
}

var coffee = prompt( 'Do I like coffee?').toLowerCase();
console.log(userName + ' thinks I like coffee? ' + coffee);

if (coffee === 'no' || coffee === 'n') {
  alert('Ding, Ding, Ding! Correct, I do not like coffee.');
} else {
  alert('Oh, sorry incorrect. I do not like coffee.');
  answers ++;
}

var skyDive = prompt( 'Have I been sky diving?').toLowerCase();
console.log('Do you think I have been sky diving ' + userName + '? ' + skyDive);

if ( skyDive === 'yes' || skyDive === 'y') {
  alert( 'Hell ya! Such an amazing experience, highly recommend.');
} else {
  alert('I might be scared of heights, but yes I have been sky diving.');
  answers ++;
}

var red = prompt( 'Is my favorite color Red?').toLowerCase();
console.log(userName + ' Thinks red is my favorite color? ' + red);

if ( red === 'yes' || red === 'n') {
  alert( 'No way! It is Sky Blue.');
} else {
  alert('You are right! Red is not my favorite color, it\'s Sky Blue.');
  answers ++;
}

for (var i = 0; i < 4; i ++ ) {
  var miles = parseInt(prompt('How many miles did I run yesterday?'));
  console.log('User thinks Zach ran ' + miles + ' miles.' );

  if (miles === 0) {
    alert('Sad but true.');
    console.log('Sad but true.');
    break;
  } else if (miles < 0 ) {
    alert('haha no way! Thats low.');
  } else if ( miles > 0 ) {
    alert(' A little high!');
  } else {
    alert('Please enter a #');
    answers ++;
  }
}

for (var i = 0; i < 6; i ++ ) {
  var cityLived = [ 'aloha', 'beaverton', 'tigard', 'hillsboro' ];
  var userGuess = prompt('Which cities in Oregon do you think I have lived in? Besides Portland!!').toLowerCase();
  console.log('User thinks I have lived in: ' + userGuess );

  if (cityLived.indexOf (userGuess) === -1) {
    alert('Oh dang, that is wrong. Try Again! ' + ( 5 - i) + ' tries left.');
    if (i === 5 ) {
      alert('Here are all the answers! ' + cityLived );
    }
  } else {
    alert('Omgsh ya! How did you know?');
    answers ++;
    break;
  }
}

alert(userName + ' you got ' + we + ' questions right!');