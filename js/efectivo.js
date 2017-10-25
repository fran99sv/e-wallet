window.addEventListener('load', function(){
  nuevoGasto();
})
function vacio(r) {
  return (r===null || r===undefined || r==='');
}
function nuevoGasto(){
  var banco = (!vacio(localStorage.getItem('monto'))) ? JSON.parse(localStorage.getItem('monto')) : new Array();
  var oc = JSON.parse(localStorage.getItem('monto'));

  document.getElementById('efectivo').innerHTML = "";
  console.log(oc[0].mont);
  v=oc[0].mont;
    var str = "<div id='efectivo'>";
    str += "<h2>Tu monto en efectivo es: </h2><br>";
    str += "<p class='efect'>"  + oc[0].mont +  "</p><br>";
    document.getElementById('efectivo').innerHTML += str;

}
