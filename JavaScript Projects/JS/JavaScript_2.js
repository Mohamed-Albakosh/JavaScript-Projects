function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    var y=document.forms["myForm"]["lname"].value;
    var z=document.forms["myForm"]["country"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
    if (y == ""){
        alert("Last name must be filled out");
      return false;
    }
  }