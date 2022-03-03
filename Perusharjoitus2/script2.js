
//******************************************************************************
//        Tehtävä 2.  Etsi suurin numero

//var taulu = [];

//document.get.getElementById("isotPisteet").innerHTML = maxPisteet(pisteet);

//function maxPisteet(taulu)
//{
  //return Math.max.apply(null, taulu);

  //document.getElementById('lukujenTulostusJ').innerHTML = '<p>Luvut järjestyksessään ' + taulu[0] + ' ja suurin luku '+ taulu[taulu.length-1];
//}

/*function etsiSuurinPienin()
{
var taulu = [], temp;
for(var x = 0; x < 5; x++)
{
  temp = document.getElementById('taulukko[x]');
  temp = parseInt(temp);
  taulu.push(temp);
//alert(taulu);
}
taulu = taulu.sort((a,b) => a-b);
document.getElementById('lukujenTulostusT').innerHTML = '<p>Suurin luku on '+ taulu[taulu.length-1];
}*/



function etsiSuurin()
  {
    var l1, l2, l3, l4, l5, suurin;
    l1 = parseInt(document.getElementById('luku1').value);
    l2 = parseInt(document.getElementById('luku2').value);
    l3 = parseInt(document.getElementById('luku3').value);
    l4 = parseInt(document.getElementById('luku4').value);
    l5 = parseInt(document.getElementById('luku5').value);
    if(l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
    {
      suurin = l2;
    }
    else if(l1 < l3 && l4 < l3 && l5 < l3)
    {
      suurin = l3;
    }
    else if(l1 < l4 && l5 < l4)
    {
      suurin = l4;
    }
    else if(l1 < l5)
    {
      suurin = l5;
    }
    else {
      suurin = l1;
    }
    document.write("Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5);
    document.write("<br>Suurin niistä on: " + suurin);


  //console.log("Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5).innerHTML = suurin;
    //document.getElementById("Suurin niistä on").innerHTML = + l1, l2, l3, l4, l5, suurin;

  }
