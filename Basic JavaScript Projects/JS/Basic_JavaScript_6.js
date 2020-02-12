function Rider(height){
    this.Height = height;
    
}
var rider= new Rider(60);
function Ride_Function(){
    var Can_ride;
    //Height = document.getElementById("Height").value;
    Can_ride = (rider.Height < 52) ? "You are too short":"You are tall enough ";
    document.getElementById("New_and_This").innerHTML = Can_ride + "  to ride";
}
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() { Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}