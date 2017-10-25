//Funcion para tomar los datos del formulario cuando el usuario recien se logea
function Formulario(){
  var Saldo = parseFloat(document.getElementById('inputMonto').value); //Almacena el saldo del usuario

  var NombreBanco = document.getElementById('nombreBanco').value; //Almacena el nombre de banco del usuario
  var NumeroCuenta = parseFloat(document.getElementById('numeroCuenta').value); //Almacena el numero de cuenta del usuario
  var SaldoActual = parseFloat(document.getElementById('saldoActual').value); //Almacena el saldo que posee en la cuenta de ahorro

  document.getElementById('Saldo').innerHTML = "$" + Saldo; //Muestra el saldo del usuario en una ventana modal
}

//Despliega la ventana modal para mostrar el saldo
function DesplegarSaldo(_valor){
  document.getElementById('ModalSaldo').style.visibility = _valor;
}

//Despliega la ventana modal para agregar una nueva cuenta de ahorro
function DesplegarAgregarCuenta(_valor){
  document.getElementById('ModalAgregarCuenta').style.visibility = _valor;
}

//Despliega la ventana modal para agregar un nuevo motivo
function DesplegarAgregarMotivo(_valor){
  document.getElementById('ModalAgregarMotivo').style.visibility = _valor;
}

//Despliega la ventana modal para agregar una nueva tarjeta de credito
function DesplegarAgregarTarjeta(_valor){
  document.getElementById('ModalAgregarTarjeta').style.visibility = _valor;
}

//Despliega la ventana modal para mostrar las estadisticas mensuales
function DesplegarMensuales(_valor){
  document.getElementById('ModalMensuales').style.visibility = _valor;
}

//Despliega la ventana modal para mostrar las estadisticas anuales
function DesplegarAnuales(_valor){
  document.getElementById('ModalAnuales').style.visibility = _valor;
}

//Despliega la ventana modal para mostrar las estadisticas segun el periodo que el usuario indique
function DesplegarPeriodo(_valor){
  document.getElementById('ModalPeriodo').style.visibility = _valor;
}
