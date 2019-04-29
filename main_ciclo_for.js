// “Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.”

for ( var i = 1; i <= 100 ; i++ )
{
  if (i % 3 == 0 && i % 5 == 0)
  {
    document.getElementById('fizzy2').innerHTML += 'fizzbuzz' + '<br>';
  }
  else if (i % 5 == 0)
  {
    document.getElementById('fizzy2').innerHTML += 'buzz' + '<br>';
  }
  else if (i % 3 == 0)
  {
    document.getElementById('fizzy2').innerHTML += 'fizz' + '<br>';
  }
  else {
    document.getElementById('fizzy2').innerHTML += i + '<br>';
  }

}














//
// var y = 0;
// while (y < 100) {
// document.write (y);
//   y++;
// }
