function Ninja(name){
    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    this.sayName = function(){
        console.log("Your name is: " + this.name);
        return this;
    };

    this.showStats = function(){
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + speed);
        console.log("Strength: " + strength);
        return this;
    };

    this.drinkSake = function(){
        this.health += 10;
        return this;
    }
}
var ninja2 = new Ninja("Bobby");
var ninja1 = new Ninja("Billy");
ninja1.sayName();
ninja1.drinkSake();
ninja1.showStats();
ninja2.showStats();