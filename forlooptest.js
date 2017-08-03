
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
  }
}

for (var i = 0; i < 6; i ++ ){
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
    break;
  }

}
