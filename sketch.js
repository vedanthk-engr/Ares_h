let game;
let roverTex, dashboard, exitboard, terrainModel, terrainTex, obsttex, obstModel;
let font1, font2, controlsPanel;

function preload(){
    terrainModel = loadModel('assets/models/terrain.obj', true);
    roverTex = loadImage('assets/image/rover.gif');
    dashboard = loadImage('assets/image/dashboard.png');
    exitboard = loadImage('assets/image/exitboard.png');
    terrainTex = loadImage('assets/image/terr_texture.jpg');
    obstTex = loadImage('assets/image/obst_texture.jpg');
    font1 = loadFont("Assets/Text/Ares.otf");
    font2 = loadFont('Assets/Text/Ares.ttf');
    controlsPanel = loadImage('assets/image/controls.jpg');
    obstModel = loadModel('assets/3d object/obstacle.obj');
}

function setup() {
    createCanvas(windowWidth, windowHeight, WEBGL);
    game = new GameManager(roverTex, obstTex, obstModel, terrainModel, terrainTex);
    textFont(font2);
}

function draw(){
    background("black");
    console.log("Game state:", game.state);
    game.update();
    game.draw();
    drawUI(game);
}

function keyPressed(){
    if(key === 'S' || key === 's'){
        if(game.state === 1) game.state = 2;
    }
    if(key === 'R' || key === 'r'){
        if(game.state === 3) game.reset();
    }
}

