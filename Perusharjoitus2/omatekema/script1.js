
//Viikon 2 perustehtävä ensimmäiset harjoitukset
//Tee ohjelma, joka pyytää käyttäjältä kolmea numeroa ja laittaa ne järjestykseen
//Tehtävä 1.

function etsiSuurinPienin()
{
var taulu = [], temp;
for(var x = 0; x < 3; x++)
{
temp = document.getElementById('puu['+x+']').value;
temp = parseInt(temp);
taulu.push(temp);
//alert(taulu);
}
taulu = taulu.sort((a,b) => a-b);
document.getElementById('lukujenTulostusT').innerHTML = '<p>Luvut järjestyksessään ' + taulu[0] + ' ja suurin luku '+ taulu[taulu.length-1];
}
