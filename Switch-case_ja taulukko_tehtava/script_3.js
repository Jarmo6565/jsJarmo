


function haeNumerot(){

	var taulukko = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

  //tässä kerrotaan että tehdään taulukon seinät
  var tulostus = "<table border = '1'>";

 //tässä luetellan akioiden lukumäärät
	for (var x = 0 ; x < 5 ; x++){

  //tässä kerrotaan monta ruudukkoa tehdään alkioille
  //" montako huonetta kuuluu tähän"
    tulostus += "<tr>";

      //tässä luetellaan alkioitten sisällä olevat numerot
      for(var y =0 ; y < 4 ; y++) {

        // tässä kerrotaan alkioitten sisällä olevien numeroiteen määrä
        // "huonekalujen lukumäärä per huone"
        tulostus += "<td>" + taulukko [x][y] + "</td>";
      }
      tulostus += "</tr>";
  }
  			tulostus += "</table>";

      document.getElementById("taulukko").innerHTML = tulostus;
}
