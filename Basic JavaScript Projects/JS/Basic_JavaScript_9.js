function full_Sentence() 
{
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2,part_3,part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}
function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull boy.";
    var Section = Sentence.slice(27,33);
     var last_s =Section.toUpperCase();
     var b =20;
     var fix = 54.768452;
     var x= 13466.876543288765;
     document.getElementById("to_fixed").innerHTML= fix.toFixed(3);
     document.getElementById("value_of").innerHTML= Sentence.valueOf();
     document.getElementById("precision").innerHTML=x.toPrecision(10);
     document.getElementById("to_string").innerHTML=b.toString();
    document.getElementById("Slice").innerHTML = Section+ "   <br>Uper Case is:"+ last_s;
}