class Pig  {
    constructor(x,y){
        var options= { restitution:1,density:2  }
        
     this.body=Bodies.rectangle(x,y,50,50,options);
     World.add(world,this.body);

    }
display(){
rectMode(CENTER);
push ();
fill("green")
translate(this.body.position.x,this.body.position.y) 
rotate(this.body.angle); 
rect(0,0,50,50);
pop(); 


}

}