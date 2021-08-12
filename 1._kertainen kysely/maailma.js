
<script language="JavaScript">

var nimitaulu = ["A","E","I","N","S","T"];
var nimitaulu = ["O,"Ä","K","L"];
var nimitaulu = ["U","M",];
var nimitaulu = ["Y","H","J","P","R","V"];
var nimitaulu = ["Ö","D"];
var nimitaulu = ["A","E","I","N","S","T"];
var nimitaulu = ["B","F","G"];
var nimitaulu = ["C"];
var nimitaulu = ["LOPUT KIRJAIMET"];

function haeyksi(nro){

	//haetaan haluttu nimi taulusta
	return nimitaulu[nro];
}

function haeNimi(){

	//kysytään kuinka mones
	var mones = window.prompt("Anna järjestysnumero:","0");
	var mones = window.prompt("Anna järjestysnumero:","0");

	//haetaan nimi, muutetaan mones luvuksi kertomalla mones ensin 1:llä
	var nimi = haeyksi(1*mones);
	//ilmoitetaan nimi
	window.alert(nimi);

}

</script>

<input type="button" value="Hae nimi" onClick="haeNimi();" />
