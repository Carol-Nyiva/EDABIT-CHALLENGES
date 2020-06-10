//Create a function that takes the number of wins, draws and losses
// and calculates the number of points a football team has obtained so far.
// A win receives 3 points, a draw 1 point and a loss 0 points.

//Inputs will be numbers greater than or equal to 0.

function footballpoints(wins,draws,loss)
{
  wins = wins * 3;
  draws = draws * 1;
  loss = loss * 0;

  return wins + draws + loss;
}

console.log('MAN U = ' +footballpoints(7 , 4 , 1));
console.log('CHELSEA = ' +footballpoints(3 , 4 , 3));
console.log('WATFORD = ' +footballpoints(7 , 8 , 4));
console.log('MAN CITY = ' +footballpoints(16 , 2 , 1));
