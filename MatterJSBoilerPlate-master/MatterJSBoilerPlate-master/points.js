class gold{

    constructor(x, y){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, 15, 15, options);
        this.image = loadImage('coin.png')
        this.width = 15;
        this.height = 15;
        World.add(world, this.body);
    }
    display(){
        if(this.body != null){
        push();
        imageMode(CENTER);
        fill('yellow');
        image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
        pop();
        }
else {
        if(knight.body.position.x - coin1.body.position.x <10 && coin1.body.position.x - knight.body.position.x <10) {
            World.remove(world, this.body) 
            push();
            tint(255, this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
        }  
        if(knight.body.position.x - coin2.body.position.x <10 && coin2.body.position.x - knight.body.position.x <10) {
            World.remove(world, this.body) 
            push();
            tint(255, this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
        }  
        if(knight.body.position.x - coin3.body.position.x <10 && coin3.body.position.x - knight.body.position.x <10) {
            World.remove(world, this.body) 
            push();
            tint(255, this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
        }  
        if(knight.body.position.x - coin4.body.position.x <10 && coin4.body.position.x - knight.body.position.x <10) {
            World.remove(world, this.body) 
            push();
            tint(255, this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
        }  
        if(knight.body.position.x - coin5.body.position.x <10 && coin5.body.position.x - knight.body.position.x <10) {
            World.remove(world, this.body) 
            push();
            tint(255, this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
        }  
        if(knight.body.position.x - coin6.body.position.x <10 && coin6.body.position.x - knight.body.position.x <10) {
            World.remove(world, this.body) 
            push();
            tint(255, this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
        }  
        if(knight.body.position.x - coin7.body.position.x <10 && coin7.body.position.x - knight.body.position.x <10) {
            World.remove(world, this.body) 
            push();
            tint(255, this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
        }  
        if(knight.body.position.x - coin8.body.position.x <10 && coin8.body.position.x - knight.body.position.x <10) {
            World.remove(world, this.body) 
            push();
            tint(255, this.visibility)
            image(this.image, this.body.position.x, this.body.position.y, this.width, this.height)
            pop();
        }  
    }
    }





}