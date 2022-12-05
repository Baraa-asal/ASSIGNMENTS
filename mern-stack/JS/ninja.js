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

class Sensei extends Ninja {
    constructor(name) {
        super();
        this.name = name;
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        this.drinkSake();
        console.log("What one programmer can do in one month, two programmers can do in two months.")
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


const superSensei1 = new Sensei("BARAA THE SENSEI");
superSensei1.speakWisdom();
superSensei1.showStats();
