var aTipoDePago = [],
    aFechaGasto = [],
    aTipoDeMonto = [],
    aCuentaUtilizada = [];

var aceptar = document.getElementById('AgregarCuenta');
var nuevoMotivo1 = document.getElementById('AgregarMotivo');

window.addEventListener('load', function(){
  nuevoGasto();
});

aceptar.addEventListener('click', registrarGasto);
nuevoMotivo1.addEventListener('click', agregarMotivo);

function vacio(r) {
  return (r===null || r===undefined || r==='');
}

function registrarGasto(){
      var gastos = (!vacio(localStorage.getItem('gastos'))) ? JSON.parse(localStorage.getItem('gastos')) : new Array();
      var gasto = [document.getElementById('TipoPago').value,
        document.getElementById('FechaGasto').value,
        document.getElementById('MontoA').value,
        document.getElementById('CuentaUtilizada').value];
      gastos.push(gasto);
      localStorage.setItem('gastos', JSON.stringify(gastos));
      nuevoGasto();
}

function nuevoGasto(){
  var gastos = (!vacio(localStorage.getItem('gastos'))) ? JSON.parse(localStorage.getItem('gastos')) : new Array();
  document.getElementById('Gastos').innerHTML = "";
  console.log(gastos);
  for (v of gastos) {
    var str = "<div><p class='Motivo'>" + v[0] + "</p><br>";
    str += "<p>Fecha: " + v[1] + "</p>";
    str += "<p>Monto: " + v[2] + "</p>";
    str += "<p>Cuenta utilizada: " + v[3] + "</p><br></div><br><br><br><div id='Margen'><p></p></div>";
    document.getElementById('Gastos').innerHTML += str;
  }
}

function agregarMotivo(){
  var nuevoMotivo = [];//(!vacio(localStorage.getItem('nuevoMotivo'))) ? JSON.parse(localStorage.getItem('nuevoMotivo')) : new Array();
  var nMotivo = document.getElementById('NombreMotivo').value;

  nuevoMotivo.push(nMotivo);
  localStorage.setItem('NuevoMotivo', JSON.stringify(nuevoMotivo));

  var select = (!vacio(localStorage.getItem('NombreMotivo'))) ? JSON.parse(localStorage.getItem('NombreMotivo')) : new Array();
  document.getElementById('Gastos').innerHTML = "";
  console.log(select);
  for (v of select) {
    var str = "<option>" + select + "</option>";
    document.getElementById('Gastos').innerHTML += str;
  }

}
