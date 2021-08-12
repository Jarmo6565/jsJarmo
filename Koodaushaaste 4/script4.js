


//  <p id="tutkittava"> Merkkijono jossa on etsittävä merkki! </p>

//<button onclick="etsiMerkki()"> Etsi Merkki </button>

//<p id="merkki"></p>

//<script>
 function etsiMerkki() {
  teksti = document.getElementById("tutkittava").innerHTML;
  document.getElementById("merkki").innerHTML = /a/, /e/, /i/, /o/, /u/, /y/, /ä/, /ö/.exec(teksti);
 }
//</script>
