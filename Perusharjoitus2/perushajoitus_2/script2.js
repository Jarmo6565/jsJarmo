
//******************************************************************************
//        Tehtävä 2.  Etsi suurin numero

//var taulu = [];

//document.get.getElementById("isotPisteet").innerHTML = maxPisteet(pisteet);

//function maxPisteet(taulu)
//{
  //return Math.max.apply(null, taulu);

  //document.getElementById('lukujenTulostusJ').innerHTML = '<p>Luvut järjestyksessään ' + taulu[0] + ' ja suurin luku '+ taulu[taulu.length-1];
//}

function etsiSuurinPienin()
{
var taulu = [], temp;
for(var x = 0; x < 3; x++)
{
temp = document.getElementById('tpuu['+x+']').value;
temp = parseInt(temp);
taulu.push(temp);
//alert(taulu);
}
taulu = taulu.sort((a,b) => a-b);
document.getElementById('lukujenTulostusT').innerHTML = '<p>Luvut järjestyksessään pienimmäisestä ' + taulu[0]  + ' ja suurin luku on '+ taulu[taulu.length-1];
}
