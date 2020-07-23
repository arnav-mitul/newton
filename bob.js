class ball{
    constructor(x,y,width){
    
    this.body=Bodies.circle(x,y,width);
    this.x=x
    this.y=y
    this.width=width

    World.add(world,this.body)
    }
    display(){
     var pos=this.body.position
    ellipseMode(RADIUS)
    fill("yellow")
    ellipse(pos.x,pos.y,this.width)

    }
}
