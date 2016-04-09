window.onload = function() {
	var canvas = document.getElementById("canvas"),
		context = canvas.getContext("2d"),
		width	= canvas.width = window.innerWidth,
		height  = canvas.height = window.innerHeight;

	var centerY    = height * .5,
		centerX    = width * .5,
		baseRadius = 100,
		speed      = 0.1,
		offset     = 50,
		angle      = 0;

	render();
	var limit = 100;

	function render() {
		var radius = baseRadius + Math.sin(angle) * offset;
		if (limit-- > 0) console.log(Math.sin(angle));

		context.clearRect(0, 0, width, height);
		context.beginPath();
		context.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
		context.fill();

		angle += speed;


		/*
		(function animloop(){
  			requestAnimFrame(animloop);
  			render();
		})();
		*/
		requestAnimationFrame(render);
	}

	//setInterval(render, 10);
};