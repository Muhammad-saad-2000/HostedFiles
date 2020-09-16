console.log('Console tools loaded successfully');
function skipPortion(s, e) {
	var video = document.getElementsByTagName('video')[0];
	video.loop = true;
	setInterval(() => {
		if (video.currentTime > s && video.currentTime < e) {
			video.currentTime = e;
		}
	}, 1000);
}