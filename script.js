var clicks = 0;
		var images = ["smoke1.png", "smoke2.png"];
		var timeoutId = null;

		function incrementClicks() {
			clicks++;
			document.getElementById("clicks").innerHTML = clicks;
			var image = document.getElementById("image");
			image.src = images[1];
			clearTimeout(timeoutId);
			timeoutId = setTimeout(function() {
				image.src = images[0];
			}, 100);
		};
    localStorage.setItem('clicks', JSON.stringify(clicks));
    
    // Retrieve game data
    var retrievedData = localStorage.getItem('clicks');
    var parsedData = JSON.parse(retrievedData);
    console.log(parsedData); // Output: { level: 5, score: 1200, lives: 3 }