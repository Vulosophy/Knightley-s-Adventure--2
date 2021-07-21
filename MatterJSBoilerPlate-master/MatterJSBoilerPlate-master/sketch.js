
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var enemy1, enemy2;
var ground, knight;
var plat1, plat2, plat3;
var coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coins = [];
var cooldown = 100;

function preload()
{

}

function setup() {
	var canvas = createCanvas(1800, 935)
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(900, 930, 2000, 10);
	plat1 = new Ground(450, 840, 300, 20);
	plat2 = new Ground(780, 720, 300, 20);
	
	plat3 = new Ground(1200,600, 300, 20);

	coin1 = new gold(410, 800);
	coin2 = new gold(410, 760);
	coin3 = new gold(430, 800);
	coin4 = new gold(430, 760);
	coin5 = new gold(450, 800);
	coin6 = new gold(450, 760);
	coin7 = new gold(470, 800);
	coin8 = new gold(470, 760);

	coins.push(coin8);
	coins.push(coin7);
	coins.push(coin6);
	coins.push(coin5);
	coins.push(coin4);
	coins.push(coin3);
	coins.push(coin2);
	coins.push(coin1);

	knight = new Knight(50, 900, 20, 20);
	enemy1 = new Goomba(700, 900);
	enemy2 = new Koopa(750, 700);
	Matter.Body.setVelocity(enemy1.body, {x: -7 , y:0})
	Matter.Body.setVelocity(enemy2.body, {x: -4 , y:0})
	
	

	
}


function draw() {
	background("lightblue")
	Engine.update(engine);
 ground.display();
 knight.display();
 plat1.display();
 plat2.display();

 plat3.display();

 enemy1.display();
 enemy2.display();
 
 coin1.display();
 coin2.display();
 coin3.display();
 coin4.display();
 coin5.display();
 coin6.display();
 coin7.display();
 coin8.display();
 
 cooldown += Math.round(getFrameRate() / 30)
}

function keyPressed(){
	if(keyCode === 37 ){
		//knight.body.position.x -= 2
		//Matter.Body.setVelocity(knight.body, {x:-5, y: knight.body.velocityY})
		Matter.Body.applyForce(knight.body,{x: knight.body.position.x, y: knight.body.position.y}, {x: -3, y:0} )
		
	}
	
	if(keyCode === 39  ){
		//knight.body.position.x += 2
		//Matter.Body.setVelocity(knight.body, {x:5, y:knight.body.velocityY})
		Matter.Body.applyForce(knight.body,{x: knight.body.position.x, y: knight.body.position.y}, {x: 3, y:0} )
	}
	if(keyCode === 38 && cooldown >= 60){
		//knight.body.position.y -= 2
		//Matter.Body.setVelocity(knight.body, {x: knight.body.velocityX, y: -10})
		Matter.Body.applyForce(knight.body,{x: knight.body.position.x, y: knight.body.position.y}, {x: 0, y:-15} )
		cooldown = 0
	}
	if(keyCode === 40  ){
		//knight.body.position.y += 2
		//Matter.Body.setVelocity(knight.body, {x: knight.body.velocityX, y: 5})
		Matter.Body.applyForce(knight.body,{x: knight.body.position.x, y: knight.body.position.y},  {x: 0, y:3} )
	}
	if(knight.body.position.x - enemy1.body.position.x <50 && enemy1.body.position.x - knight.body.position.x <50 && keyCode ===32){
		enemy1.destroy();
	}
	if(knight.body.position.x - enemy1.body.position.x <50 && enemy1.body.position.x - knight.body.position.x <50 && keyCode ===32){
		enemy2.destroy();
	}

}

