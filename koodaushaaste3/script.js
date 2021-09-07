


//  *********************************

  //         TEHTÄVÄ 1. Armstrong


//  ********************************




  function armstronginLuvut()
  {
    var lt; //lukuTaulukoksi
    var laskuri = 0;
    for(var x = 100; x < 1000; x++)
    {
      lt = x.toString().split('');
      // console.log(i + " " + x[0]+x[1]+x[2])
      if(Math.pow(lt[0],3)+Math.pow(lt[1],3)+Math.pow(lt[2],3) == x)
      {
        console.log(x);
   }
  }
}
armstronginLuvut();


//*********************************************



          //   Tehtävä 2. kuvio



//********************************************

    function tahdet()
    {
      var x,y,chr;
      for(x = 1;  x <= 6; x++)
      {
        for(y = 1; y < x; y++)
        {
          chr=chr+("*")
        }
        console.log(chr);
        chr='';
      }
    }
        tahdet();


//******************************************


          //   Tehtävä 3. koodikieli


//******************************************


function testi(jono)
{
  taulukko = Array.from(jono);
  for(i = 0; i < jono.length; i++)
  {
  switch(taulukko[i])
  {
  case "a":
    taulukko[i] = 4;
    break;
  case "e":
    taulukko[i] = 3;
    break;
  case "i":
    taulukko[i] = 1;
    break;
  case "o":
    taulukko[i] = 0;
    break;
  case "s":
    taulukko[i] = 5;
    break;
  }
}
teksti = taulukko.toString().replace(/,/g,'');
console.log("ohjelmointi on hauskaaaaaaa");
}



//*******************************************


        //  4. Tehtävä Hik-up


//*******************************************


function testi()
  {
    for(i = 1;i <= 100; i++)
    {
      if(i%5 == 0)
      {
        console.log('Hik-up');
      }
      else if(i%5 == 0)
      {
        console.log('up');
      }
      else if(i%3 == 0)
      {
        console.log('Hik');
      }
      else{
        console.log(i);
      }
    }
  }
