

//happy path prints the value of x//
 var x = 50;
 document.write (x);
 
 //*** Nasty path wont't display value of x//
 var x = 50;
 document.write ();
 
 //Happy Path prints value of x just a little longer process//
 var x;
 x= 50;
 document.write (x);
 
 //happy path displays x and a message//
 var x, message;
 x = 50;
 message = "x is equal to ";
 document.write (message); //prints value of message variable
 document.write (x); //prints value of x
 
 //Happy Path displays output in one line//
  var x, message;
  x = 50;
  message = "x is equal to ";
  document.write (message, x); //prints value of message variable and x variable on the same line
  
  //***Nasty path will not display output//
   var x, message;
   x = 50;
   message = "x is equal to ";
   document.write x; //need () parameter