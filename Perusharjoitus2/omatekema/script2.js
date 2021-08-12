
//******************************************************************************
//        Tehtävä 2.  Etsi suurin numero

var taulu = [];

document.get.getElementById("isotPisteet").innerHTML = maxPisteet(pisteet);

function maxPisteet(taulu)
{
  return Math.max.apply(null, taulu);

  document.getElementById('lukujenTulostusJ').innerHTML = '<p>Luvut järjestyksessään ' + taulu[0] + ' ja suurin luku '+ taulu[taulu.length-1];
}
