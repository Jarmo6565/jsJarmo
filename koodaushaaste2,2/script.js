

//TEHTÄVÄ 1.

function pieninSuurin(taulu)
{
  taulu.sort((a,b) => a-b);
  var pienin = taulu.shift();
  var suurin = taulu.pop();
  console.log("taulukon pienin oli: " + pienin + " ja suurin oli: " + suurin);
}
pieninSuurin([8, 4, 9, 6, 2]);

              //TOINEN VAIHTOEHTO JOKA LAJITTELEE AAKKOSJARJESTYKSESSÄ eikä numerojärjestyksessä!!!!!
/*
function pieninSuurin(taulu)
{
var pienin = taulu.shift();
var suurin = taulu.pop();
console.log("taulukon pienin oli: " + pienin + " suurin oli " + suurin);
}
pieninSuurin([6,8,4,2,0,11,55,34,989]);
*/

//TEHTÄVÄ 2.

function parillinenPariton(luku)
{
  if(luku%2==0)
{
  console.log("luku on parillinen");
  }
  else{
    console.log("luku on pariton");
  }
}
parillinenPariton(15);



// TEHTÄVÄ 3.
function numeroNimeksi(numero)
{
  switch(numero)
  {
  case 1:
    console.log("Tammikuu");
    break;
  case 2:
    console.log("Helmikuu");
    break;
  case 3:
    console.log("Maaliskuu");
    break;
  case 4:
    console.log("Huhtikuu");
    break;
  case 5:
    console.log("Toukokuu");
    break;
  case 6:
    console.log("Kesäkuu");
    break;
  case 7:
    console.log("Heinäkuu");
    break;
  case 8:
    console.log("Elokuu");
    break;
  case 9:
    console.log("Syyskuu");
    break;
  case 10:
    console.log("Lokakuu");
    break;
  case 11:
    console.log("Marraskuu");
    break;
  case 12:
    console.log("Joulukuu");
    break;
  default:
    console.log("Et antanut arvoa välillä 1-12");
    }
  }
numeroNimeksi(8);



//TEHTÄVÄ 4.
class Osoiterekisteri
 {
 constructor(etunimi, sukunimi, lahiosoite, postinumero, postitoimipaikka, puhelin, sahkoposti)
  {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.lahiosoite = lahiosoite;
    this.postinumero = postinumero;
    this.postitoimipaikka = postitoimipaikka;
    this.puhelinnumero = puhelin;
    this.sahkoposti = sahkoposti;

  }
}

  var Jyri = new Osoiterekisteri("Jyri","Lindroos","Keskikatu 3", "04200", "Kerava","0401744562", "Jyri.Lindroos@keuda.fi");
  var Eija = new Osoiterekisteri("Eija", "Lumme" , "Keskikatu 3", "04200", "Kerava", "Eija.Lumme@keuda.fi");
  // ... ja sitten testataan!
  console.log(Jyri.sukunimi);
  console.log(Eija.postitoimipaikka);




function aakkosissa(teksti)
{
  var taulu = Array.from(teksti);     //muuttaa tekstin taulukoksi!!!
  console.log(taulu);
  taulu.sort();                       //muuttaa aakkosjärjestykseen kirjaimet
  console.log(taulu);
  teksti = taulu.join("").toString();     // .join -liittää ja poistaa pilkut
  return teksti;
}
console.log(aakkosissa("webmaster"));  // ilmoittaa sana kirjaimet aakkosjärjestykseen




function arviointi(pisteet)
{
    if(pisteet < 50)
  {
      return "Hylatty";
}
    else if(pisteet < 60)
  {
      return " T1";
    }
    else if(pisteet < 70)
    {
      return " T2";
    }
    else if(pisteet < 80)
    {
      return " H3";
    }
    else if(pisteet < 90)
    {
      return " H4";
    }
    else
      {
      return" K5";
      }
    }

    console.log("Daniel " + arviointi(80));
    console.log("Viivi " + arviointi(77));
    console.log("Tiina " + arviointi(88));
    console.log("Ismael " + arviointi(95));
    console.log("Tuomas " + arviointi(68));
