var nom = new Array();
var ape = new Array();
var cor = new Array();
var pas = new Array();
var du = new Array();
var ni = new Array();
var cel = new Array();
var pre = new Array('¿Cuál es tu comida favorita?','¿Cuál es tu color favorito?','¿Cuál es tu bebida favorita?','¿Cuál era el nombre de tu primer mascota?','¿Cuál es tu país favorito?');
var fec = new Array();
var saldo = new Array();
var contador = 0;
function iniciar() {
 var boton = document.getElementById("boton");
 var loge = document.getElementById("log")
 if(boton.addEventListener){
 boton.addEventListener("click", validar, false);
 }
 else if(boton.attachEvent){
 boton.attachEvent("onclick", validar);
 }
 if(loge.addEventListener){
 loge.addEventListener("click", validar, false);
 }
 else if(loge.attachEvent){
 loge.attachEvent("onclick", validar);
 }
 var x = Math.floor((Math.random() * (pre.length)));
 var y = pre[x];
 document.getElementById("pregunta").innerHTML = y;

}
function validar(){
  var nuevocorreo = document.frmlogeo.correo.value;
  var nuevopas = document.frmlogeo.contra.value;
 var nombre = document.frmregistro.nombre.value;
 var apellido = document.frmregistro.apellido.value;
 var correo = document.frmregistro.email.value;
 var pass = document.frmregistro.apellido.value;
 var dui = document.frmregistro.dui.value;
 var nit = document.frmregistro.nit.value;
 var celular = document.frmregistro.celular.value;
 var fecha = document.frmregistro.fecha.value;
 var valido = false;
 var re = null;
 //alert(dato + "|" + tipo);
 if(nombre == null || nombre == "" || nombre.length == 0){
 valido = false;
 alert("No se ha ingresado ningún valor en el campo de Nombreo format o incorrecto");
 return 0;
 }else if (nombre != null || nombre != "" || nombre.length != 0) {
     re = /^[\w\.\-\s]+$/;
     if(re.test(nombre)){
     valido = true;
     }
 };
 if(apellido == null || apellido == "" || apellido.length == 0){
valido = false;
 alert("No se ha ingresado ningún valor en el campo de Apellido o formato incorrecto");
 return 0;
 }else if (apellido != null || apellido != "" || apellido.length != 0) {
     re = /^[\w\.\-\s]+$/;
     if(re.test(apellido)){
     valido = true;
     }
 };
 if(correo == null || correo == "" || correo.length == 0){
   valido = false;
   alert("No se ha ingresado ningún valor en el campo Contraseña o formato incorrecto");
   return 0;
   }else if (correo != null || correo != "" || correo.length != 0){
     re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
     if(re.test(correo)){
     valido = true;
   }
 };
 if(pass == null || pass == "" || pass.length == 0){
   valido = false;
   alert("No se ha ingresado ningún valor en el campo Contraseña o formato incorrecto");
   return 0;
   }else if (pass != null || pass != "" || pass.length != 0){
     re = /([a-zA-Z0-9_\-\.]+) @ ([a-zA-Z0-9\-]+)\.([a-zA-Z0-9\-\.]+){8,15}$/;
     if(re.test(pass)){
     valido = true;
   }
 };
   if(dui == null || dui == "" || dui.length == 0){
    valido = false;
   alert("No se ha ingresado ningún valor en el campo de DUI o formato incorrecto");
   return 0;
}else if(dui != null || dui != "" || dui.length != 0){
       re = /^\d{8}-\d{1}$/;
       if(re.test(dui)){
       valido = true;
       alert("Dui Valido");
       }
   };
   if(nit == null || nit == "" || nit.length == 0){
   valido = false;
   alert("No se ha ingresado ningún valor en el campo de NIT o formato incorrecto");
   return 0;
   }else if(nit != null || nit != "" || nit.length != 0){
       re = /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/;
       if(re.test(nit)){
       valido = true;
       }
   };
   if(celular == null || celular == "" || celular.length == 0){
   valido = false;
   alert("No se ha ingresado ningún valor en el campo de Telefono o formato incorrecto");
   return 0;
   }else if(celular != null || celular != "" || celular.length != 0){
       re = /^[6-7]{1}\d{3}-\d{4}$/;
       if(re.test(celular)){
       valido = true;
       }
   };
   if(fecha == null || fecha == "" || fecha.length == 0){
   alert("No se ha ingresado ningún valor en el campo de Fecha");
   return 0;
   valido = false;
   }else if(fecha != null || fecha != "" || fecha.length != 0){
       re = /^\d{1,2}\/\d{1,2}\/\d{2,4}$/;;
       if(re.test(fecha)){
       valido = true;
       }
   };
   if(valido = false){
   }else{
     for(i=0;i<=contador-1;i++){
       if(correo == cor[i]){
         alert("El correo que ha ingresado ya ha sido registrado");
         i = contador-1;
         valido = false;
         contador += 0;
       }else{
         valido = true;
       }
   };
 }
   if (valido = true){
    añadir();
    contador += 1;
    console.log(contador);
    for(i=0; i<=contador-1;i++){
      nom[i],ape[i],cor[i],pas[i],du[i],ni[i],cel[i],
      pre[i],fec[i],saldo[i]=0;
      logeo(nuevocorreo,nuevopas);
    }
   }
   //funcion validar
}
function añadir(){

  addnom = document.frmregistro.nombre.value;
  nom.push(addnom);
  console.log(addnom);
  addlast = document.frmregistro.apellido.value;
  ape.push(addlast);
  console.log(addlast);
  addcor = document.frmregistro.email.value;
  cor.push(addcor);
  console.log(addcor);
  addpass = document.frmregistro.password.value;
  pas.push(addpass);
  console.log(addpass);
  adddui = document.frmregistro.dui.value;
  du.push(adddui);
  console.log(adddui);
  addnit = document.frmregistro.nit.value;
  ni.push(addnit);
  console.log(addnit);
  addcelular = document.frmregistro.celular.value;
  cel.push(addcelular);
  console.log(addcelular);
  addfecha = document.frmregistro.fecha.value;
  fec.push(addfecha);
  console.log(addfecha);
  saldo.push(0);
  alert("Registrado exitosamente")
}
function logeo(nuevocorreo,nuevopas,nuevosaldo){
  for(j=0;j<=contador-1;j++){
    if(nuevocorreo==cor[j]){
      if (nuevopas==pas[j]) {
        alert("Bienvenido");
        if(saldo[1]==0){
          prompt("Ingrese el saldo de su cuenta: ");
        }
      }
    }else {
      alert("Correo o contraseña incorrectos, intentalo de nuevo");
    }
  }
}
//Asociando función que manejará el evento load al cargar la página
 if(window.addEventListener){
 window.addEventListener("load", iniciar, false);
 }
 else if(window.attachEvent){
 window.attachEvent("onload", iniciar);
}//funcion iniciar
