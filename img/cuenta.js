var ingresar = function(){
  var but= document.getElementById("bat");
  if(but.addEventListener){
     but.addEventListener("click", registrarDato, false);
  }
  else if(boton.attachEvent){
     but.attachEvent("onclick", registrarDato);
  }
}
function vacio(r) {
  return (r===null || r===undefined || r==='');
}
function registrarDato(){
  var cuenta = (!vacio(localStorage.getItem('cuenta'))) ? JSON.parse(localStorage.getItem('cuenta')) : new Array();
  var cuen = [document.frmcuenta.banco.value,
    document.frmcuenta.cuenta.value,
    document.frmcuenta.saldo.value];
  cuenta.push(cuen);
  localStorage.setItem('cuenta', JSON.stringify(cuenta));
  document.getElementById("mensaje").innerHTML="Cuenta agregada exitosamente";
  nuevoGasto();
}
function nuevoGasto(){
  var gastos = (!vacio(localStorage.getItem('cuenta'))) ? JSON.parse(localStorage.getItem('cuenta')) : new Array();
  document.getElementById('cuenta').innerHTML = "";
  console.log(gastos);
  for (v of gastos) {
    var str = "<div class='cuenta'><p> Nombre del banco: " + v[0] + "</p><br>";
    str += "<p>Fecha: " + v[1] + "</p>";
    str += "<p>Monto: " + v[2] + "</p>";
    document.getElementById('cuenta').innerHTML += str;
  }
}
window.addEventListener('load', function(){
  nuevoGasto();
})
window.addEventListener('onload', function(){
  nuevoGasto();
})
