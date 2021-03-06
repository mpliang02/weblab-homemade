import React, { useEffect, useState } from "react";
// import DialogueBox from "./DialogueTextBox.js";
import "./DialogueCSS.css";
import "./map.css";
import { Redirect } from "@reach/router";

/*let door1b
Boolean(door1b)*/
let canvas;
let c;
let door1b;
let door2b;
let door3b;
let door4b;
let door5b;
Boolean(door1b);
Boolean(door2b);
Boolean(door3b);
Boolean(door4b);
Boolean(door5b);
//const [door1b, setdoor1b] = useState(false);

import right from "./assets/right.png";
import standright from "./assets/stand.png";
import left from "./assets/left.png";
import standleft from "./assets/standleft.png";
import front from "./map/front.png";
import frontrun from "./map/frontrun.png";
import back from "./map/back.png";
import backrun from "./map/backrun.png";
import house1 from "./map/house1.png";
import house2 from "./map/house2.png";
import house3 from "./map/house3.png";
import house4 from "./map/house4.png";
import house5 from "./map/house5.png";

import DialogueBox from "./FroggyDialogueTextBox.js";
import "./DialogueCSS.css";
// import React, { Component } from "react";
// import lotlbackground from "../../../dist/characters/lotl1.png";
// import MapBackground from "./MapBackground.js";
import froggy from "../../../dist/mrfrog.png";
// import instructionsBox from "../../../dist/extras/Untitled_Artwork.png";
import welcomeMusic from "../../../dist/Music/M33 Project - Pal de Pluja.mp3";
import ReactAudioPlayer from "react-audio-player";

class MC {
  constructor() {
    this.position = {
      x: 100,
      y: 255,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };

    this.width = 79;
    this.height = 50;

    this.imageLoaded = false;
    this.image = new Image();
    this.image.onload = () => {
      this.imageLoaded = true;
    };

    this.image.src = front;

    addEventListener("keydown", ({ keyCode }) => {
      switch (keyCode) {
        case 39:
          this.image.src = right;
          break;

        case 37:
          this.image.src = left;
          break;

        case 38:
          this.image.src = backrun;
          break;

        case 40:
          this.image.src = frontrun;
          break;
      }
    });

    addEventListener("keyup", ({ keyCode }) => {
      switch (keyCode) {
        case 39:
          this.image.src = standright;
          break;

        case 37:
          this.image.src = standleft;
          break;

        case 38:
          this.image.src = back;
          break;

        case 40:
          this.image.src = front;
          break;
      }
    });
  }

  draw() {
    if (!this.imageLoaded) {
      return;
    }
    c.fill();
    c.drawImage(this.image, this.position.x, this.position.y);
  }

  update() {
    this.draw();
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

class House {
  constructor({ x, y, img }) {
    this.imageLoaded = false;
    this.image = new Image();
    this.image.onload = () => {
      this.imageLoaded = true;
    };
    this.image.src = img;
    this.position = {
      x,
      y,
    };

    this.width = 406;
    this.height = 307;
  }

  draw() {
    if (!this.imageLoaded) {
      return;
    }
    c.fill();
    c.drawImage(this.image, this.position.x, this.position.y);
  }
}

class Door {
  constructor({ x, y, name }) {
    this.name = name;
    this.position = {
      x,
      y,
    };

    this.width = 70;
    this.height = 30;
  }

  draw() {
    c.fillStyle = "rgba(0,0,0,0)";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new MC();
const houses = [
  new House({ x: 1020, y: 28, img: house3 }),
  new House({ x: 1500, y: 30, img: house4 }),
  new House({ x: 70, y: 30, img: house1 }),
  new House({ x: 540, y: 20, img: house2 }),
  new House({ x: 2000, y: 30, img: house5 }),
];
const doors = [
  new Door({ x: 200, y: 170, name: "door1" }),
  new Door({ x: 700, y: 170, name: "door2" }),
  new Door({ x: 1180, y: 170, name: "door3" }),
  new Door({ x: 1650, y: 170, name: "door4" }),
  new Door({ x: 2150, y: 170, name: "door5" }),
];

const keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  up: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
};

let scrollOffset = 0;

function animate() {
  //gravity
  console.log(player.position.x);

  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  houses.forEach((house) => {
    house.draw();
  });

  doors.forEach((door) => {
    door.draw();
  });

  player.update();

  //Moves only if pressed (and can keep moving by holding)
  //Limits how far to the right/left player can go

  if (keys.right.pressed && player.position.x < 1300) {
    player.velocity.x = 5;
  } else if (
    (keys.left.pressed && player.position.x > 100) ||
    (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
  ) {
    player.velocity.x = -5;
  } else if (keys.up.pressed && player.position.y > 169) {
    player.velocity.y = -5;
    //WHEN CHARACTER POSITION.Y = 170, TRIGGER IN HOUSE SCENE
  } else if (keys.down.pressed && player.position.y <= 255) {
    player.velocity.y = 5;
  } else {
    player.velocity.x = 0;
    player.velocity.y = 0;
    if (keys.right.pressed && scrollOffset < 1160) {
      scrollOffset += 5;

      houses.forEach((house) => {
        house.position.x -= 5;
      });

      doors.forEach((door) => {
        door.position.x -= 5;
      });
    } else if (keys.left.pressed && scrollOffset > 0) {
      scrollOffset -= 5;
      houses.forEach((house) => {
        house.position.x += 5;
      });

      doors.forEach((door) => {
        door.position.x += 5;
      });
    }
  }

  /*doors.forEach(door => {
        if ((player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y) && (player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width)) {
            if (door.name == "door1") {
                door1b = true
            } else if (door.name == "door2") {
                door2b = true
            } else if (door.name == "door3") {
                door3b = true
            } else if (door.name == "door4") {
                door4b = true
            } else if (door.name == "door5") {
                door5b = true
            }
        }
        })*/

  doors.forEach((door) => {
    if (
      door.position.x < player.position.x + player.width &&
      door.position.x + door.width > player.position.x &&
      door.position.y < player.position.y + player.height &&
      door.height + door.position.y > player.position.y
    ) {
      //window.location = "/lotl-dialogue";

                //window.location = "/lotl-dialogue";
         
                if (door.name == "door1") {
                    door1b = true;
                    window.location = "/lotl-dialogue";
                } else if (door.name == "door2" ) {
                    door2b = true
                    window.location = "/tiger-dialogue";
                } else if (door.name == "door3" ) {
                    door3b = true
                    window.location = "/margain-dialogue";
                } else if (door.name == "door4" ) {
                    door4b = true
                    window.location = "/pheesh-dialogue";
                } else if (door.name == "door5") {
                    window.location = "/emptyhouse-dialogue";
                }
            }
        })

  //console.log(door1b)
}

/*let door1b
let door2b
let door3b
let door4b
let door5b*/

addEventListener("keydown", ({ keyCode }) => {
  switch (keyCode) {
    case 38:
      keys.up.pressed = true;
      break;

    case 39:
      keys.right.pressed = true;
      break;

    case 37:
      keys.left.pressed = true;
      break;

    case 40:
      keys.down.pressed = true;
      break;
  }
});

addEventListener("keyup", ({ keyCode }) => {
  switch (keyCode) {
    case 38:
      keys.up.pressed = false;
      break;

    case 39:
      keys.right.pressed = false;
      break;

    case 37:
      keys.left.pressed = false;
      break;

    case 40:
      keys.down.pressed = false;
      break;
  }
});

function init() {
  canvas = document.getElementById("game-canvas");
  c = canvas.getContext("2d");
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  animate();
}

const FroggyDialogue = ({ firstName, recipe }) => {
  const messages = [
    {
      type: "normal",
      text: `${firstName}! It's so nice to see you!`,
      nextLine: 1,
    },
    {
      type: "normal",
      text: `I'm Mr. Frog. I'm helping you make ${recipe}!`,
      nextLine: 1,
    },
    {
      type: "normal",
      text: "Each one of these five houses has an ingredient.",
      nextLine: 1,
    },
    { type: "normal", text: "Go knock on each door and see what they have!", nextLine: 1 },
    { type: "normal", text: "Remember, press ENTER to proceed with dialogue, W to say YES, and S to say NO.", nextLine: 1 },

  ];
  return (
    <>
      <ReactAudioPlayer src={welcomeMusic} autoPlay loop></ReactAudioPlayer>
      {/* <MapBackground></MapBackground> */}
      <DialogueBox
        messages={messages}
        characterName={"Mr. Frog"}
        dialogueImage={froggy}
      ></DialogueBox>
      {/* <img className="froggyInstructionsBox" src={instructionsBox}></img>
        <div className="froggyInstructionsText">'Enter' to continue, 'w' for YES, 's' for NO</div> */}
    </>
  );
};

const Map = ({ firstName, recipe }) => {
  useEffect(() => {
    init();
  }, []);

  /*doors.forEach(door => {
            if ((player.position.y + player.height <= door.position.y && player.position.y + player.height + player.velocity.y >= door.position.y) && (player.position.x + player.width >= door.position.x && player.position.x <= door.position.x + door.width)) {
                if (door.name == "door1") {
                    return <Redirect to="/lotl-dialogue"/>;
                }
            }    
        })*/

  // if (door1b) {
  //     console.log("yay");
  //     return <Redirect to="/lotl-dialogue"/>;
  // }
  return (
    <div>
      <div className="mapBack">
        <canvas id="game-canvas" width="800" height="800" />
      </div>
      <FroggyDialogue firstName={firstName} recipe={recipe}></FroggyDialogue>
    </div>
  );
};

export default Map;
