function Call_Loop()
{
    var Digit = "";
    var X = 1;
    while (X<11)
       {
           Digit += "<br>"+ X;
           X++
       }
      document.getElementById("Loop").innerHTML = Digit;

}
function str_length()
{
var n;
var   str = "this cours about loop stetment";
n = str.length;
document.getElementById("length").innerHTML=n;
}
var instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin","Trumpet","Flute"];
var Content ="";
var Y;
function for_Loop(){
    for (Y = 0; Y<instruments.length; Y++)
      {
          Content += instruments[Y]+"<br>";
      }
      document.getElementById("List_of_Instruments").innerHTML = Content;
}
function array_Function()
{
    var Cat_Picture = [];
    Cat_Picture[0]= "sleeping";
    Cat_Picture[1]= "playing";
    Cat_Picture[2]= "eating";
    Cat_Picture[3]= "purring";
    document.getElementById("Array").innerHTML = "In this picture, the cat is "+
    Cat_Picture[2]+".";
}
function Content_function(){
    const Musical_Instrument = {type:"guitar", brand:"fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price ="$1000";
    Musical_Instrument.type = "caman"
    document.getElementById("Constant").innerHTML = "The cost of the " +
    Musical_Instrument.type + "was"+ Musical_Instrument.price;
}
var X=82;
document.write(X)
{
    let X = 33;
    document.write("<br>"+X);

}
document.write("<br>"+X)
function Object_functiom(){
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2020 ",
    color: "red",
    description: function() {
        return "The car is a "+this.year + this.color +this.make +this.model;
    }

};
document.getElementById("Car_Object").innerHTML = car.description();
}
function brea_function() // this function illustrate break  and continue statments
{
var text1 = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { break; }
  text1 += "The number is " + i + "<br>";
}

document.getElementById("break").innerHTML = text1;
var text = "";
var i;
for (i = 0; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}
document.getElementById("continue").innerHTML = text;
}