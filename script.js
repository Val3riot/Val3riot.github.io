function validateForm(){
    var x = document.getElementById("inputT").nodeValue;
    console.log(x);
    if(x == "nano 000.html"){
        location.replace("http://127.0.0.1:5500/reports/000.html")
    }
}

function myFunction() {
    location.replace("https://www.w3schools.com")
  }






var d = new Date();
document.getElementById("time").innerHTML = d;
var link = validateForm();

