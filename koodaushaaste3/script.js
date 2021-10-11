  //*********************************

  //         TEHTÄVÄ 1. Armstrong


//********************************
//Ensimmäisessä haasteessa näette silmukoiden voiman, sillä tässä
// tehtävässä tehdään silmukka 900 kertaa, jotta
//löydetään kaikki kolmenumeroiset Amstrongin luvut.
//Armstrongin luku on sellainen, jonka yksittäisten lukujen
//kuutiojuurten summa on sama kuin itse luku, eli a3+b3+c3 = abc,
//eräänä esimerkkinä tästä 371 = 33 + 73 + 13 = 27 + 343 + 1 = 371.
//Jotta pystytte tekemään tämän, teidän pitää pystyä muuttamaan luku
//taulukoksi ja se tapahtuu esimerkiksi näin taulukkoLuku = luku.toString().split(’’);
//Vihjeenä voin sanoa, että vastaukseen tulee 4 lukuarvoa, joista yksi on tuo 371.


  function armstronginLuvut()
  {
    var lt; //lukuTaulukoksi
    var laskuri = 0;
    for(var x = 100; x < 1000; x++)
    {
      lt = x.toString().split('');
      // console.log(i + " " + x[0]+x[1]+x[2])
      if(Math.pow(lt[0],3)+Math.pow(lt[1],3)+Math.pow(lt[2],3) == x)
      {
        console.log(x);
   }
  }
}
armstronginLuvut();

//*********************************************



            // Tehtävä 2. kuvio



//********************************************
//Toinen, huomattavasti helpompi haaste, on
// tulostaa seuraavanlainen kuvio näytölle:

    function tahdet()
    {
      var x,y,chr;
      for(x = 1;  x <= 6; x++)
      {
        for(y = 1; y < x; y++)
        {
          chr=chr+("*")
        }
        console.log(chr);
        chr='';
      }
    }
    tahdet();



//******************************************


             //Tehtävä 3. koodikieli


//******************************************
// Tee funktio, joka muuttaa ”koodikieleksi”
//annetun merkkijonon: koodikieleksi(”ohjelmointi
// on hauskaa”) ja tulostaa sen konsoliin
// 0Hj3lm01nt1 on h4u5k44, eli muunnat kaikki.
//a-kirjaimet 4:ksi
//e-kirjaimet 3:ksi
//o-kirjaimet 0:ksi
//i-kirjaimet 1:ksi
//s-kirjaimet 5:ksi

function testi(jono)
{
  taulukko = Array.from(jono);
  for(i = 0; i < jono.length; i++)
  {
  switch(taulukko[i])
  {
  case "a":
    taulukko[i] = 4;
    break;
  case "e":
    taulukko[i] = 3;
    break;
  case "i":
    taulukko[i] = 1;
    break;
  case "o":
    taulukko[i] = 0;
    break;
  case "s":
    taulukko[i] = 5;
    break;
  }
}
teksti = taulukko.toString().replace(/,/g,'');
console.log("ohjelmointi on hauskaÄÄ");
}





//*******************************************


        //  4. Tehtävä Hik-up


//*******************************************
//Kirjoita ohjelma, joka tulostaa consoliin luvut 1 – 100,
//mutta siten, että jos luku on 3:lla jaollinen, näytölle
//tulostuukin ’Hik’ ja jos se on 5:llä jaollinen, näytölle
//tulostuukin ’up’ ja jos luku on sekä 3:lla, että 5:llä
//jaollinen, näytölle tulostuu ’hik-up’.




    for(n = 1; n <= 100; n++)
    {
      if (n%3 == 0 && n%5==0)
      {
        console.log('Hik-up');
      }
      else if(n%5 == 0)
      {
        console.log('up');
      }
      else if(n%3 == 0)
      {
        console.log('Hik');
      }
      else {
        console.log(n);
      }
    }
