let ageJohn = 22;
let heightJohn = 170;
let scoreJohn = ageJohn * 5 + heightJohn;
let ageMike = 34;
let heightMike = 168;
let scoreMike = ageMike * 5 + heightMike;
console.log(`john score: ${scoreJohn}`);
console.log(`mike score: ${scoreMike}`);

if (scoreMike == scoreJohn) {
  console.log(`Unentschieden! Keiner hat gewonnen`);
} else if (scoreMike > scoreJohn) {
  console.log(`Mike gewinnt das Spiel mit ${scoreMike} Punkten`);
} else {
  console.log(`John gewinnt das Spiel mit ${scoreJohn} Punkten`);
}
