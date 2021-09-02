


/*


function testi(arr)
{
  arr.sort();
  var pienin = arr.shift();
  var suurin = arr.pop();
  console.log("Pienin: " + pienin + " ja suurin: "+ suurin);
}


//**************************************

function testi(nro)
{
  if(nro2%==0)
{
  console.log("parillinen");
  }
  else{
    console.log("pariton");
  }
}

//******************************************

function testi(kk)
{
  switch(kk)
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
    console.log("Heinäikuu");
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


//***************************************************


function testi(etunimi, sukunimi, lahiosoite, pnro,
ptp, puh, email)
  {
    this.etunimi = etunimi,
    this.sukunimi = sukunimi,
    this.lahiosoite = lahiosoite,
    this.postinumero = pnro,
    this.postitoimipaikka = ptp,
    this.puhelinnumero = puh,
    this.sahkoposti = email

  }
  var Jyri = new testi("Jyri", "Lindroos",
  "Keskikatu 3", "04200", "Kerava",
  "0401744562", "jyri.lindroos@keuda.fi");
  console.log(Jyri.sukunimi);


//**************************************


function testi(teksti)
{
  var taulukkoteksti = Array.from(teksti);
  taulukkoteksti.sort();
  // .join -liittää
  // ("") poistaa pilkut
  var text = taulukkoteksti.join('');
  console.log(text);
}

//****************************************
*/

function testi(nimi, koe)
{
    if(koe < 50)
  {
    console.log(nimi + "Hylatty");
}
    else if(koe < 60)
  {
      console.log(nimi + " T1");
    }
    else if(koe < 70)
    {
      console.log(nimi + " T2");
    }
    else if(koe < 80)
    {
      console.log(nimi + " H3");
    }
    else if(koe < 90)
    {
      console.log(nimi + " H4");
    }
    else
      {
        console.log(nimi + " K5");
      }
    }
