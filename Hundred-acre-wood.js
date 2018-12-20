var tigger = {
  name: "Tigger",
  greet: function(){
    console.log("The wonderful thing about Tiggers is are wonderful things!");
  }
};
var pooh = {
  name: "Winnie the Pooh",
  greet: function(){
    console.log("Welcome to Pooh's house!");
  }
};
var piglet = {
  name: "Piglet",
  greet: function(){
    console.log("Welcome to Piglet's house!");
  }
};
var owl = {
  name: "Owl",
  greet: function(){
    console.log("Welcome to Owl's house!");
  }
};
var robin = {
  name: "Christopher Robin",
  greet: function(){
    console.log("Welcome to Robin's house!");
  }
};
var rabbit = {
  name: "Rabbit",
  greet: function(){
    console.log("Welcome to Rabbit's house!");
  }
};
var bees = {
  name: "Bees",
  greet: function(){
    console.log("Welcome to Bees' house!");
  }
};
var gopher = {
  name: "Gopher",
  greet: function(){
    console.log("Welcome to Gopher's house!");
  }
};
var kanga = {
  name: "Kanga",
  greet: function(){
    console.log("Welcome to Kanga's house!");
  }
};
var eeyore = {
  name: "Eeyore",
  greet: function(){
    console.log("Welcome to Eeyore's house!");
  }
};
var heffalumps = {
  name: "Heffalumps",
  greet: function(){
    console.log("Welcome to Heffalumps's house!");
  }
};

tigger.north = pooh;

pooh.north = robin;
pooh.east = bees;
pooh.west = piglet;
pooh.south = tigger;

bees.west = pooh;
bees.north = rabbit;

rabbit.east = gopher;
rabbit.south = bees;
rabbit.west = robin;

gopher.west = rabbit;

robin.north = kanga;
robin.east = rabbit;
robin.south = pooh;
robin.west = owl;

owl.east = robin;
owl.south = piglet;

piglet.north = owl;
piglet.east = pooh;

kanga.north = eeyore;
kanga.south = robin;

eeyore.east = heffalumps;
eeyore.south = kanga;

heffalumps.west = eeyore;

var player = {
  location: tigger,
  honey: false
}

function move(direction){
    if(direction == "north")
      {
        if(player.location.north != undefined)
        {
          player.location = player.location.north;
          console.log("You are now at " + player.location.name + "'s house.");
          player.location.greet();
        }
        else
        {
          console.log("You can not go that way! You are at " + player.location.name + "'s house.");
        }
      }
    if(direction == "west")
      {
        if(player.location.west != undefined)
        {
          player.location = player.location.west;
          console.log("You are now at " + player.location.name + "'s house.");
          player.location.greet();
        }
        else
        {
          console.log("You can not go that way! You are at " + player.location.name + "'s house.");
        }
      }
    if(direction == "east")
      {
        if(player.location.east != undefined)
        {
          player.location = player.location.east;
          console.log("You are now at " + player.location.name + "'s house.");
          player.location.greet();
        }
        else
        {
          console.log("You can not go that way! You are at " + player.location.name + "'s house.");
        }
      }
    if(direction == "south")
      {
        if(player.location.south != undefined)
        {
          player.location = player.location.south;
          console.log("You are now at " + player.location.name + "'s house.");
          player.location.greet();
        }
        else
        {
          console.log("You can not go that way! You are at " + player.location.name + "'s house.");
        }
      }
}

function pickup(){
if(player.location == bees)
{
  player.honey = true;
  console.log("You have picked up the honey!");
}
else
{
  console.log("There is no honey at this location!");
}
}

function mission(){
return console.log("You must deliver the honey to Eeyore's house!")
}

function drop(){
if(player.honey === false)
  {
    console.log("You must pickup honey first!")
  }
else{
  player.honey = false;
if(player.location == eeyore)
{
  console.log("Congrats! You win!");
}
else
{
  console.log("Uh oh you dropped the honey at the wrong house! Pick up some more!");
}
}
}