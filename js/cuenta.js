var aTipoDePago = [],
    aFechaGasto = [],
    aTipoDeMonto = [],
    aCuentaUtilizada = [];

var nuevoMotivo = [];


window.addEventListener('load', function(){
  nuevaC();
  var acept = document.getElementById('agre');
  if(acept.addEventListener){
  acept.addEventListener('click', registrarCuenta);
  }else if(boton.attachEvent){
    acep.addEventListener('onclick', registrarCuenta);
  }
});

function vacio(ss) {
  return (ss===null || ss===undefined || ss==='');
}

function registrarCuenta(){
      var cus = (!vacio(localStorage.getItem('Cuentas'))) ? JSON.parse(localStorage.getItem('Cuentas')) : new Array();
      var cu = [document.frcuenta.banco.value,
        document.frcuenta.cuenta.value,
        document.frcuenta.saldo.value];
      cus.push(cu);
      console.log(cu);
      localStorage.setItem('Cuentas', JSON.stringify(cus));
      nuevaC();
}

function nuevaC(){
  var cus = (!vacio(localStorage.getItem('Cuentas'))) ? JSON.parse(localStorage.getItem('Cuentas')) : new Array();
  document.getElementById('cuenta').innerHTML = "";
  console.log(cus);
  for(v of cus){
    var str = "<div><p>Nombre del banco: " + v[0] + "</p><br>";
    str += "<p>Número de cuenta: " + v[1] + "</p><br>";
    str += "<p>Saldo actual: " + v[2] + "</p><br><br>";
    document.getElementById('cuenta').innerHTML += str;
  }
}
if(window.addEventListener){
window.addEventListener("load", nuevaC, true);
}
else if(window.attachEvent){
window.attachEvent("onload", nuevaC);
}
