/*$(document).ready(function(){

        $("#setenta"),addClass("setenta");
        $("#ochenta"),addClass("ochenta");
        $("#noventa"),addClass("noventa");
});
*/

$(document).ready(function(){

	$("#btn").click(function(){
		$("p#heroes").parents().css({"border" : "5px solid red"});

	});
});

$(document).ready(function(){
$("div.nacional:eq(1)").children("p:eq(0)").addClass("alaska");
$("div.nacional:eq(1)").children("p:eq(1)").addClass("barricada");
$("div.nacional:eq(1)").children("p:eq(3)").addClass("mecano");
$("div.nacional:eq(1)").children("p:eq(4)").addClass("radio");
});

$(document).ready(function(){
	$("div.internacional:eq(1)").append("<p>queen</p>");
	$("div.internacional:eq(1)").children("p:last").attr('id', 'queen');
	});