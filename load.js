$(document).ready(function(){
	console.log("BISH IM READY!!");

	$("h1").animate(
	{
		color:"red"
		
	}, 

	1000, 

	function(){
		console.log("done!");
	}

	);
	
})