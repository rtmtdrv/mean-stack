// Traveling
// Objectives:
// Start building a simple game that can be played in the browser's console.
// Create a player object that points to a location on the map.
// Have the player move by changing the player's pointer depending on user input.
// Create the player object with the location attribute.
// Assign the player's location to the tigger object.
// Create the function move, which takes a direction as a parameter.
// When the move function is invoked, change the player's location accordingly and log a message.
// If the move function is passed an invalid direction, log a message to inform the user.

var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet" };
var bees = { character: "Bees" };
var robin = { character: "Christopher Robin" };
var owl = { character: "Owl" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffa = { character: "Heffalumps" };

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
    location: tigger
}

function move(dir){
    if(dir == "north" || dir == "North"){
        if(player.location.north == null){
            console.log("You may not go that way!")
        }
        else {
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house!");
        }
    }
    if(dir == "south" || dir == "South"){
        if(player.location.south == null){
            console.log("You may not go that way!")
        }
        else {
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house!");
        }
    }
    if(dir == "east" || dir == "East"){
        if(player.location.east == null){
            console.log("You may not go that way!")
        }
        else {
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house!");
        }
    }
    if(dir == "west" || dir == "West"){
        if(player.location.west == null){
            console.log("You may not go that way!")
        }
        else {
            player.location = player.location.north;
            console.log("You are now at " + player.location.character + "'s house!");
        }
    }
}