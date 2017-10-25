function iniciar(){
  var boton = document.getElementById("boton");
  if(boton.addEventListener){
     boton.addEventListener("click", validar, false);
  }
  else if(boton.attachEvent){
     boton.attachEvent("onclick", validar);
  }

}
var validar = function(){
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
    alert("No se ha ingresado ningún valor en el campo de Nombre o formato incorrecto");
    return 0;
  } else { valido = true; };
  if(!validacion.validaLast(this.apellido)){
    valido = false;
    alert("No se ha ingresado ningún valor en el campo de Apellido o formato incorrecto");
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
    document.getElementById("badpass").innerHTML = "El formato de la contraseña debe de ser";
    return 0;
  } else { valido = true; };
  if(!validacion.validaDui(this.dui)){
    valido = false;
    alert("No se ha ingresado ningún valor en el campo de Dui o formato incorrecto");
    return 0;
  } else { valido = true; };
  if(!validacion.validaNit(this.nit)){
    valido = false;
    alert("No se ha ingresado ningún valor en el campo de NIT o formato incorrecto");
    return 0;
  } else { valido = true; };
    if(!validacion.validaPhone(this.celular)){
      valido = false;
      alert("No se ha ingresado ningún valor en el campo de Telefono o formato incorrecto");
      return 0;
    } else { valido = true; }
}
var validacion = {
  regExName : /^[\w\.\-\s]+$/,
  regExLast : /^[\w\.\-\s]+$/,
  regExAddress : /^[\w\.\-\s]+$/,
  regExPhone : /^[6|7|2]{1}\d{3}-\d{4}$/,
  regExPassword : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/,
  regExNit : /^[0-9]{4}-[0-9]{6}-[0-9]{3}-[0-9]{1}$/,
  regExDui : /^\d{8}-\d{1}$/,
  regExEmail : /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
  validaName : function(nombre){
    return  this.regExName.test(nombre);
  },
  validaLast: function(ape){
    return  this.regExLast.test(ape);
  },
  validaAddress: function(direccion){
    return this.regExAddress.test(direccion);
  },
  validaPhone: function(telefono){
    return this.regExPhone.test(telefono);
  },
  validaPassword: function(pass){
    return this.regExPassword.test(pass);
  },
  validaNit: function(nit){
    return this.regExNit.test(nit);
  },
  validaDui: function(dui){
    return this.regExDui.test(dui);
  },
  validaEmail: function(email){
    return  this.regExEmail.test(email);
  }
}
if(window.addEventListener){
window.addEventListener("load", iniciar, false);
}
else if(window.attachEvent){
window.attachEvent("onload", iniciar);
}
