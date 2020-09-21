if (false) {
	require('p5');
}
let n = 30;
let p = 0.4; //propability of closed
let spotArr = [];
function setup() {
	createCanvas(400, 400);
	noStroke();
	let stepX = width / (n - 1);
	let stepY = height / (n - 1);
	for (let i = 0; i < n; i++) {
		spotArr.push([]);
		for (let j = 0; j < n; j++) {
			if (random(1) > p) {
				spotArr[i][j] = new spot(i * stepX, j * stepY, false);
			} else {
				spotArr[i][j] = new spot(i * stepX, j * stepY, true);
			}
		}
	}
	spotArr[0][0].closed = false;
	spotArr[n - 1][n - 1].closed = false;
}

function draw() {
	background(100);
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			spotArr[i][j].sketch();
		}
	}
	let result = findPath(spotArr);
	console.log(result);
	noLoop();
}

function findPath(spotArr, i = 0, j = 0) {
	if (i == n - 1 && j == n - 1) {
		return true;
	}
	let resultTemp = false;
	if (!(i + 1 > n - 1) && !(j + 1 > n - 1))
		if (!spotArr[i + 1][j + 1].closed) {
			strokeWeight(5);
			stroke(252, 76, 76);
			fill(252, 76, 76);
			line(
				spotArr[i][j].x,
				spotArr[i][j].y,
				spotArr[i + 1][j + 1].x,
				spotArr[i + 1][j + 1].y
			);
			resultTemp = findPath(spotArr, i + 1, j + 1);
			if (!resultTemp) {
				strokeWeight(5);
				stroke(252, 126, 126);
				fill(252, 126, 126);
				line(
					spotArr[i][j].x,
					spotArr[i][j].y,
					spotArr[i + 1][j + 1].x,
					spotArr[i + 1][j + 1].y
				);
			}
		}
	if (!(i + 1 > n - 1))
		if (!spotArr[i + 1][j].closed && !resultTemp) {
			strokeWeight(5);
			stroke(252, 76, 76);
			fill(252, 76, 76);
			line(
				spotArr[i][j].x,
				spotArr[i][j].y,
				spotArr[i + 1][j].x,
				spotArr[i + 1][j].y
			);
			resultTemp = findPath(spotArr, i + 1, j);
			if (!resultTemp) {
				strokeWeight(5);
				stroke(252, 126, 126);
				fill(252, 126, 126);
				line(
					spotArr[i][j].x,
					spotArr[i][j].y,
					spotArr[i + 1][j].x,
					spotArr[i + 1][j].y
				);
			}
		}
	if (!(j + 1 > n - 1))
		if (!spotArr[i][j + 1].closed && !resultTemp) {
			strokeWeight(5);
			stroke(252, 76, 76);
			fill(252, 76, 76);
			line(
				spotArr[i][j].x,
				spotArr[i][j].y,
				spotArr[i][j + 1].x,
				spotArr[i][j + 1].y
			);
			resultTemp = findPath(spotArr, i, j + 1);
			if (!resultTemp) {
				strokeWeight(5);
				stroke(252, 126, 126);
				fill(252, 126, 126);
				line(
					spotArr[i][j].x,
					spotArr[i][j].y,
					spotArr[i][j + 1].x,
					spotArr[i][j + 1].y
				);
			}
		}
	return resultTemp;
}
