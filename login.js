function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if (username=="admin" && password=="santiago1")

{
    
    window.open("home.html");
    return false;
}

if (username=="admin1" && password=="santiago2")

{
    alert("Ingreso Exitoso");
    window.open("home.html");
    return false;
}
else 
{
    alert("Usuario o contraseña incorrecta");
    
}

}