function gotoStart () {
	window.location.assign("game.html");
}

$(document).ready(function(){
  $("#submit").click(function(){
        $.post("./assets/regist.php",
		{
		fullname: $("#fullname").val(),
		email: $("#email").val()
		},
		function(data, status){
		alert("Data: " + data );
		});
  });
});