function aakkosissa(teksti)
{
  var taulu = Array.from(teksti);     //muuttaa tekstin taulukoksi!!!
  //console.log(taulu);

  taulu.sort();
//  console.log(taulu);

  // .join -liittää ja poistaa pilkut
  teksti = taulu.join("").toString();
  return teksti;
}
console.log(aakkosissa("webmaster"));
