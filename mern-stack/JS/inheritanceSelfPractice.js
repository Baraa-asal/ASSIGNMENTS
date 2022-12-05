8// Parent Class
class User {
    constructor(id, username) {
        this.i = id;
        this.u = username;
    }
    sayHello() {
        return `Hello ${this.u}`;
    }
}

// Derived Class
class Admin extends User {
    constructor(id, username, permissions) {
        super(id, username);
        this.p = permissions;
    }
}
class Superman extends Admin {
    constructor(id, username, permissions, ability) {
        super(id, username, permissions);
        this.a = ability;
    }
}

class Spiderman extends Superman {
    constructor(id, username, powers) {
        super(id, username);
        this.powers = powers;
    }
    biteSomeone() {
        this.powers += 100;
        console.log(`Hey you just bite someone, your powers now is: ${this.powers}`);
    }
}
let userOne = new User(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);
let spiderman1 = new Spiderman(111, "Maram", 300);
spiderman1.biteSomeone();

// console.log(userOne.u);
// console.log(userOne.sayHello());
// console.log("####");
// console.log(adminOne.i);
// console.log(adminOne.u);
// console.log(adminOne.p);
// console.log(adminOne.sayHello());