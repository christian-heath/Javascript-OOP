class Ninja {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log("Your name is: " + this.name);
    }

    showStats() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
        console.log("You drink the sake for +10 health.")
    }

    punch(Ninja) {
        Ninja.health -= 5;
        console.log("Ouch you punched " + Ninja.name + ". " + Ninja.name + "'s health = " + Ninja.health);
    }

    kick(Ninja) {
        Ninja.health -= 15 * this.strength;
        console.log("Ouch you kicked " + Ninja.name + ". " + Ninja.name + "'s health = " + Ninja.health);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }
    speakWisdom() {
        super.drinkSake();
        console.log("A deaf husband and a blind wife are always a happy couple - Sensei.")
    }
}

const ninja2 = new Ninja("Bobby");
const ninja1 = new Ninja("Billy");
const sensei1 = new Sensei("Sensei");
ninja1.sayName();
ninja2.punch(sensei1);
ninja1.kick(sensei1);
sensei1.speakWisdom();
sensei1.showStats();
sensei1.kick(ninja1);