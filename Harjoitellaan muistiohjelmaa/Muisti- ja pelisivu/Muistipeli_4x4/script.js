/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it                  /* Pudotusvalikko  */
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}

// -------------------------------------------------------



let clickedCard = null;
let preventClick = false;
let combosFound = 0;

function onCardClicked(e) {
  const target = e.currentTarget;

if (
  preventClick ||
  target === clickedCard ||
  target.className.includes('done')
) {
  return;
}

target.className = target.className
  .replace('color-hidden', '')
  .trim();
target.className += ' done';

  if (!clickedCard) {
    //if we haven't clicked a card, keep track of the card, display it's color
    clickedCard = target;
  } else if (clickedCard) {
    // if we have already clicked a card, check if the new card matches the old card
    if (
      clickedCard.getAttribute('data-color') !==
      target.getAttribute('data-color')
    ) {
      preventClick = true;
      setTimeout(() => {
       clickedCard.className =
        clickedCard.className.replace('done', '').trim() +
        ' color-hidden';
     target.className =
       target.className.replace('done', '').trim() +
        ' color-hidden';
       clickedCard = null;
       preventClick = false;
      }, 500);
    }else {
      combosFound++;
      clickedCard = null;
      if (combosFound === 16) {
        alert('YOU WIN!');
      }
    }
  }
}
