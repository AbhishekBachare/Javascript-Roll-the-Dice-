



function roll() {

     document.getElementById("number1").style.border="";
     document.getElementById("number2").style.border="";
     document.getElementById("number3").style.border="";
    document.getElementById("number4").style.border="";
     document.getElementById("number5").style.border="";
     document.getElementById("number6").style.border="";

     document.getElementById("number7").style.border="";
    document.getElementById("number8").style.border="";
     document.getElementById("number9").style.border="";
     document.getElementById("number10").style.border="";
    document.getElementById("number11").style.border="";
    document.getElementById("number12").style.border="";

    document.getElementById("span1").innerHTML = " ";
    document.getElementById("span2").innerHTML = " ";

 roll2();

}

function roll2() {


    var number1 = document.getElementById("number1");
    var number2 = document.getElementById("number2");
    var number3 = document.getElementById("number3");
    var number4 = document.getElementById("number4");
    var number5 = document.getElementById("number5");
    var number6 = document.getElementById("number6");

    var number7 = document.getElementById("number7");
    var number8 = document.getElementById("number8");
    var number9 = document.getElementById("number9");
    var number10 = document.getElementById("number10");
    var number11 = document.getElementById("number11");
    var number12 = document.getElementById("number12");
    var result=document.getElementById("span3");

    var dice1 = parseInt(Math.random() * 6) + 1;
    var dice2 = parseInt(Math.random() * 6) + 1;

   var add1=document.getElementById("span1").innerHTML = dice1;
   var  add2= document.getElementById("span2").innerHTML = dice2;

    if (add1 == 1) {
        number1.style.border = "10px blue solid";
    }
    if (add1 == 2) {
        number2.style.border = "10px blue solid";
    }
    if (add1 == 3) {
        number3.style.border = "10px blue solid";
    }
    if (add1 == 4) {
        number4.style.border = "10px blue solid";
    }
    if (add1 == 5) {
        number5.style.border = "10px blue solid";
    }
    if (add1 == 6) {
        number6.style.border = "10px blue solid";
    }


    //
    if (add2 == 1) {
        number7.style.border = "10px blue solid";
    }
    if (add2 == 2) {
        number8.style.border = "10px blue solid";
    }
    if (add2 == 3) {
        number9.style.border = "10px blue solid";
    }
    if (add2 == 4) {
        number10.style.border = "10px blue solid";
    }
    if (add2 == 5) {
        number11.style.border = "10px blue solid";
    }
    if (add2 == 6) {
        number12.style.border = "10px blue solid";
    }

    document.getElementById("span1").innerHTML = dice1;
    document.getElementById("span2").innerHTML = dice2;

    document.getElementById("span3").innerHTML=dice1+dice2;

}