



function sanaPisteet()
{
  var pisteet = 0;
  var sana = document.getElementById('sana').value;
  for(var i = 0; i < sana.length; i++)
  {
    let kirjain = sana[i];
    switch(kirjain)
    {
      case "A":
      case "E":
      case "I":
      case "N":
      case "S":
      case "T":
      case "a":
      case "e":
      case "i":
      case "n":
      case "s":
      case "t":
        pisteet += 1;
        break;

    case "O":
    case "A":
    case "K":
    case "L":
    case "o":
    case "a":
    case "k":
    case "l":
      pisteet += 2;
      break;

    case "U":
    case "M":
    case "u":
    case "m":
      pisteet += 3;
      break;

    case "Y":
    case "H":
    case "J":
    case "P":
    case "R":
    case "V":
    case "y":
    case "h":
    case "j":
    case "p":
    case "r":
    case "v":
      pisteet += 4;
      break;

    case "B":
    case "F":
    case "G":
    case "b":
    case "f":
    case "g":
      pisteet += 7;
      break;

    case "B":
    case "F":
    case "G":
    case "b":
    case "f":
    case "g":
        pisteet += 8;
        break;

    case "c":
      pisteet += 10;
      break;

    default:
        pisteet += 12;
      break;
      }
  }
  console.log(pisteet);
  document.getElementById("pisteet").innerHTML= pisteet;
}

function arvo()
{
  console.log("hippo");
  var numerot = [];

  for(i=0;i<7;i++) {
    numerot.push(Math.floor((Math.random() * 40) + 1));
  }
console.log(numerot);
document.getElementById("numerot").innerHTML = numerot.toString();
}

function randomInt(max) {
  return ;
}
