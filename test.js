// var studentsArr = ['Haley', 'Meryl', 'Joe'];
// if ( studentsArr.length === 3 && studentsArr[2] === 'Joe' ) {
//   alert( 'hi joe!' );
// }

var commits = [];
var totalCommits = 0;

//example for loop:

for (var i = 0; i < 13; i ++ ) {
  console.log( 'loop #' + i );
  var commits = prompt('How many commits did you make yesterday?');
  commits.push( commit );
}

console.log( 'array of the commits:' + commits);

//example do loop:

do {
  console.log( '........ inside do loop!');
  var commit = prompt( 'how many commits did you make yesterday?' );
  commits.push( commit );
  //totalCommits = totalCommits + commit;

  console.log( commits.length );
} while ( commits.length < 10 );

//parseInt

//example while loop:

while ( totalCommits < 100 ) {
  console.log( '......... inside while loop!');
  var commit = prompt( 'how many commits did you make yesterday?' );
  commits.push( commit );
  totalCommits = totalCommits + commit;

  console.log( 'total commits: ' + totalCommits);
}

var passwords = [ 'while', 'unordered', 'attribute'];

do {
  var guess = prompt( 'What is the password?' ).toLowerCase();
  console.log( guess, passwords );
} while ( passwords.indexOf( guess ) === -1 );