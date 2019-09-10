// Interacting
// Objectives:
// Add complexity to the game by adding a method to the location objects we created.
// Invoke the method whenever the player visits that location object.
// Add a greet method to each of the objects on the map.
// Adjust the move function so that it invokes the greet method of the player's location.

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
    location: tigger
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

move("north");
move("east");