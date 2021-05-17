class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
        }
        this.x = x;
        this.y = y
        this.width = w;
        this.height = h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world, this.body);
    }

    display(){
        var posGround = this.body.position;

        push();
        translate(posGround.x, posGround.y);
        rectMode(CENTER);
        //strokeWeight(4);
        fill(128,128,128);
        rect(0,0,this.width, this.height);
        pop();
    }
}