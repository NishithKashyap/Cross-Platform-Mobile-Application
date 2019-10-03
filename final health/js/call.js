 l=window.localStorage;

function callemergency()
{
   l=window.localStorage;
    window.location.href="tel:+91"+parseInt(localStorage.getItem("number"));
    
}
function callfn()
{
    
    var nm=document.getElementById("id1").value;
    var ln=document.getElementById("id2").value;
    var mn=document.getElementById("id3").value;
    l.setItem("first name",nm)
    l.setItem("last name",ln)
    l.setItem("number",mn)
    window.location.href="index.html";
}