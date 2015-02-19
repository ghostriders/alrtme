function myfunc () {
var x, text;

x=document.getElementById("number").value;

    
if(isNaN(x) || x < 1 || x > 50 ) {

text="Input is not valid";
} else {
text="VALID input";
}

document.getElementById("demo").innerHTML=text;
}