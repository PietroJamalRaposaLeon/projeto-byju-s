var predio1, predio2, predio3, predio4, predio5, predio6, predio7, predio8, predio8; 
var predio1Img, predio2Img, predio3Img, predio4Img, predio5Img, predio6Img, predio7Img, predio8Img, predio8Img; 

var predioChamas, predioChamasImg;

var heroi, heroiImg, monstro, monstroImg;



function preload() {
   predio1Img = loadImage("img/predio1.png");
   predio2Img = loadImage("img/predio2.png"); 
   predio3Img = loadImage("img/predio3.png");
   predio4Img = loadImage("img/predio4.png");
   predio5Img = loadImage("img/predio5.png");
   predio6Img = loadImage("img/predio6.png");
   predio7Img = loadImage("img/predio7.png");
   predio8Img = loadImage("img/predio8.png");

   heroiImg= loadImage("img/super-heroi.png");
   monstroImg = loadImage("img/monstro.png");
}

function setup()
{
    createCanvas(1200,450);
}

function draw()
{
    background("black");

    predios();

    drawSprites();
}


function predios(){
    if(frameCount %80 == 0){
     var predio = createSprite(1100,390);
     predio.velocityX =-6;

     var rand = Math.round(random(1,9));

     switch (rand) {
        case 1 :
            predio.addImage(predio1Img);
            predio.scale = random(0.1, 0.5);
            break;

            case 2 :
            predio.addImage(predio2Img);
            predio.scale = random(0.1, 0.5);
            break;


            case 3 :
            predio.addImage(predio3Img);
            predio.scale = random(0.1, 0.5);
            break;

            case 4 :
            predio.addImage(predio4mg);
            predio.scale = random(0.1, 0.5);
            break;

            case 5 :
            predio.addImage(predio5Img);
            predio.scale = random(0.1, 0.5);
            break;

            case 6 :
            predio.addImage(predio6Img);
            predio.scale = random(0.1, 0.5);
            break;

            case 7 :
            predio.addImage(predio7Img);
            predio.scale = random(0.1, 0.5);
            break;

            case 8 :
            predio.addImage(predio8Img);
            predio.scale = random(0.1, 0.5);
            break;

            case 9 :
            predio.addImage(predio9Img);
            predio.scale = random(0.1, 0.5);
            break;


        default:
            break;
     }
    }
}
