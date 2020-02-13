function Vote_Function(){
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age< 18) ? "You are not old enough to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Can_vote;
}
X=10;

function Add_number_1(){
    document.write("X="+X+"<br>");
}
function Add_number_2(){
    document.write("X="+X+"<br>");
}
function Add_number_3(){
    Y=20;
    document.write("Y="+Y+"<br>");
}
function Add_number_4(){
    document.write("Y="+Y+"<br>");
}
function get_Date() {
    if (new Date().getHours()<18)
      {
         document.getElementById("Greeting").innerHTML = "How are you today";
      }
}
function Age_Function()
{
    Age = document.getElementById("Age").value;
    if (Age >= 18)
       {
           Vote = "You are old enough to vote!";
       }
    else 
      {
          Vote = "You are not old enough to vote";
      }
      document.getElementById("How_old_are_You?").innerHTML= Vote;
}
function Time_function()
{
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time >0)
      {
          Reply = "It is morning time.";
      }
      else if (Time >12 == Time <18)
          {
              Reply = "It is afternoon time."
          }
      else
         {
             Reply = "It is evening time.";
         }
         document.getElementById("Time_of_day").innerHTML = Reply;
}