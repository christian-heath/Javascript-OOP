function Ninja(name) {
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function () {
        console.log("Your name is: " + this.name);
        return this;
    };

    this.showStats = function () {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + speed);
        console.log("Strength: " + strength);
        return this;
    };

    this.drinkSake = function () {
        this.health += 10;
        return this;
    }

    this.punch = function (Ninja) {
        Ninja.health -= 5;
        console.log("Ouch you punched " + Ninja.name + ". " + Ninja.name + "'s health = " + Ninja.health);
        return this;
    };

    this.kick = function (ninja) {
            ninja.health -= 15 * strength;
            console.log("Ouch you kicked " + ninja.name + ". " + ninja.name + "'s health = " + ninja.health);
            return this;
    };
}
var ninja2 = new Ninja("Bobby");
var ninja1 = new Ninja("Billy");
ninja1.sayName();
ninja2.punch(ninja1);
ninja1.kick(ninja2);