document.write(typeof "what you want?");
document.write(typeof 4);
document.write(2E310);
document.write(-3E310);
document.write(10>2);
document.write(10<2);
document.write("10"+5);
console.log(2+2);
console.log(10>5);
document.write(10==10);
document.write(10===10);
A="Dog";
B="Cat";
document.write(A===B);
document.write(A==="Dog");
document.write(10===10);
document.write(5>2&&10>4);
document.write(1>2||2>4);
function my_Function() {
    document.getElementById("infnity_test").innerHTML=0/0;
    document.getElementById("infnity_test2").innerHTML=isNaN('This is a string');
    document.getElementById("infnity_test3").innerHTML=isNaN('007');
}
function not_Function(){
    document.getElementById("Not").innerHTML=!(5>10);
    
}
function not1_Function(){
    
    document.getElementById("Not1").innerHTML=!(11>10);
}