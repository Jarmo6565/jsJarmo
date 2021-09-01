//Kirjoita ohjelma, joka tekee
// taulukon kaikista kortti pakankorteista (2 sisäkkäistä silmukkaa) ja
//sen jälkeen sekoittaa "pakan"ja arpoo 5 korttia sieltä
//taulukon kaikista kortti pakan korteista (2 sisäkkäistä silmukkaa) ja
//sen jälkeen sekoittaa "pakan" ja arpoo 5 korttia sieltä
function arvoKortit()
{
  var korttipakka = [''];
  var maat = [' pata ',' risti ',' hertta ',' ruutu '];
  var numerot = [' 2 ',' 3 ',' 4 ',' 5 ',' 6 ',' 7 ',' 8 ',' 9 ',' 10 ',' Jätkä ',' Rouva ',' Kuningas ',' Ässä '];
  laskuri = 0;
  for(m = 0; m < maat.length; m++)
  {
    for(n = 0; n < numerot.length; n++)
    {
      if(m == maat.length-1 && n == numerot.length-1)
      {
        korttipakka[laskuri] = maat[m] + numerot[n];
      }
      else
      {
        korttipakka[laskuri] =  maat[m]+numerot[n];
        laskuri++;
      }
    }
  }

  // tässä kohtaan valitaan 5 kortti
  var kortit = [];
  for(l = 0; l < 5; l++)
  {
    // tässä kohtaan arvotaan arvotaan 52 kortin pakasta 5 korttia
    temp = korttipakka[Math.floor(Math.random()*52)];
    kortit[l] = temp;
  }
  // lähetetään tieto pääohjelmaan id:llä parttikokka
  document.getElementById('parttikokka').innerHTML = '<p>'+kortit+'</p>';
}
