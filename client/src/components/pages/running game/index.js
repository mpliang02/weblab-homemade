const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth; 
canvas.height = innerHeight; 

const gravity = 0.5

class Dish {
    constructor() {
        this.position = {
            x: 900,
            y: 540
        }

        this.width = 80
        this.height = 66
        
        this.imageLoaded = false
        this.image = new Image();
        this.image.onload = () => {
            this.imageLoaded = true;
        }
    

        this.image.src = 'assets/end.png'


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

        this.image.src = 'assets/stand.png';

        addEventListener('keydown', ({keyCode}) => {
            switch (keyCode) {
                case 39:
                    this.image.src = 'assets/right.png';
                    break
        
                case 37:
                    this.image.src = 'assets/left.png';
                    break
            }
        })

        addEventListener('keyup', ({keyCode}) => {
            switch (keyCode) {
                case 39:
                    this.image.src = 'assets/stand.png';
                    break
        
                case 37:
                    this.image.src = 'assets/standleft.png';
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
        this.image.src = 'assets/grass_platform.png';
        this.position = {
            x, 
            y
        }

        this.width = 640
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
        this.image.src = 'assets/puddle.png';
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


const player = new MC()
    
//array to create multiple platforms (use for each to apply to all)
const platforms = [new Platform({x:-2, y:585}), new Platform({x: 628, y: 585}), new Platform({x: 500, y: 200})]
const obstacles = [new Obstacle({x: 260, y: 584})]
const dish = new Dish()
const keys = {
    right: {
        pressed: false
    },
    left: {
        pressed: false
    }
}

//how far player has travelled from start 
let scrollOffset = 0

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
            location.reload()
        }

        if (dish.position.x < player.position.x + player.width && dish.position.x + dish.width > player.position.x && dish.position.y < player.position.y + player.height && dish.height + dish.position.y > player.position.y) {
            dish.position.y = 900
        }
    
        /*if ((player.position.y + player.height <= obstacle.position.y && player.position.y + player.height + player.velocity.y >= obstacle.position.y) && (player.position.x + player.width >= obstacle.position.x && player.position.x <= obstacle.position.x + obstacle.width)) {
            platforms.forEach(platform => {
                platform.position.x = (move - platform.position.x) 
                
            })

            obstacles.forEach(obstacle => {
                obstacle.position.x = (move - obstacle.position.x)
            })

            if (player.position.x >= move) {
                player.position.x -= move
            } else player.position.x += move

            //player.position.x -= move
            move = 0
            location.reload()

        }*/
    })

    //win limiter
    if (scrollOffset > 300) {
        console.log ("yay")
    }
    
}

animate();

addEventListener('keydown', ({keyCode}) => {
    switch (keyCode) {
        case 38:
            if (player.jumping == false) {
                player.velocity.y = -30
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

        case 39:
            keys.right.pressed = false
            break
        
        case 37:
            keys.left.pressed = false
            break
    }
})