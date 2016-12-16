var img, img1, img2, img3, img4, img5, img6, img7, img8, img9;
var tacos = [];
var x = 0;
var y = 0;
var message = "He ate me!";
var screenMode = 0;
var START = 0;
var CHARACTER = 1;
var TACO = 2;
var GAME = 3;
var xposition = 0;
var yposition = 0;
var numEaten = 0;

var tacoNames = ["classic taco.png", "fancy taco.png", "fish taco4.png", "flirty taco.png", "japanese quadruplet tacos.png", "monster taco.png"];
var characterNames = ["taco man.jpg", "taco man.jpg", "taco man2.gif", "luchador.jpg"];

var pickedTaco = 0;
var pickedCharacter = 0;

var characterImages = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 4; i++) {
    characterImages[i] = loadImage(characterNames[i]);
  }
  img4 = loadImage(tacoNames[0]);
  img5 = loadImage(tacoNames[1]);
  img6 = loadImage(tacoNames[2]);
  img7 = loadImage(tacoNames[3]);
  img8 = loadImage(tacoNames[4]);
  img9 = loadImage(tacoNames[5]);


}

function draw() {
  background(255);
  if (screenMode == START) {
    startScreen();
  } else if (screenMode === CHARACTER) characterScreen();
  else if (screenMode === TACO) tacoScreen();
  else if (screenMode === GAME) {
    image(characterImages[pickedCharacter], xposition, yposition, 100, 100);
    for (var i = 0; i < tacos.length; i++) {
      tacos[i].display();
      tacos[i].isTouchingMan();
    }
    //   if (keyIsPressed && keyCode === RIGHT) {
    //     xposition = xposition + 20;
    //   }
    //   else if (keyIsPressed && keyCode === LEFT) {
    //     xposition = xposition - 20;
    //   }
    //   else if (keyIsPressed && keyCode === UP) {
    //     yposition = yposition - 20;
    //   }
    //   else if (keyIsPressed && keyCode === DOWN) {
    //     yposition = yposition + 20;
    //   }
    // }
  }

  // var xposition = 0; //starting x position of the ball
  // var yposition = 200; //starting y position of the ball

  if (keyIsPressed && keyCode === RIGHT_ARROW) {
    xposition = xposition + 20;
    if (xposition > width) {
      xposition = 0;
    }
  }
  if (keyIsPressed && keyCode === LEFT_ARROW) {
    xposition = xposition - 20;
    if (xposition < 0) {
      xposition = width;
    }
  }
  if (keyIsPressed && keyCode === UP_ARROW) {
    yposition = yposition - 20;
    if (yposition < 0) {
      yposition = height;
    }
  }
  if (keyIsPressed && keyCode === DOWN_ARROW) {
    yposition = yposition + 20;
    if (yposition > height) {
      yposition = 0;
    }
  }
}

// function keyPressed() {
//     if (keyCode === LEFT_ARROW)
//       xposition -= 15;
//     else if (keyCode === RIGHT_ARROW)
//       xposition += 15;
//     else if (keyCode ===  UP_ARROW)
//       yposition -= 15;
//     else if (keyCode === DOWN_ARROW)
//       yposition += 15;
// }

function SuperTaco() {
  this.x = Math.floor(random(width));
  this.y = Math.floor(random(height));
  this.alive = true;

  this.imge = loadImage(tacoNames[pickedTaco]);
  this.display = function() {
    if (this.alive === true) {
      image(this.imge, this.x, this.y, this.imge.width / 4, this.imge.height / 4);
    }
  }
  this.isTouchingMan = function() {
    var xvalues = (xposition + 50) - (this.x + this.imge.width / 8)
    var yvalues = (yposition + 50) - (this.y + this.imge.height / 8)
    var d = sqrt((xvalues) * (xvalues) + (yvalues) * (yvalues))
    if (d < 50 + this.imge.width / 8)
      this.sustainHit();
  }

  this.move = function() {



  }
  this.sustainHit = function() {
    this.alive = false;
    console.log(numEaten++);
  };
}

function tacosLeft() {
  var counter = 0;
  for (var i = 0; i < tacos.length; i++) {
    if (tacos[i].alive === true) {
      counter++;
    }
  }
  return (counter);
}

function startScreen() {
  background(255, 204, 0);
  textSize(100);
  text("Click to start!", 100, height / 2);
}

function mousePressed() {
  if (screenMode === CHARACTER) {
    if (mouseX >= 100 && mouseX < 200) {
      pickedCharacter = 1;
    } else if (mouseX >= 200 && mouseX < 300) {
      pickedCharacter = 2;
    } else if (mouseX >= 300 && mouseX < 400) {
      pickedCharacter = 3;
    }
    console.log(pickedCharacter);
  } else if (screenMode === TACO) {
    if (mouseX >= 100 && mouseX < 200) {
      pickedTaco = 0;
    } else if (mouseX >= 200 && mouseX < 300) {
      pickedTaco = 1;
    } else if (mouseX >= 300 && mouseX < 400) {
      pickedTaco = 2;
    } else if (mouseX >= 400 && mouseX < 500) {
      pickedTaco = 3;
    } else if (mouseX >= 500 && mouseX < 600) {
      pickedTaco = 4;
    } else if (mouseX >= 600 && mouseX < 700) {
      pickedTaco = 5;
    }

    for (var i = 0; i < 10; i++) {
      tacos[i] = new SuperTaco();
    }
  }
  screenMode++;
  if (screenMode > GAME) {
    screenMode = GAME;
  }

}

function characterScreen() {
  background(255);
  image(characterImages[1], 100, 100, 100, 100);
  image(characterImages[2], 200, 100, 100, 100);
  image(characterImages[3], 300, 100, 100, 100);
}

function tacoScreen() {
  background(255);
  image(img4, 100, 100, 100, 100);
  image(img5, 200, 100, 100, 100);
  image(img6, 300, 100, 100, 100);
  image(img7, 400, 100, 100, 100);
  image(img8, 500, 100, 100, 100);
  image(img9, 600, 100, 100, 100);
}