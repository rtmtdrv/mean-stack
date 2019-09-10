// Gamify
// Objectives:
// Provide a mission for the player to accomplish.
// Provide the logic in the game to determine whether the player accomplishes the mission.
// Add an attribute to the player to track whether the player has honey or not.
// Create a mission function so that the user is given a destination.
// Create a pickUp function that changes the player's honey status to true if it is invoked when the player is at the bees' location.
// Create a drop function that allows the player to deliver honey to the proper destination.

var tigger = {
    character: "Tigger",
    greet: function(){
        console.log("The wonderful thing about Tiggers is Tiggers are wonderful things!");
    }
};


var pooh = {
    character: "Winnie the Pooh",
    greet: function(){
        console.log("Honey is my drug of choice!");
    }
};

var piglet = {
    character: "Piglet",
    greet: function(){
        console.log("Piglet Rules!");
    }
};

var bees = {
    character: "Bees",
    greet: function(){
        console.log("BEEEEEEEEEEEES!");
    }
};

var robin = {
    character: "Christopher Robin",
    greet: function(){
        console.log("I have two first names as my name.");
    }
};

var owl = {
    character: "Owl",
    greet: function(){
        console.log("I am wise beyond my years.");
    }
};

var rabbit = {
    character: "Rabbit",
    greet: function(){
        console.log("Follow the white rabbit.");
    }
};

var gopher = {
    character: "Gopher",
    greet: function(){
        console.log("I am a gopher.");
    }
};

var kanga = {
    character: "Kanga",
    greet: function(){
        console.log("Kaaaanga fool");
    }
};

var eeyore = {
    character: "Eeyore",
    greet: function(){
        console.log("I'm saaaaaad.");
    }
};

var heffa = {
    character: "Heffalumps",
    greet: function(){
        console.log("My lumps, my lumps, my heffalumpssss.");
    }
};

tigger.north = pooh;

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = robin;

piglet.east = pooh;
piglet.north = owl;

bees.west = pooh;
bees.north = rabbit;

robin.south = pooh;
robin.west = owl;
robin.east = rabbit;
robin.north = kanga;

owl.south = piglet;
owl.east = robin;

rabbit.south = bees;
rabbit.west = robin;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.south = robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffa;

heffa.west = eeyore;

var player = {
    location: tigger,
    honey = false
}

function move(x){
    if(player.location[x] == undefined){
        console.log("Cannot go there!");
    }
    else {
        player.location = player.location[x];
        console.log("You are at " + player.location.character + "'s house!");
        player.location.greet();
    }
}

function pickup(){
    if(player.location == bees){
        player.honey = true;
        console.log("You collected some fresh honey from the bees!")
    }
    else {
        console.log("There is no honey at this location!")
    }
}

function mission(){
    charList = [tigger, pooh, piglet, robin, owl, rabbit, gopher, kanga, eeyore, heffa]
    var rand = Math.floor(Math.random()*Math.floor(charList.length));
    recipient = charList[rand];
    recipient.objective = true;
    console.log(recipient.character + " is in need of some honey! Can you help?");
}

function drop(){
    if(player.location.objective == true){
        console.log("Congratulations! You delivered the honey to " + player.location.character + "!")
    }
    else {
        console.log("You can't drop the honey here, nobody requested it!")
    }
}

mission();
move("north");
move("east");
pickUp();
move("north");
move("west");
move("north");
move("north");
move("east");
drop();