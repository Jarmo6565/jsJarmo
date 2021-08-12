//Kirjoita ohjelma, joka muunttaa käyttäjän antaman sanan salasanaksi siten,
//että laittaa joka toiseksi kirjaimeksi ison ö-kirjaimen, eli josta
//sana on Kaappi - -> KÖaÖaÖpÖpÖiÖ


//               Tehtävä 2.
//******************************************************************************

    function salaSana2()
        {
          var salasanat = document.getElementById('salasanat').value;
          var salasana = "<p>";
          for(var x = 0; x < salasanat.length; x++)
          {
            salasana += salasanat[x] + 'Ö-' ;
          }
            salasana += "</p>";
          document.getElementById('salasana').innerHTML = salasana;
        }

//     Laittaa salasanan jokaisen kirjaimen väliin nimen Jyri
//******************************************************************************
