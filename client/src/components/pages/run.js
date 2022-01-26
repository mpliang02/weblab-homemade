
let canvas;
let c;

import end from "./assets/end.png";
import right from "./assets/right.png";
import stand from "./assets/stand.png";
import left from "./assets/left.png";
import standleft from "./assets/standleft.png";
import grass_platform from "./assets/grass_platform.png";
import puddle from "./assets/puddle.png";
import "./run.css";

const gravity = 0.5

class Dish {
    constructor() {
        this.position = {
            x: 3300,
            y: 540
        }

        this.width = 80
        this.height = 66
        
        this.imageLoaded = false
        this.image = new Image();
        this.image.onload = () => {
            this.imageLoaded = true;
        }
    

        this.image.src = end;


    }

    draw() {
        if (!this.imageLoaded) {
            return;
        }
        c.fill();
        c.drawImage(this.image, this.position.x, this.position.y)
    }


}

class MC {
    constructor() {
        this.position = {
            x: 100, 
            y: 100
        }
        this.velocity = {
            x: 0, 
            y: 0
        }

        this.width = 79
        this.height = 100

        this.imageLoaded = false
        this.image = new Image();
        this.image.onload = () => {
            this.imageLoaded = true;
        }

        this.image.src = stand;

        addEventListener('keydown', ({keyCode}) => {
            switch (keyCode) {
                case 39:
                    this.image.src = right;
                    break
        
                case 37:
                    this.image.src = left;
                    break
            }
        })

        addEventListener('keyup', ({keyCode}) => {
            switch (keyCode) {
                case 39:
                    this.image.src = stand;
                    break
        
                case 37:
                    this.image.src = standleft;
                    break
            }
        })

    }

    draw() {
        if (!this.imageLoaded) {
            return;
        }
        c.fill();
        c.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        //gravity 
        this.draw()
        this.position.x +=  this.velocity.x
        this.position.y += this.velocity.y

        if (this.position.y + this.height + this.velocity.y <= canvas.height )
            this.velocity.y += gravity
        else this.velocity.y = 0;
    }

}

class Platform {
    constructor({x, y}) {
        this.imageLoaded = false
        this.image = new Image();
        this.image.onload = () => {
            this.imageLoaded = true;
        }
        this.image.src = grass_platform;
        this.position = {
            x, 
            y
        }

        this.width = 600
        this.height = 184
    }

    draw() {
        if (!this.imageLoaded) {
            return;
        }
        c.fill();
        c.drawImage(this.image, this.position.x, this.position.y)
        
    }
}

class Obstacle {
    constructor({x, y}) {
        this.imageLoaded = false
        this.image = new Image();
        this.image.onload = () => {
            this.imageLoaded = true;
        }
        this.image.src = puddle;
        this.position = {
            x, 
            y
        }

        this.width = 320
        this.height = 142
    }

    draw() {
        if (!this.imageLoaded) {
            return;
        }
        c.fill();
        c.drawImage(this.image, this.position.x, this.position.y)
        
    }


}

function getRandomx(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getRandomy(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

let player = new MC()
    
//array to create multiple platforms (use for each to apply to all)
let platforms = [new Platform({x:-2, y:585}), new Platform({x: 628, y: 585}), new Platform({x: 1260, y: 585}), new Platform({x: 1890, y: 585}), new Platform({x: 2520, y: 585}), new Platform({x: 3150, y: 585}), new Platform({x: 3780, y: 585}), new Platform({x: getRandomx(200, 800), y: getRandomy(100, 400)}), new Platform({x: getRandomx(800, 1400), y: getRandomy(100, 400)}), new Platform({x: getRandomx(1400, 2000), y: getRandomy(100, 400)}), new Platform({x: getRandomx(2000, 3000), y: getRandomy(100, 400)})]
let obstacles = [new Obstacle({x: 260, y: 584}), new Obstacle({x: getRandomx(0, 3000), y: 584}), new Obstacle({x: getRandomx(0, 3000), y: 584}), new Obstacle({x: getRandomx(0, 3000), y: 584})]
const dish = new Dish()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

//resets the game
function restart() {
    player = new MC()
    platforms = [new Platform({x:-2, y:585}), new Platform({x: 628, y: 585}), new Platform({x: 500, y: 200})]
    obstacles = [new Obstacle({x: 260, y: 584})]
}

//how far player has travelled from start 
let scrollOffset = 0
function init() {
    canvas = document.getElementById('game-canvas');
    c = canvas.getContext('2d');
    canvas.width = innerWidth; 
    canvas.height = innerHeight; 
    animate();
}
function animate() {   
    //gravity 
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    platforms.forEach(platform => {
        platform.draw()
    })

    obstacles.forEach(obstacle => {
        obstacle.draw()
    })

    player.update()

    dish.draw()


    //Moves only if pressed (and can keep moving by holding)
    //Limits how far to the right/left player can go
    
    if (keys.right.pressed && player.position.x < 400) {
        player.velocity.x = 5;
    } else if ((keys.left.pressed && player.position.x > 100) || (keys.left.pressed && scrollOffset === 0 && player.position.x > 0)) {
        player.velocity.x = -5
    } else if (player.position.x < 100) {
        player.position.x = 100
    } else {
        player.velocity.x = 0
        if (keys.right.pressed) {
            scrollOffset += 5
          
            platforms.forEach(platform => {
                platform.position.x -= 5
            })
            obstacles.forEach(obstacle => {
                obstacle.position.x -= 5
                
            })
            dish.position.x -= 5
        
        } else if (keys.left.pressed && (scrollOffset > 0)) {
            scrollOffset -= 5
            platforms.forEach(platform => {
                platform.position.x += 5
            })

            obstacles.forEach(obstacle => {
                obstacle.position.x += 5
            })
            dish.position.x += 5
            
        }

    }


    //collision detection
    platforms.forEach(platform => {
    if ((player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y) && (player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width)) {
        player.jumping = false;
        player.velocity.y = 0
    }
    })

    

    obstacles.forEach(obstacle => {
        if (obstacle.position.x < player.position.x + player.width && obstacle.position.x + obstacle.width > player.position.x && obstacle.position.y < player.position.y + player.height && obstacle.height + obstacle.position.y > player.position.y) {
            /*platforms.forEach(platform => {
               platform.position.x -= scrollOffset
            })
            
     
            if (scrollOffset > 0) {
                obstacle.position.x = (500 - obstacle.position.x) - scrollOffset;
            }

            player.position.x = 100;*/

           restart();

      
        }
    
    })

    if (dish.position.x < player.position.x + player.width && dish.position.x + dish.width > player.position.x && dish.position.y < player.position.y + player.height && dish.height + dish.position.y > player.position.y) {
        dish.position.y = 900
    }

    //win limiter
    if (scrollOffset > 300) {
        console.log ("yay")
    }
    
}

addEventListener('keydown', ({keyCode}) => {
    switch (keyCode) {
        case 38:
            if (player.jumping == false) {
                player.velocity.y = -23
                player.jumping = true
                break
            }
            break

        case 32:
            if (player.jumping == false) {
                player.velocity.y = -23
                player.jumping = true
                break
            }
                break

        case 39:
            keys.right.pressed = true
            break
        
        case 37:
            keys.left.pressed = true
            break
    }
})

addEventListener('keyup', ({keyCode}) => {
    switch (keyCode) {
        case 38:
            player.velocity.y = 0
            break

        case 32:
            player.velocity.y = 0
            break

        case 39:
            keys.right.pressed = false
            break
        
        case 37:
            keys.left.pressed = false
            break
    }
})


// animate()

export default init;