function addition_F(){
    var addition = 2+2;
    var sbt = 5-2;
    document.getElementById("Math").innerHTML = "2+2="+addition, sbt;
    
}
function subtraction_F(){
    
    var sbt = 5-2;
    
    document.getElementById("sub").innerHTML = "5-2="+ sbt;
}
function multiplication(){
    
    var simple_math= 6*4;
    
    document.getElementById("math1").innerHTML = "6*4="+ simple_math;
}
function division(){
    
    var simpl_Math = 48 / 6;
    
    document.getElementById("math2").innerHTML = "48/6=" + simpl_Math ;
}
function more_Math(){
    
    var simpl_Math = (1+2)*10/2-5;
    
    document.getElementById("math3").innerHTML = " 1 plus 2, multiplied by 10,/ divided   half and then subtracted by 5 equals " + simpl_Math ;
}
function modulus_Operator() {
    var simpl_Math = 25 % 6;
    document.getElementById("math4").innerHTML=" When you divide 25 by 6 you a remainder of:"+ simpl_Math;

}
function negation_Operator(){
    var x = 10;
    document.getElementById("math5").innerHTML= -x;
}
function incrment_decrement(){
    var x=2;
    var y=3
    document.write(++x,--y);


}
function random_F() {
    
    document.getElementById("math5").innerHTML=window.alert(Math.random()*10);

}
function math_op(){
    document.getElementById("math6").innerHTML=Math.pow(4,2);
}