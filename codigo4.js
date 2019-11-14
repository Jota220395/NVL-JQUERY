$(document).ready(function(){
	$(".2").click(function(){
  $(".2").css({"background-color": "red",
				"border":"black solid 4px"});
});

});

function pulsar(e) {
  tab = document.getElementById('tabla');
  filas = tab.getElementsByTagName('tr');
  if (e.keyCode==38 && fila>0) num=-1;
   else if(e.keyCode==40 && fila<filas.length-1) num=1;
   else return;
  filas[fila].style.background = 'white';
  fila+=num;
  filas[fila].style.background = 'yellow';
}