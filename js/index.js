var pre = new Array('¿Cuál es tu comida favorita?','¿Cuál es tu color favorito?','¿Cuál es tu bebida favorita?','¿Cuál era el nombre de tu primer mascota?','¿Cuál es tu país favorito?');
var resp = new Array();
var user = {};
var correo = {};
var password = {};
var contador = 0;
function iniciar() {
  var bot = document.getElementById("bot");
  if(boton.addEventListener){
     boton.addEventListener("click", validar, false);
  }
  else if(boton.attachEvent){
     boton.attachEvent("onclick", validar);
  }
  if(bot.addEventListener){
     bot.addEventListener("click", logeo, false);
  }
  else if(bot.attachEvent){
     bot.attachEvent("onclick", logeo);
  }
 var x = Math.floor((Math.random() * (pre.length)));
 var y = pre[x];
 document.getElementById("pregunta").innerHTML = y;

}
var validar=function(){
  this.nombre = document.frmregistro.nombre.value;
  this.apellido = document.frmregistro.apellido.value;
  this.correo = document.frmregistro.email.value;
  this.pass = document.frmregistro.password.value;
  this.dui = document.frmregistro.dui.value;
  this.nit = document.frmregistro.nit.value;
  this.celular = document.frmregistro.celular.value;
  this.fecha = document.frmregistro.fecha.value;
  this.valido = false;
  this.re = null;
  if(!validacion.validaName(this.nombre)){
    valido = false;
    alert("Revisa los datos");
    document.getElementById("badn").innerHTML = "El formato del nombre esta malo";
    return 0;
  } else { valido = true; };
  if(!validacion.validaLast(this.apellido)){
    valido = false;
    alert("Revisa los datos");
    document.getElementById("badl").innerHTML = "El formato del apellido esta malo";
    return 0;
  } else { valido = true; };
  if(!validacion.validaEmail(this.correo)){
    valido = false;
    alert("Revisa los datos");
    document.getElementById("bade").innerHTML = "El formato del email debe de ser $$$@$$$.com";
    return 0;
  } else { valido = true; };
  if(!validacion.validaPassword(this.pass)){
    valido = false;
    document.getElementById("badpass").innerHTML = "La contraseña debe tener minimo una minuscula, una mayuscula, un simbolo, entre 8 a 15 caracteres";
    return 0;
  } else { valido = true; };
  if(!validacion.validaDui(this.dui)){
    alert("Revisa los datos");
    document.getElementById("baddui").innerHTML = "El formato del DUI es nnnnnnnnn-m";
    return 0;
  } else { valido = true; };
  if(!validacion.validaNit(this.nit)){
    valido = false;
    alert("Revisa los datos");
    document.getElementById("badnit").innerHTML = "El formato del NIT es ####-######-###-#";
    return 0;
  } else { valido = true; };
    if(!validacion.validaPhone(this.celular)){
      valido = false;
      alert("Revisa los datos");
      document.getElementById("badn").innerHTML = "El formato del telefono es ####-####";
      return 0;
    } else { valido = true; }
   if (valido = true){
     añadir();
   }
   //funcion validar
}
var añadir = function (){
  var user = {
    nombre : document.frmregistro.nombre.value,
    apellido : document.frmregistro.apellido.value,
    dui : document.frmregistro.dui.value,
    email : document.frmregistro.email.value,
    password : document.frmregistro.password.value,
    nit : document.frmregistro.nit.value,
    celular : document.frmregistro.celular.value,
    fecha : document.frmregistro.fecha.value
  };
  var us = (localStorage.user!==undefined && localStorage.user!==null) ? JSON.parse(localStorage.user) : new Array() ;
  us.push(user);
  localStorage.user = JSON.stringify(us);
  /**/
  var correo = {
    email : document.frmregistro.email.value,
  };
  var cor = (localStorage.email!==undefined && localStorage.email!==null) ? JSON.parse(localStorage.email) : new Array() ;
  cor.push(correo);
  localStorage.email = JSON.stringify(cor);

  var password = {
    password : document.frmregistro.password.value,
  };
  var pass = (localStorage.password!==undefined && localStorage.password!==null) ? JSON.parse(localStorage.password) : new Array() ;
  pass.push(password);
  localStorage.password = JSON.stringify(pass);
  localStorage.count = JSON.stringify(contador);
  alert("Registrado exitosamente");
  limpiar();
}
function limpiar(){
  document.frmregistro.nombre.value="";
  document.frmregistro.apellido.value="";
  document.frmregistro.dui.value="";
  document.frmregistro.email.value="";
  document.frmregistro.password.value;
  document.frmregistro.nit.value="";
  document.frmregistro.celular.value="";
  document.frmregistro.fecha.value="";
}
function logeo(){
  var storedEmail = localStorage.email;
  var storedPass = localStorage.password;
  var actualEmail = document.frmlogeo.ncorreo.value;
  var actualPass = document.frmlogeo.ncontra.value;
   if(storedEmail!=actualEmail && storedPass!=actualPass){
     alert("Bienvenido");
     location.href = "primera.html";
  }else{
    alert("Hola");
    location.href = "html/principial.html";
  }
}
//Asociando función que manejará el evento load al cargar la página
 if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
 }
 else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}//funcion iniciar
