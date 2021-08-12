function etsii()
  {
    var temp1, temp2;
    var jono = [];
    for(var x = 10; x <= 1000000; x++)
    {
      temp = x.toString();
      temp = temp.split();
      temp2 = kaanna(temp);
      if(temp == temp2 && (temp.toString().length) == (temp2.toString()).
    }
        jono.push(temp);
      }
    }
    console.log(jono.length);
}
function kaanna(num) {
  return (
    parsefloat (
      num
      .toString()
      .reverse()
      .join('')
    ) * Math.sign(num)
    )
}
etsi();
