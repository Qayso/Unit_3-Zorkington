/* 
    TODO for Kevins
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {
  title: "Zorkington Ksoto Edition bitches",
  desc: "Welcome to the world of ya mama house here are some quick rules & concepts...",
  author: "Kevin Soto",
  cohort: "PTSB-2023",
  startingRoomDescription:
    "What you see before you is...The Portal Room. You are in an alien spaceship with portals in every direction. All portals glow with a mind bending illusion, its there but its not there. They seem like huge mirrors on an acid trip, weaving in and out of reality. Every portal has a shimmering image behind it. North portal shows a forest. South portal shows a uninhabited island. West portal shows some snow capped mountains. East portal looks like....Toyko? In the middle of the room there is a control console. It seems like all a dream. You pinch yourself, youre definitely awake. What to do now... ",
  playerCommands: [
    // replace these with your games commands as needed
    "go (direction)",
    "look",
    "take",
    "put (item) in (container)",
    "punch",
    "smooze",
    "examine",
    "inventory",
  ],
  // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference.
  // This shouldn't be more than 6-8 different commands.
};

// Your code here
// Items Class name/description/location
class Items {
  constructor(name, description, location) {
    this.name = name;
    this.description = description;
    this.location = location;
  }
  // to take item
  take() {}
  // method that displays description
  examine() {}
  // to use to re-activate portal with certain items
  putItemIn() {}
  // to display current inventory
  inventory() {}
}

let obsidian = new Items("Obsidian", "shiny Obsidian", "mountains");

let deerAntler = new Items("Pinecone", "a perfect Pinecone!", "forest");

let seashell = new Items(
  "Seashell",
  "Sallys not here, sell it, haha jk",
  "beach"
);

let shiitakeRamen = new Items(
  "Shiitake-Ramen",
  "Fragrant green onion and Shiitake Ramen",
  "toyko"
);

let plasmaBlaster = new Items(
  "Plasma-Blaster",
  "It looks like a kid made it...maybe I am dreaming",
  "portal-room"
);

console.log(obsidian, deerAntler, seashell, shiitakeRamen, plasmaBlaster);

class Locations {
  constructor(exits, description, items) {
    this.exits = exits;
    this.description = description;
    this.items = items;
  }
}

let forest = new Locations("south", "a forest", deerAntler);
let beach = new Locations(
  "north",
  "Sallys not here, sell it, haha jk",
  seashell
);
let mountains = new Locations(
  "east",
  "Snow capped mountains, a dormant volcano",
  obsidian
);
let toyko = new Locations("west", "Downtown Toyko, i'm hungry", shiitakeRamen);

console.log(forest, beach, mountains, toyko);

let inventory = [];

export const domDisplay = (playerInput) => {
  /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */
  // Your code here
};
