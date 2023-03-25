
var gameState = "wait"
var waitbgimg, playbgimg,score=0
var playbutton, nextbutton, randx, randy, randx1, randy1
var dogdist, spaceshuttlecollect, spacesuitcollect
var levelupimg, levelup1, levelup2, levelup3,missileimg,missile,missileGroup,destroyimg,destroy
var level3bg

function preload() {

    waitbgimg = loadImage("assets/waitbg.gif")
    story = loadImage("assets/story.gif")
    level1img = loadImage("assets/level1bg.png")
    level2img = loadImage("assets/spacebg.gif")
level3bg=loadImage("assets/level3img.jpg")
    dogsleepimg = loadImage("assets/dogsleep.png")
    dogawakeimg = loadImage("assets/dogwakeup.png")
    // idle image
    playeridlerightimg = loadAnimation("assets/player/idle/i1.png", "assets/player/idle/i2.png", "assets/player/idle/i3.png", "assets/player/idle/i4.png", "assets/player/idle/i5.png", "assets/player/idle/i6.png")
    playeridleleftimg = loadAnimation("assets/player/idle-left/i1.png", "assets/player/idle-left/i2.png", "assets/player/idle-left/i3.png", "assets/player/idle-left/i4.png", "assets/player/idle-left/i5.png")

    // dead images
    playerdeadrightimg = loadAnimation("assets/player/dead/d1.png", "assets/player/dead/d2.png", "assets/player/dead/d3.png", "assets/player/dead/d4.png", "assets/player/dead/d5.png")
    playerdeadleftimg = loadAnimation("assets/player/dead-left/d1.png", "assets/player/dead-left/d2.png", "assets/player/dead-left/d3.png", "assets/player/dead-left/d4.png", "assets/player/dead-left/d5.png")

    // fly images
    playerflyrightimg = loadAnimation("assets/player/fly/f1.png", "assets/player/fly/f2.png", "assets/player/fly/f3.png", "assets/player/fly/f4.png", "assets/player/fly/f5.png")
    playerflyleftimg = loadAnimation("assets/player/fly-left/f1.png", "assets/player/fly-left/f2.png", "assets/player/fly-left/f3.png", "assets/player/fly-left/f4.png", "assets/player/fly-left/f5.png")

    // run images
    playerrunrightimg = loadAnimation("assets/player/run/r1.png", "assets/player/run/r2.png", "assets/player/run/r3.png", "assets/player/run/r4.png", "assets/player/run/r5.png", "assets/player/run/r6.png", "assets/player/run/r7.png")
    playerrunleftimg = loadAnimation("assets/player/run-left/r1.png", "assets/player/run-left/r2.png", "assets/player/run-left/r3.png", "assets/player/run-left/r4.png", "assets/player/run-left/r5.png", "assets/player/run-left/r6.png", "assets/player/run-left/r7.png",)

    //shoot
    // playershootrightimg = loadAnimation("assets/player/shoot/s1.png", "assets/player/shoot/s2.png", "assets/player/shoot/s3.png")
    // playershootleftimg = loadAnimation("assets/player/shoot-left/s1.png", "assets/player/shoot-left/s2.png", "assets/player/shoot-left/s3.png")

    // dogrun
    dogrunimg = loadImage("assets/dogrun.gif")
    spaceshuttleimg = loadImage("assets/spaceshuttle.png")
    spacesuitimg = loadImage("assets/spacesuit.png")
    mapimg = loadImage("assets/map-alien.png")


    // levelupimage
    levelupimg = loadImage("assets/levelup.png")

    // space ship
    spaceshipimg=loadImage("assets/spaceship.png")

// missile
missileimg = loadImage("assets/shoot/missile.png")
shipshootimg=loadImage("assets/spaceshipshoot.png")
// destroyimg=loadAnimation("assets/shoot/b1.png","assets/shoot/b2.png","assets/shoot/b3.png","assets/shoot/b4.png","assets/shoot/b5.png")

// load sounds
backgroundmusic = loadSound("assets/bgmusic.mp3")
hitsoundlevel2=loadSound("assets/bullethit.mp3")
collectsoundlevel1 =loadSound("assets/collect.mp3")

}

function setup() {
    createCanvas(windowWidth, windowHeight)

    playbutton = createImg("assets/play.png")
    playbutton.position(width / 2 - 50, height - 150)
    playbutton.hide()

    nextbutton = createImg("assets/next.gif")
    nextbutton.position(width - 150, height - 80)
    nextbutton.size(120, 50)
    nextbutton.hide()

    backbutton = createImg("assets/back.gif")
    backbutton.position(20, 50)
    backbutton.size(120, 50)
    backbutton.hide()

    // level 1 items sprites


    // randx1 = Math.round(random(50, width - 100))
    // randy1 = Math.round(random(height - 80, height - 150))

    player = createSprite(80, height - 100)
    player.visible = false
    player.scale = 0.75
    player.velocityY = 1
    // player.debug = true
    player.setCollider("rectangle", 0, 0, 90, 2.5 * (player.height))

    // player.animationSpeed=0.25
    player.addAnimation("idleright", playeridlerightimg)
    player.addAnimation("idleleft", playeridlerightimg)

    player.addAnimation("runright", playerrunrightimg)
    player.addAnimation("runleft", playerrunleftimg)

    player.addAnimation("flyright", playerflyrightimg)
    player.addAnimation("flyleft", playerflyleftimg)


    // invisible ground
    invisibleGround = createSprite(width / 2, height - 10, width, 10)
    invisibleGround.visible = false

    // collectables level 1
    // dog
    randx = Math.round(random(50, width - 100))
    randy = Math.round(random(height - 10, height - 100))
    dog = createSprite(randx, randy)
    dog.addImage("sleep", dogsleepimg)
    dog.addImage("awake", dogawakeimg)
    dog.addImage("run", dogrunimg)
    // dog.debug = true
    dog.setCollider("circle", 0, 0, 40)
    dog.scale = 0.5
    dog.tint = "yellow"


    // map
    randx2 = Math.round(random(30, width - 100))
    randy2 = Math.round(random(120, height - 100))
    map = createSprite(randx2, randy2)
    map.addImage(mapimg)
    map.scale = 0.1
    map.tint = "yellow"




    // spacesuit
    randx3 = Math.round(random(70, width - 100))
    randy3 = Math.round(random(10, height - 100))
    spacesuit = createSprite(randx3, randy3)
    spacesuit.addImage(spacesuitimg)
    spacesuit.scale = 0.25
    spacesuit.tint = "yellow"


    // space shuttle
    randx4 = Math.round(random(90, width - 100))
    randy4 = Math.round(random(30, height - 100))
    spaceshuttle = createSprite(randx4, randy4)
    spaceshuttle.addImage(spaceshuttleimg)
    spaceshuttle.scale = 0.25
    spaceshuttle.tint = "yellow"

    dog.visible = false
    map.visible = false
    spacesuit.visible = false
    spaceshuttle.visible = false


    // collect sprites
    dogcollect = createSprite(width - (width / 4), 50)
    dogcollect.addImage(dogrunimg)
    dogcollect.scale = 0.25
    dogcollect.visible = false


    mapcollect = createSprite(width - (width / 4) - 50, 50)
    mapcollect.addImage(mapimg)
    mapcollect.scale = 0.01
    mapcollect.visible = false

    spaceshuttlecollect = createSprite(dogcollect.x + 50, 50)
    spaceshuttlecollect.addImage(spaceshuttleimg)
    spaceshuttlecollect.scale = 0.1
    spaceshuttlecollect.visible = false


    spacesuitcollect = createSprite(spaceshuttlecollect.x + 50, 50)
    spacesuitcollect.addImage(spacesuitimg)
    spacesuitcollect.scale = 0.1
    spacesuitcollect.visible = false



    // level1 start popup

    level1infoButton = createImg("assets/poplevel1.gif")
    level1infoButton.position(100, 0)
    level1infoButton.size(width / 1.25, height / 1.25)
    level1infoButton.hide()

    popDogButton = createImg("assets/popall.gif")
    popDogButton.position(100, 0)
    popDogButton.size(width / 1.25, height / 1.25)
    popDogButton.hide()

    // level2  popup


    level2infoButton = createImg("assets/level2popup.gif")
    level2infoButton.position(100, 0)
    level2infoButton.size(width / 1.25, height / 1.25)
    level2infoButton.hide()

    enemiesGroup = new Group

//  level 2 player shipshoot

shipshoot=createSprite(150, height - 100)
shipshoot.addImage(shipshootimg)
shipshoot.scale=0.5
shipshoot.visible=false


missileGroup = new Group
}

function draw() {

    if(!backgroundmusic.isPlaying()){
        backgroundmusic.play()
        backgroundmusic.setVolume(.05)
    }
    player.collide(invisibleGround)
    if (gameState === "wait") {
      
        background(waitbgimg)
        playbutton.show()
        nextbutton.hide()
        backbutton.hide()
        dog.visible = false
        map.visible = false
        spacesuit.visible = false
        spaceshuttle.visible = false
        player.visible = false
        dogcollect.visible = false
        mapcollect.visible = false
        spaceshuttlecollect.visible = false
        spacesuitcollect.visible = false
        level1infoButton.hide()
        popDogButton.hide()
        level2infoButton.hide()



    }


    playbutton.mousePressed(() => {
        gameState = "play"
        playbutton.hide()
        nextbutton.show()
        backbutton.show()

    })


    nextbutton.mousePressed(() => {
        gameState = "level1info"
        // playbutton.hide()
        nextbutton.hide()
        backbutton.show()
        level1infoButton.show()

    })

    level1infoButton.mousePressed(() => {
        gameState = "popDog"
        // playbutton.hide()
        nextbutton.hide()
        backbutton.show()
        level1infoButton.hide()
        popDogButton.show()


    })



    popDogButton.mousePressed(() => {
        gameState = "level1"
        // playbutton.hide()
        nextbutton.hide()
        backbutton.show()
        level1infoButton.hide()
        popDogButton.hide()



    })


    backbutton.mousePressed(() => {
        gameState = "wait"
        // playbutton.hide()
        nextbutton.hide()

    })

    if (gameState === "play") {
        background(story)
        dog.visible = false
        player.visible = false
        popDogButton.hide()


    }

    if (gameState === "level1info") {
        background(story)
        dog.visible = false
        player.visible = false
        level1infoButton.show()
    }
    if (gameState === "popDog") {
        background(story)
        dog.visible = false
        player.visible = false
        level1infoButton.hide()
        popDogButton.show()

    }



    if (gameState === "level1") {
        background(level1img)

        dog.visible = true

        player.visible = true


        if (player.isTouching(dog)) {
            dog.changeImage("awake")
            collectsoundlevel1.play()
            dog.scale = .3
            // dog.tint = ""
            map.visible = true
            dog.destroy()
            dogcollect.visible = true


        }
        if (player.isTouching(map)) {
            collectsoundlevel1.play()

            dog.destroy()
            dogcollect.visible = true
            mapcollect.visible = true
            spaceshuttle.visible = true
            map.destroy()

        }


        if (player.isTouching(spaceshuttle)) {
            collectsoundlevel1.play()

            map.destroy()
            dogcollect.visible = true
            mapcollect.visible = true
            spaceshuttle.destroy()
            spaceshuttlecollect.visible = true
            spacesuit.visible = true

        }


        if (player.isTouching(spacesuit)) {
            collectsoundlevel1.play()

            spaceshuttle.destroy()
            dogcollect.visible = true
            mapcollect.visible = true
            spacesuitcollect.visible = true
            spaceshuttlecollect.visible = true

            spacesuit.destroy()

            levelupalert1()

        }


        if (player.x >= width) {
            player.x = 50
        }
        if (player.x <= 0) {
            player.x = width - 100
        }



    }

    level2infoButton.mousePressed(() => {
        gameState = "level2start"
        // playbutton.hide()
        nextbutton.hide()
        player.x = 80
        player.y = height - 100
        player.changeImage("idleright")


    })


    if (gameState === "level2start") {
        background(level2img)
        level2infoButton.hide()
        player.visible = true
        level2()
fill(255)
text("SCORE : "+score,width-100,50)
if(score>=50){
    gameState="level3pop"
}
    }


if(gameState ==="level3pop"){
background(level3bg)
    levelupalert3()
    player.destroy()
    enemiesGroup.destroyEach()
    missileGroup.destroyEach()
}


    drawSprites()

}

function keyPressed() {
    if(gameState==="level1"){
    if (keyCode === DOWN_ARROW) {
        player.velocityX = 0
        player.velocityY = 5

        player.changeAnimation("flyright")

    }
    if (keyCode === UP_ARROW) {
        player.velocityX = 0
        player.velocityY = -5
        player.changeAnimation("flyleft")

    }
    if (keyCode === RIGHT_ARROW) {
        player.velocityX = 5
        player.velocityY = 0
        player.changeAnimation("runright")

    }
    if (keyCode === LEFT_ARROW) {
        player.velocityX = -5
        player.velocityY = 0
        player.changeAnimation("runleft")


    }

    }

    if(gameState==="level2start"){
 
   
        if (keyCode === DOWN_ARROW) {
            shipshoot.velocityX = 0
            shipshoot.velocityY = 5
    
               
        }
        if (keyCode === UP_ARROW) {
            shipshoot.velocityX = 0
            shipshoot.velocityY = -5
    
        }
        if (keyCode === RIGHT_ARROW) {
            shipshoot.velocityX = 5
            shipshoot.velocityY = 0
    
        }
        if (keyCode === LEFT_ARROW) {
            shipshoot.velocityX = -5
            shipshoot.velocityY = 0
    
    
        }

    if(keyCode === 32 ){
       spawnmissiles()
       hitsoundlevel2.play()
       shipshoot.depth=missile.depth
       missile.depth=missile.depth+1
       shipshoot.depth=shipshoot.depth-1
       missileGroup.add(missile)
       if(missileGroup.isTouching(enemiesGroup)){
        for(var i=0;i<missileGroup.length;i++){
            for(var j=0;j<enemiesGroup.length;j++)
           if(missileGroup.get(i).isTouching(enemiesGroup.get(j))){
            missileGroup.get(i).destroy()
            enemiesGroup.get(j).destroy()
    
           }
        score +=1
        }
       }
  

    }


    }
}



function keyReleased() {
    if(gameState==="level1"){
    if (keyCode === DOWN_ARROW) {
        player.velocityX = 0
        player.velocityY = 0
    }


    if (keyCode === LEFT_ARROW) {
        player.velocityX = 0
        player.velocityY = 0
    }

    if (keyCode === RIGHT_ARROW) {
        player.velocityX = 0
        player.velocityY = 0
    }

    if (keyCode === UP_ARROW) {
        player.velocityX = 0
        player.velocityY = 0
    }
}



}

function level2Info() {
    background(0)

    dogcollect.visible = false
    mapcollect.visible = false
    spaceshuttlecollect.visible = false
    spacesuitcollect.visible = false
    player.visible = false
    backbutton.hide()
    level2infoButton.show()

}
function level2() {
    // background(0)
    gameState = "level2start"
    spawnEnemyships()
    dogcollect.visible = false
    mapcollect.visible = false
    spaceshuttlecollect.visible = false
    spacesuitcollect.visible = false
    shipshoot.visible=true
    player.visible = false
    backbutton.hide()

}

function level3(){
    background(level3bg)
    player.destroy()
    enemiesGroup.destroyEach()
    missileGroup.destroyEach()
    shipshoot.destroy()
}

function levelupalert1() {

    swal({
        title: "You have done it!! ",
        text: " Now Hurry Up and Reach the Alien destination!!",
        imageUrl: "assets/levelup.png",
        imageSize: '200x200',
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'Find Them Now!!!',
    },
        function (isConfirm) {
            level2Info()
        })
}




function levelupalert3() {
    player.destroy()
    enemiesGroup.destroyEach()
    missileGroup.destroyEach()
    shipshoot.visible=false
    swal({
        title: "You have done it!! ",
        text: " You were able to free your Neighbours",
        imageUrl: "assets/win.gif",
        imageSize: '500x500',
        confirmButtonColor: '#DD6B55',
        confirmButtonText: 'RESTART',
    },
        function (isConfirm) {
           window.location.reload()
        })
}



function spawnEnemyships(){
    height1=height/2
    if(frameCount%100==0){
        // for(i=50;i<=400;i=i+100){
        //     for(j=150;j<=650;j=j+100){
r=Math.round(random(50,height-50))
        enemy=createSprite(width-50,r,50,50)
enemy.addImage(spaceshipimg)
enemy.scale=0.1
enemy.velocityX=-4
enemiesGroup.add(enemy)
//    }

// }
    }

   
    
}

function spawnmissiles(){

    
    missile=createSprite(shipshoot.x,shipshoot.y)
    missile.addImage(missileimg)
    missile.velocityX=5
    missile.scale=0.25
    missile.scale.width=.3

   
}