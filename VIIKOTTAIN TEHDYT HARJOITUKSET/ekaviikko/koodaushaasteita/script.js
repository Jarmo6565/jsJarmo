


function laskeYhteen(luku1, luku2)
{
  var summa;
  summa = luku1 + luku2;
  return summa;
}
// Kutsutaan functiota
console.log(laskeYhteen(2,3));


function ekaMuuttuja()
{
  var taulukkomuuttuja = [34,566,71,89];

  console.log(taulukkomuuttuja[3]);
}


function tehtavaKolme(a, b)
{
  if((4 + 6) < 100)
{
    console.log("Lukujen summa on alle 100");
  }
    else {
    console.log("Luvut ovat liian suuria, jotta pystyisin laskemaan");
    }
  }


  function tehtavaNelja(a,b)
  {
    if (a == b)
    {
      console.log("Samat");
    }
    else {
      console.log("Eri luvut");
    }
  }



  function tehtavaViisi(a,b,c)
  {

    var aika = a * 3600 + b * 60 + c;
    return aika;
  }
    console.log(tehtavaViisi(10,10,10));

    //1 minuutti = 60sekunttia --> 60 minuuttia = 60 * 60 sekunttia = 3600 sekunttia



  function paiviksi(spaiva, skuukausi, svuosi)
  {
      svuosi = svuosi * 365.25;
      switch(skuukausi)
    {
        case 1:
          spaiva = spaiva;
          break;
        case 2:
          spaiva = spaiva + 31;
          break;
        case 3:
          spaiva = spaiva + 59;
          break;
        case 4:
          spaiva = spaiva + 90;
          break;
        case 5:
          spaiva = spaiva + 120;
          break;
        case 6:
          spaiva = spaiva + 151;
          break;
        case 7:
          spaiva = spaiva + 181;
          break;
        case 8:
          spaiva = spaiva + 212;
          break;
        case 9:
          spaiva = spaiva + 243;
          break;
        case 10:
          spaiva = spaiva + 273;
          break;
        case 11:
          spaiva = spaiva + 304;
          break;
          case 12:
          spaiva = spaiva + 334;
          break;
        }
        return svuosi + spaiva;
    }
  console.log(paiviksi(17,3,2021)-paiviksi(22,5,1965));
