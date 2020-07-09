class Papper{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2

        }
        this.body=Bodies.circle(x,y,2);
        this.radius=2;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        translate(pos.x,pos.y);
        fill("blue");
        circle(0,0,this.radius);
    }
}