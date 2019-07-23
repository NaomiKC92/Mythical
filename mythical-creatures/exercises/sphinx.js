class Sphinx {
	constructor() {
		this.riddles = [];
		this. heroesEaten = 0;
	};

	collectRiddle(collectedRiddle) {
		this.riddles.push(collectedRiddle);
		if (this.riddles.length > 3) {
			this.riddles.shift()
		};
	};

	attemptAnswer(guess) {
		for (var i = 0; i < this.riddles.length; i++) { if (this.riddles[i].answer === guess && this.riddles.length > 0) {
					this.riddles.splice(i, 1);
					return 'That wasn\'t that hard, I bet you don\'t get the next one';
				} else if (this.riddles[i].answer === guess && this.riddles.length === 0) {
					return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"Halfway, after that it\'s running out.\"???'
				} else if (!this.riddles[i].answer.includes(guess)) { 
					this.heroesEaten++
				};

		};	
		// if (this.riddles === []) {
		// 	return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"Halfway, after that it\'s running out.\"???'
		// }
	};


};



module.exports = Sphinx