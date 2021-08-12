

// Kirjoita ohjelma, joka laskee 10 ensimmäistä numeroa yhteen

//                            Tehtävä 7.
//******************************************************************************
function laskeYhteen()
{
  yhteensa = 0;
  for(var y = 1; y <=10; y++)
  {
    yhteensa += y;
  }
  document.getElementById('lukujenTulostusY').innerHTML = '<p>'+ yhteensa +'</p>';
}


//******************************************************************************
