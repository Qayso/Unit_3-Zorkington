/* 
    TODO for students
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
  title: 'SpazeZork',
  desc: 'Welcome to the world of... here are some quick rules & concepts...',
  author: 'Student Name',
  cohort: 'SBPT-2022',
  startingRoomDescription: "I don't remember a thing, my eyes are blurry but everything is getting clear. I should look around.",
  playerCommands: [
      // replace these with your games commands as needed
      'move', 'take', 'drop', 'inspect', 'explore', '"i"(player-inventory)'
  ]
  // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
  // This shouldn't be more than 6-8 different commands.
}

// Your code here



//Class Constructor for Items
class Items {
  constructor(name, description, takeable) {
    (this.name = name),
      (this.description = description),
      (this.takeable = takeable);
  }
}
//Items constructor
const plasmaBlaster = new Items(
  "Plasma-Blaster",
  "Looks like a toy",
  true
);
const flowers = new Items(
  "flower",
  "A pretty flower, maybe it will be useful",
  true
);
const seashell = new Items(
  "seashell",
  "Sallys not looking! Quick! Take it!",
  true
);
const obsidian = new Items(
  "obsidian",
  "I feel an odd desire to take it, rock collections are still cool",
  true
);
const manga = new Items(
  "manga",
  "Ooooooo its the latest JJK volume",
  true
);

const portalConsole = new Items(
  "Portal-Console",
  "I look over to the portal console. It has an outline of a flower, seashell, a rock and a book?",
  false
);

const log = new Items(
  "log",
  "It's huge and there are bugs crawling all over it...Cool!",
  false
);

const crab = new Items(
  "crab",
  "Hi little guy, I better not bother you much",
  false
);

const troll = new Items(
  "Troll",
  "A scary Troll! Wait, is he putting up the peace sign? ok im officially going crazy",
  false
);

const shiitakeRamen = new Items(
  "Shiitake-Ramen",
  "Mmmmm smells so good, but I think its for someone else",
  false
);

//Item lookup table
let itemLookUp = {
 plasmaBlaster: plasmaBlaster,
 flowers: flowers,
 seashell: seashell,
 obsidian: obsidian,
 manga: manga,
 portalConsole: portalConsole,
 log: log,
 crab: crab,
 troll: troll,
 shiitakeRamen: shiitakeRamen,
};



// Starting room //! Not sure why this has to be here and redfined again before player object is made
let currentRoom;

//Class constructors for Room
class Room {
  constructor(name, description, inv) {
    this.name = name;
    this.description = description;
    this.inv = inv;
  }
}
//Room Constructors
const portalRoom = new Room(
  "portalRoom",
  "This is like a dream. Im in a portal room, which seems to be in a spaceship. I hope there are no aliens with probes around. There are four portals here. They are forest, beach, mountains and tokyo?",
  ['plasmaBlaster', 'portalConsole'],
);
const forest = new Room(
  "forest",
  "I find myself in a forest, it's very peaceful. Oddly quiet and oddly peaceful. Nature is nice but this doesnt seem like an earth forest somehow.",
  ['flowers', 'log'],
);
const beach = new Room(
  "beach",
  "A serence beach, it feels like im in a postcard. The water is glistening but theres no one here.",
  ['seashell', 'crab'],
);
const mountains = new Room(
  "mountains",
  "I'm on top of a mountain range, snow is everywhere. I'm oddly not cold though. There's some obsidian on the ground. HOLY SHIT IS A TROLL??",
  ['obsidian', 'troll'],
);
const toyko = new Room(
  "toyko",
  "In the center of Toyko in the middle of the night. Only a few people around but something is off",
  ['manga', 'shiitakeRamen'],
);

let room = {
  portalRoom: ['mountains', 'forest', 'beach', 'toyko'],
  mountains: ['portalRoom'],
  forest: ['portalRoom'],
  beach: ['portalRoom'],
  toyko: ['portalRoom'],
};

//Room Lookup table
let roomLookUp = {
  portalRoom: portalRoom,
  beach: beach,
  forest: forest,
  mountains: mountains,
  toyko: toyko
};

//! 
currentRoom = portalRoom;

//player variables
const player = {
  inventory: [],
  location: currentRoom
};




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
  
// Function to change rooms
function changeRoom(newRoom) {
  console.log('Current Room:', currentRoom.name);

  // Check if the current room has valid transitions
  if (room.hasOwnProperty(currentRoom.name)) {
    let validTransitions = room[currentRoom.name];
    console.log('Valid Transitions:', validTransitions);

    if (validTransitions.includes(newRoom)) {
      currentRoom = roomLookUp[newRoom];
      player.location = currentRoom;
      return currentRoom.description;
    } else {
      return "That doesn't seem to be a place I know about. Care to try again?";
    }
  } else {
    return "Current room is not defined in the room lookup table.";
  }
}
  
  
  

    
  
  

  //pickup function
  function pickUp(itemObject) {
    let takeableItem = itemLookUp[itemObject];
  
    if (!takeableItem) {
      return ("That does not exist in this room");
    } else if (
      takeableItem.takeable === true &&
      player.location.inv.includes(itemObject)
    ) {
      player.location.inv.splice(player.location.inv.indexOf(itemObject), 1);
      player.inventory.push(itemObject);
      return ("You picked up the " + itemObject);
    } else {
      
      return ("You can't take that!");
    }
  }
  //drop items function
  function dropIt(trashObject) {
    if (player.inventory.includes(trashObject)) {
      player.inventory.splice(player.inventory.indexOf(trashObject), 1);
      player.location.inv.push(trashObject);
      return ("You have dropped the " + trashObject);
    } else {
      return ("You don't have this item");
    }
  }
  // examine items function
  function lookAt(examineObject) {
    let lookAtItems = itemLookUp[examineObject];
    if (player.location.inv.includes(examineObject) ||
    player.inventory.includes(examineObject)) {
      return (lookAtItems.description);
    } else {
      return("Nothing to look at");
    }
  }

  //examine room
  function inspectRoom() {
    return currentRoom.description + " There's a " + currentRoom.inv
  }

  let cleanArray = playerInput.split(" ");
  let command = cleanArray[0];
  let activity = cleanArray[1];
  
  let result;
  
  switch (command) {
      case "move":
          result = changeRoom(activity);
          break;
      case "take":
          result = pickUp(activity);
          break;
      case "drop":
          result = dropIt(activity);
          break;
      case "inspect":
          result = lookAt(activity);
          break;
      case "explore":
          result = inspectRoom();
          break;
      case "i":
          result = JSON.stringify(player.inventory);
          break;
      default:
          result = "Invalid Input";
  }
  console.log(player.inventory)
  return result;
  

  };
  
  
  
  

