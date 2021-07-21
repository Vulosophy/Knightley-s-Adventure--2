class Koopa{
    constructor(x,y){
        var options = {
            'density':1.0,
            'restitution':1.0
        }
        this.body = Bodies.rectangle(x,y,35, 35, options);
        this.image = loadImage('koopa.png')
        this.width = 35
        this.height = 35;
        World.add(world, this.body);
    }
    destroy(){ 
        World.remove(world, this.body) 
    }
    display(){
            if(this.body != null){
            push();
            imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
        pop();
         }
         else{
            push();
            this.visibility = this.visibility - 5
            tint(255, this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
         }
         if(enemy2.body.position.x < 648){
            Matter.Body.setVelocity(enemy2.body, {x: 9 , y:0})
        }
        if(enemy2.body.position.x > 902){
            Matter.Body.setVelocity(enemy2.body, {x:-9 , y:0})
        }
    }
}