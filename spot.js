class spot {
	constructor(x, y, closed) {
		this.x = x;
		this.y = y;
		this.closed = closed;
	}
	sketch() {
		if (this.closed) {
			fill(0);
			ellipse(this.x, this.y, 5, 5);
		} else {
			noFill();
			ellipse(this.x, this.y, 5, 5);
		}
	}
}
