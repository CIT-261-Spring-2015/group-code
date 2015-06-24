 if (cards[0].value >= cards[1].value + cards[2].value) {
       display.innerHTML = cards[0].value;
   }
   //if card [0] was greater than either card
   else if (cards[0].value >= cards[1].value && cards[2].value) {


       display.innerHTML = cards[0].value;
   }
   // if card [1] is greater than any other two cards combined
   else if (cards[1].value >= cards[0].value + cards[2].value) {

       display.innerHTML = cards[1].value;
   }

   //if card [1] was greater than either card
   else if (cards[1].value >= cards[0].value && cards[2].value) {


       display.innerHTML = cards[1].value;

   }


   // if card [2] is greater than any other two cards combined
   else if (cards[2].value >= cards[0].value + cards[1].value) {

       display.innerHTML = cards[2].value;
   }

   //if card [2] was greater than either card
   else if (cards[2].value >= cards[0].value && cards[1].value) {


       display.innerHTML = cards[2].value;

   }


   // if card [0 and 1] are greater than card 2
   else if (cards[0].value + cards[1].value >= cards[2].value) {

       display.innerHTML = cards[0].value + cards[1].value;
   }




   // if card [0 and 2] are greater than card 1
   if (cards[0].value + cards[2].value >= cards[1].value) {

       display.innerHTML = cards[0].value + cards[2].value;
   }


   // if card [1 and 2] are greater than card 0
   else if (cards[1].value + cards[2].value >= cards[0].value) {

       display.innerHTML = cards[1].value + cards[2].value;
   }
   /// all cards must be of the same suit therefor add all 3 together
   else {
       display.innerHTML = "total of all: " + total;
   }