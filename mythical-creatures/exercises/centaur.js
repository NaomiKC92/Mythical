class Centaur {
	constructor(name, breed) {
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.counter = 0;
		this.layingDown = false;

	}

	shoot() {
		this.counter++;
		if (this.counter >= 3) {
			this.cranky = true;
		}

		if (this.layingDown == true) {
			return 'NO!';
		}

		if (this.cranky == true) {
			return 'NO!';
		} else { return 'Twang!!!';
	}}


	run() {
		this.counter++;
		if (this.counter >= 3) {
			this.cranky = true;
		}

		if (this.layingDown == true) {
			return 'NO!'
		}

		return 'Clop clop clop clop!!!'
	}

	sleep() {
		this.cranky = false;

		if (this.standing == true) {
			return 'NO!';
		}

		return 'ZZZZ';
	}

	layDown() {
		this.standing = false;
		this.layingDown = true;

	}

	standUp() {
		this.standing = true;
		this.layingDown = false;
	}


}







module.exports = Centaur