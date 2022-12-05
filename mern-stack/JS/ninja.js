class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`Your name: ${this.name}`);
    }
    showStats() {
        console.log(this);
    }
    drinkSake() {
        this.health += 10;
        console.log(`Your health = ${this.health}`)
    }
}

const ninja1 = new Ninja("Baraa", 30);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

const ninja2 = new Ninja("Mostafa", 20)
ninja2.speed = 4;
ninja2.strength = 5;
ninja2.showStats();
