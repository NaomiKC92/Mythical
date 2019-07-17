class Sphinx {
	constructor() {
		this.riddles = [];
	}

	collectRiddle(collectedRiddle) {
		this.riddles.push(collectedRiddle);
		if (this.riddles.length > 3) {
			this.riddles.shift()
		}

	}

	attemptAnswer(answer) {
		var statement = ''
		this.riddles.forEach((riddle, index) => {
			if (riddle.answer === answer) {
				this.riddles.splice(index, 1);
				statement = 'That wasn\'t that hard, I bet you don\'t get the next one';
			}

		})

		return statement
		

	}
}



module.exports = Sphinx