function Presentation(slides) {
	this.slides = slides;
	this.index = this.slides.indexOf(location.hash);
	if (this.index === -1) window.location = this.slides[this.index = 0];
};

Presentation.prototype.move = function (len) {
	if ((this.index + len >= this.slides.length && len > 0) || (this.index + len < 0 && len < 0)) throw new Error("Moving outside slides range");
	window.location = this.slides[this.index += len];
};

Presentation.prototype.createKeyListeners = function(nextCode, prevCode) {
	document.addEventListener('keydown', (event) => {
		console.log(event);
		if (event.keyCode === nextCode) {
			this.move(1);
		}
		else if (event.keyCode === prevCode) {
			this.move(-1);
		}
	});
};

Presentation.prototype.createRemote = function () {
	if (!this.remote) {
		this.remote = document.createElement('body');

		const nextButton = document.createElement('button');
		nextButton.style.height = '100%';
		nextButton.style.width = '50%';
		nextButton.textContent = 'next';
		nextButton.onclick = () => {
			this.move(1);
		};
		this.remote.appendChild(nextButton);

		const backButton = document.createElement('button');
		backButton.style.height = '100%';
		backButton.style.width = '50%';
		backButton.textContent = 'back';
		backButton.onclick = () => {
			this.move(-1);
		};
		this.remote.appendChild(backButton);
	}

	window.open('', 'remote', "height=10px,width=300px")
		.document.body.appendChild(this.remote);
};
