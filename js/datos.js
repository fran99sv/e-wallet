$(document).ready(function(){
   var datos = { type: "pie", data : { 
      datasets : [ { data : [ 500, 210,500,100],
      backgroundColor: ["#46BFBD","#F7464A","#FDB45C","#949FB1","#4D5360",],}],
      labels : ["Ingresos","Gastos","Cuentas de ahorro","Tarjetas de crédito",]},
      options : {responsive : true,}
};

   var canvas = document.getElementById('chart').getContext('2d');
   window.pie = new Chart(canvas, datos);

   setInterval(function(){
      
      datos.data.datasets.splice(0);
         
      var newData = {
         backgroundColor : ["#F7464A","#46BFBD",],
         data : [getRandom(), getRandom(), getRandom(), getRandom(), getRandom()]
      };

      datos.data.datasets.push(newData);

      window.pie.update();

      }, 5000000000000);

      function getRandom(){
         return Math.round(Math.random() * 100);
      }
});