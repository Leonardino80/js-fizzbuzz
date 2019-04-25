// “Fizz Buzz test: Scrivi un programma che stampi i numeri da 1 a 100
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.”

var i = 1;
while (i <= 100)
{
  if (i % 3 == 0 && i % 5 == 0)
  {
    document.getElementById('fizzy').innerHTML += 'fizzbuzz' + '<br>';
  }
  else if (i % 5 == 0)
  {
    document.getElementById('fizzy').innerHTML += 'buzz' + '<br>';
  }
  else if (i % 3 == 0)
  {
    document.getElementById('fizzy').innerHTML += 'fizz' + '<br>';
  }
  else {
    document.getElementById('fizzy').innerHTML += i + '<br>';
  }
  i++;
}














//
// var y = 0;
// while (y < 100) {
// document.write (y);
//   y++;
// }
