function A(){
     console.log("A - Você chamou o procedimento A)");
}

function B (){
     console.log("B - procedimento B presente, chamou?");
    C();
}

function C (){
     console.log("C - Oi, sou o procedimento C, o B quem me chamou");
}
 function D(){
     console.log("D- sou o procedimento D e chamo todo mundo, Veja");
     A();
     B();
 }

A();
B();
D();

