function henkilo(etuNimi, sukuNimi, ika)
{
  this.etunimi = "etunimi";         //kuuluuku hipsut????;
  this.sukunimi = "sukunimi"        //kuuluuku hipsut????;
  this.ika = "ika";                 //kuuluuku hipsut????;
}

this.tiedot = NaytaTiedot;


function NaytaTiedot()
  {
    var etuNimi = this.etuNimi;
    var sukuNimi = this.sukuNimi;
    var ika = this.ika;


    document.write("Henkilön nimi on " + "etunimi"
  + " " + "sukukunimi" + " ja han on " + "ika"
  + "-vuotta vanha. ");
  }


var Hannu = new henkilo("Hannu", "Repo", 70);
var Heikki = new henkilo( "Heikki", "Huttunen", 34);
var Saija = new henkilo("Saija", "Sopanen", "ika", 18);
