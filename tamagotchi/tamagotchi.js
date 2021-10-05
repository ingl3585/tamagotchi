const tamagotchi = {
	name: 'Tommy',
	weight: 1,
	age: 0,
	birthday: '10/04/2021',
	lifeStage: 'baby',
	hungerLevel: 10,
	happinessLevel: 0,
	attentionLevel: 0,
	isHungry: true,
	isHappy: false,
	needsAttention: true,
	wantsToPlay: true,
	description: '...',
	eat: function (food) {
		if (food === 'grass') {
			this.isHungry = false;
			this.hungerLevel -= 2;
			this.isHappy = false;
			this.happinessLevel += 2;
			this.weight++;
			// console.log(this.hungerLevel, this.weight);
		} else if (food === 'meat') {
			this.isHungry = false;
			this.hungerLevel -= 7;
			this.isHappy = true;
			this.happinessLevel += 7;
			this.weight += 4;
			// console.log(this.isHungry, this.isHappy, this.weight);
		} else if (food === 'tofu') {
			this.isHungry = false;
			this.hungerLevel -= 3;
			this.isHappy = false;
			this.happinessLevel += 4;
			this.weight += 2;
			// console.log(this.isHungry, this.isHappy, this.weight);
		} else if (food === 'bread') {
			this.isHungry = false;
			this.hungerLevel -= 4;
			this.isHappy = true;
			this.happinessLevel += 5;
			this.weight += 2;
			// console.log(this.isHungry, this.isHappy, this.weight);
		} else if (food === 'candy') {
			this.isHungry = false;
			this.hungerLevel -= 1;
			this.isHappy = true;
			this.happinessLevel += 5;
			this.weight++;
			// console.log(this.isHungry, this.isHappy, this.weight);
		}
	},
	play: function () {
		this.isHappy = true;
		this.happinessLevel += 5;
		this.needsAttention = false;
		this.attentionLevel += 5;
		this.wantsToPlay = false;
		this.weight--;
		// console.log(this.wantsToPlay, this.isHappy, this.weight);
	},
	speak: function () {
		if (this.hungerLevel > 5) {
			console.log('Tommy is hungry.');
		} else {
			console.log('Tommy is full.');
		}
		if (this.attentionLevel < 5) {
			console.log('Tommy needs more attention.');
		} else {
			console.log('Tommy does not need more attention.');
		}
		if (this.wantsToPlay === true) {
			console.log('Tommy wants to play.');
		} else {
			console.log('Tommy does not need to play.');
		}
		if (this.happinessLevel > 5) {
			console.log('Tommy is happy.');
		} else {
			console.log('Tommy is not happy.');
		}
	},
};

tamagotchi.eat('meat');
tamagotchi.play();

console.log(tamagotchi.hungerLevel);
console.log(tamagotchi.attentionLevel);
console.log(tamagotchi.happinessLevel);

tamagotchi.speak();
